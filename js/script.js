// emoji script

$(document).ready(function() {
    $("#postbar").emojioneArea({
        pickerPosition: "bottom"
    });
})

let APIKEY = "KjhTKrHYVKk4fs2vueEKEy2poFC5QzPy";

document.addEventListener("loadthecontent", init);
function init() {
    document.getElementById("btnSearch").addEventListener("click", ev =>{
        ev.preventDefault();
        let url= `https://api.giphy.com/v1/gifs/trending?api_key=${apikey}&limit=5`;
        let str= document.getElementById("search").value.trim();
        url = url.concat(str);
        console.log(url);
        fetch(url)
        .then(response => response.json())
        .then(content => {
            console.log(content.data);
            console.log("META", content.meta);
            let fig = document.createElement('figure');
            let img = document.createElement('img');
            let fc = document.createElement('figcaption');
            img.src = content.data[0].images.downsized.url;
            img.alt = content.data[0].title;
            fc.textContent = content.data[0].title;
            fig.appendChild(img);
            fig.appendChild(fc);
            let out = document.querySelector('.out');
            out.insertAdjacentElement('afterbegin', fig);

        })
            .catch(err => {
                console.error(err);
     })                               
    });
}

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


// JSON integration to FE
// fetch('https://api.allorigins.win/raw?url=https://portfolio-project-1-backend.herokuapp.com/post/topic/programming')
//     .then(r => r.json())
//     .then(r => {
//         r.data.forEach(element => postInstance(element));
//     })
//     .catch(console.warn);

// document.querySelector("postInstance")


//for this function I need to add a pop up for the text area reply box too 
//add also one for the new h2 

// const fs = require('fs');

// fs.readFile('https://api.allorigins.win/raw?url=https://portfolio-project-1-backend.herokuapp.com/get/readPost', 'utf-8', (err, jsonString) => {
    
//         console.log(jsonString);
    
// });