

//Resolving Server Connection Issue-->
  fetch('https://api.allorigins.win/raw?url=https://portfolio-project-1-backend.herokuapp.com/get/readPost')
    .then(r => r.json())
    .then(r => console.log(r))
    .catch(console.warn);

console.log()