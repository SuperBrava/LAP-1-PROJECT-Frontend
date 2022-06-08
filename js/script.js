// emoji script

$(document).ready(function() {
    $("#postbar").emojioneArea({
        pickerPosition: "bottom"
    });
})

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
//just working on the gify api 


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
    //append post instance to queried selection
    document.querySelector('#postResults').append(postContainer);
}
//for this function I need to add a pop up for the text area reply box too 
//add also one for the new h2 