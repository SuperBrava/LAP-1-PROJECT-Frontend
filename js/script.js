// emoji script

/*
$(document).ready(function() {
    $("#postbar").emojioneArea({
        pickerPosition: "bottom"
    });
})
*/

let category = "programming";
let keyword = "";

const queryString = window.location.search;
const urlToken = queryString.split('?');
if (urlToken.length == 2) {
    let parameter = urlToken[1];
    let tokens = parameter.split('&');
    tokens.forEach((curToken) => {
        let pairs = curToken.split('=');
        let name = pairs[0];
        let val = pairs[1];
        if (name === 'topic') {
            category = val.toLocaleLowerCase();
        }
        if (name === 'keyword') {
            category = val.toLocaleLowerCase();
            keyword = val.toLocaleLowerCase();
        }
    });
}

const searchButton = document.querySelector("#search-button");
searchButton.addEventListener('click', (e) => {
    console.log("clicked");
    const keywordElement = document.querySelector("#searchKeyword");
    let searchKeyword = keywordElement.value;
    let destination;
    let currentUrl = window.location.href;
    console.log(currentUrl);
    let tokens = currentUrl.split('?');
    if (!curPage.includes('index.html')) {
        destination = tokens[0]+'?keyword='+searchKeyword;
        window.location.href = destination;
        //e.preventDefault();
    } else {
        destination = 'topic.html?keyword='+searchKeyword;
        window.location.href = destination;
        //e.preventDefault();
    }
});


const curPage = window.location.pathname;
if (!curPage.includes('index.html')) {
    if (keyword !== "") {
        document.querySelector("#category").innerHTML = 'Search Result: <br>' + capitalizeFirstLetter(keyword);
        document.title = 'Windoge XP - ' + capitalizeFirstLetter(keyword);
        submitSearch(keyword);
    } else {
        document.querySelector("#category").innerHTML = capitalizeFirstLetter(category);
        document.title = 'Windoge XP - ' + capitalizeFirstLetter(category);
        fetchLoading(category);
    }

    document.getElementById("hidediv").style.display = "none";
    let newPost = document.querySelector("#postbartitle").innerText;
    console.log(newPost);

    let submitPost = document.querySelector("#submitPost").addEventListener("click", (e) => {
        e.preventDefault();
        callPost();
        fetchLoading()
    });

    let APIKEY = "KjhTKrHYVKk4fs2vueEKEy2poFC5QzPy";

    document.addEventListener("DOMContentLoaded", init);
    function init() {
    document.getElementById("btnSearch").addEventListener("click", ev => {
        ev.preventDefault(); //to stop the page reload
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
        let str = document.getElementById("search").value.trim();
        url = url.concat(str);
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(content => {
            //  data, pagination, meta
            console.log(content.data);
            console.log("META", content.meta);
            let fig = document.createElement("figure");
            let img = document.createElement("img");
            img.src = content.data[0].images.downsized.url;
            img.alt = content.data[0].title;
            fig.appendChild(img);
            //add to textarea.textContent -- innerhtml
            //let textareacon = document.getElementById("postbar");
            //textareacon.textContent = (img);
            let out = document.querySelector(".out");
            out.insertAdjacentElement("afterbegin", fig);
            document.querySelector("#search").value = "";
        })
        .catch(err => {
            console.error(err);
        });
    });
    }
}





function hideSearch(){
    const x = 
    document.getElementById("hidediv");
    if(x.style.display === "none")
{
    x.style.display = "block";
}else{
    x.style.display = "none";
}
}



/*

i've commented this out because it's wrong 

const form = document.querySelector('.gifform');
const searchbtn = document.queryCommandValue('.searchbtn');
const gobtn = document.querySelector('.btnSearch');
const search1 = document.querySelector('.search1')

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const btnSearch = e.target.btn.value; //one for the search button
    const search1 = e.target.searchlabel.value; //so we have one for the searchbar LABEL
    const gifform = e.target.gifform.value; //one for the entire form 
    const searchbtn = e.target.searchbar1.value;
    form.classList.add('hide');

   
})
*/
/*

//working on this in the programming html trying to hide the form search bar and when you click on the button the form shows up 
document.addEventListener("searchbar loaded" , searchbar);
function searchbar(){
document.getElementById("gif").addEventListener("click", e =>{
    e.preventDefault();
    let input = document.createElement("input");
    search.append(search);
})
}
*/

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

// module.exports = init;
//just working on the gify api 

function emptyInstance() {
    document.querySelector('#postResults').innerHTML = "";
}

