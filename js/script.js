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













function postInstance(){
    const postContainer = document.createElement('div');
    postContainer.className = "m-auto mt-5 col-lg-7 col-md-8 col-sm-10 post"
    
    const title = document.createElement('h4');
    title.innerText = "Windoge XP";
    postContainer.append(title);

    const posttitle = document.createElement('h2');
    posttitle.innerText = "A joke I wrote";
    postContainer.append(title);

    const postText = document.createElement('p');
    postText.className = "card-text";
    postText.innerText = "A programmer is sent to the grocery store with instructions to "Buy butter and see whether they have eggs, if they do, then buy 10. Returning with 10 butters, the programmer says, "They had eggs.";
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

    document.querySelector('.test').append(postContainer);
}

postInstance();

//for this function I need to add a pop up for the text area reply box too 
//add also one for the new h2 