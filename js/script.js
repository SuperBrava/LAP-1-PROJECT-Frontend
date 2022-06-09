// emoji script

/*
$(document).ready(function() {
    $("#postbar").emojioneArea({
        pickerPosition: "bottom"
    });
})
*/
/*

this is to hide the search bar still need to fix it 

document.getElementById("hidediv").style.display = "none";

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
*/


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

module.exports = init;
//just working on the gify api 

// creates a html elements and populates innertext with post data
function postInstance(post){
    const postContainer = document.createElement('div');
    postContainer.className = "m-auto mt-5 col-lg-7 col-md-8 col-sm-10 post"
    
    const title = document.createElement('h4');
    title.innerText = "Windoge XP";
    postContainer.append(title);

    const posttitle = document.createElement('h2');
    posttitle.innerText = post["post-title"];
    postContainer.append(posttitle);

    const postText = document.createElement('p');
    postText.className = "card-text";
    postText.innerText = post["post-body"];
    postContainer.append(postText);

    const upVote = document.createElement('img');
    upVote.className = 'card-icon3'
    upVote.src = "./assets/arrow1.png"
    postContainer.append(upVote);

    const downVote = document.createElement('img');
    downVote.className = 'card-icon4'
    downVote.src = "./assets/arrow1.png"
    postContainer.append(downVote);

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

    //reactions group container
    const reactions = document.createElement('span');
    reactions.className = 'reaction-group';
    reactions.style.display = "inline-flex";

    const react1 = document.createElement('a');
    react1.className = 'btn';
    react1.id = "reaction1";
    react1.href = '#';
    react1.innerText = "reaction1";
    reactions.append(react1);

    const react2 = document.createElement('a');
    react2.className = 'btn';
    react1.id = "reaction2";
    react2.href = '#';
    react2.innerText = "reaction2";
    reactions.append(react2);

    const react3 = document.createElement('a');
    react3.className = 'btn';
    react1.id = "reaction3";
    react3.href = '#';
    react3.innerText = "reaction3";
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
    commentText.innerText = comment["reply-body"];
    commentContainer.append(commentText);
    return commentContainer;
}

let category = document.querySelector("#category").innerHTML.toLowerCase();
console.log(category);

// JSON integration to FE
function fetchLoading () {
    fetch(`http://localhost:5000/get/posts/${category}`)
        .then(r => r.json())
        .then(r => {
            r.data.forEach(element => postInstance(element));
        })
        .catch(console.warn);
    };

// JSON POST Data

let newPost = document.querySelector("#postbartitle").innerText;

console.log(newPost);


async function callPost() {
    const data = 
        { postTopic: category, 
            postTitle: document.querySelector("#postbartitle").value,  
        postBody: document.querySelector("#postbar").value
    };
    fetch('http://localhost:5000/post/post/',  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
    .catch((error) => {
        console.error('Error:', error);
        });
};

let submitPost = document.querySelector("#submitPost").addEventListener("click", (e) => {
    e.preventDefault();
    callPost();
    fetchLoading()
});

//for this function I need to add a pop up for the text area reply box too 
//add also one for the new h2 

// const fs = require('fs');

// fs.readFile('https://api.allorigins.win/raw?url=https://portfolio-project-1-backend.herokuapp.com/get/readPost', 'utf-8', (err, jsonString) => {
    
//         console.log(jsonString);
    
// });

fetchLoading();