// creates a html elements and populates innertext with post data
function postInstance(post){
    const postContainer = document.createElement('div');
    postContainer.className = "m-auto mt-5 col-lg-7 col-md-8 col-sm-10 post"
    postContainer.dataset.postid = post["post-id"];
    
    const title = document.createElement('h4');
    title.innerText = "Windoge XP";
    postContainer.append(title);

    const posttitle = document.createElement('h2');
    posttitle.innerText = post["post-title"];
    postContainer.append(posttitle);

    const postText = document.createElement('div');
    postText.contentEditable = "true";
    postText.className = "out";
    
    const textSpan = document.createElement('span');
    textSpan.className = "span1"
    textSpan.innerText = post["post-body"];

    postText.append(textSpan);
    postContainer.append(postText);

    
    /*const upVote = document.createElement('img');
    upVote.className = 'card-icon3'
    upVote.src = "./assets/arrow1.png"
    postContainer.append(upVote);

    const downVote = document.createElement('img');
    downVote.className = 'card-icon4'
    downVote.src = "./assets/arrow1.png"
    postContainer.append(downVote);*/

    //reply
    const replyArea = document.createElement('TEXTAREA');
    replyArea.className = "replyArea";
    replyArea.placeholder = "Comment here";
    postContainer.append(replyArea);

    const replyBtn = document.createElement('a');
    replyBtn.className = 'btn';
    replyBtn.href = '#';
    replyBtn.innerText = "reply";
    postContainer.append(replyBtn);

    replyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const postId = parseInt(post['post-id']);
        const postTopic = post['post-topic'];
        const comment = replyArea.value;
        addComment(postId, postTopic, comment);
    })


    //reactions group container
    const reactions = document.createElement('span');
    reactions.className = 'reaction-group';
    reactions.style.display = "inline-flex";

    const react1 = document.createElement('a');
    react1.className = 'btn';
    react1.id = "reaction1";
    react1.href = '#';
    react1.innerText = "👍 (" + post['post-reactions']['reaction1'] + ")";
    react1.addEventListener('click', (e)=>{
        submitReaction('reaction1', post['post-topic'], post['post-id']);
    });
    reactions.append(react1);

    const react2 = document.createElement('a');
    react2.className = 'btn';
    react1.id = "reaction2"
    react2.href = '#';
    react2.innerText = "👻 (" + post['post-reactions']['reaction2'] + ")";
    react2.addEventListener('click', (e)=>{
        submitReaction('reaction2', post['post-topic'], post['post-id']);
    });
    reactions.append(react2);

    const react3 = document.createElement('a');
    react3.className = 'btn';
    react1.id = "reaction3";
    react3.href = '#';
    react3.innerText = "👎 (" + post['post-reactions']['reaction3'] + ")";
    react3.addEventListener('click', (e)=>{
        submitReaction('reaction3', post['post-topic'], post['post-id']);
    });
    reactions.append(react3);

    postContainer.append(reactions);

    //comments
    const commentContainer = document.createElement('span');
    commentContainer.className = "commentContainer";
    post['post-comments'].forEach(comment => {
        commentContainer.append(appendComments(comment));
    });
    postContainer.append(commentContainer);


    //append post instance to queried selection
    document.querySelector('#postResults').append(postContainer);
}



//Create and append available comments to posts
function appendComments(comment){
    const commentContainer = document.createElement('span');
    const commentText = document.createElement('p');
    commentText.className = "comment";
    commentText.innerText = "> " + comment["reply-body"];
    commentContainer.append(commentText);
    return commentContainer;
}

// JSON integration to FE
function fetchLoading () {
    fetch(`http://localhost:5000/post/topic/${category}`)
        .then(r => r.json())
        .then(r => {
            r.data.forEach(element => postInstance(element));
        })
        .catch(console.warn);
    };

// JSON POST Data




async function callPost() {
    const data = 
        { postTopic: category, 
            postTitle: document.querySelector("#postbartitle").value,  
        postBody: document.querySelector("#postbar").textContent
    };
    console.log(data)
    fetch('http://localhost:5000/post/post/',  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
    .then(() => {
        //emptyInstance();
        //fetchLoading();
    })
    .catch((error) => {
        console.error('Error:', error);
        });
        
};

async function addComment(postId, postTopic, comment) {
    const data = 
        { 
            postId: postId,
            topic: postTopic, 
            comment: comment
    };
    fetch('http://localhost:5000/post/comment',  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
    .then(() => {
        //emptyInstance();
        //fetchLoading();
    })
    .catch((error) => {
        console.error('Error:', error);
        });
        location.reload();
};

async function submitReaction(reactionType, topic, postId) {
    const data = 
        { 
            postId: postId,
            replyId: null,
            topic: topic, 
            reactionType: reactionType
    };
    fetch('http://localhost:5000/post/reaction',  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
    .then(() => {
        //emptyInstance();
        //fetchLoading();
    })
    .catch((error) => {
        console.error('Error:', error);
        });
};

function submitSearch(searchKeyword) {
    emptyInstance();
    fetch(`http://localhost:5000/post/topic/search/${searchKeyword}`)
        .then(r => r.json())
        .then(r => {
            r.forEach(element => postInstance(element));
        })
        .catch(console.warn);
}

//for this function I need to add a pop up for the text area reply box too 
//add also one for the new h2 

// const fs = require('fs');

// fs.readFile('http://localhost:5000/get/readPost', 'utf-8', (err, jsonString) => {
    
//         console.log(jsonString);
    
// });

