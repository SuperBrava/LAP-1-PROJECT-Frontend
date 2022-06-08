

//Resolving Server Connection Issue-->
  fetch('https://api.allorigins.win/raw?url=https://portfolio-project-1-backend.herokuapp.com/get/readPost')
    .then(r => r.json())
    .then(r => console.log(r))
    // .then(r => console.log(r.data[0]["post-body"]))
    .catch(console.warn);

var dataset; 
    fetch('https://api.allorigins.win/raw?url=https://portfolio-project-1-backend.herokuapp.com/get/readPost') 
        .then(response => response.json()) 
        .then(data => {
         dataset = data;
            logDataset(); 
    });  
    
    function logDataset () { 
      console.log(dataset); 
    }




//for each loop
//createinstance function

    // const fs = require("fs");

    // function jsonReader(filePath, cb) {
    //   fs.readFile(filePath, (err, fileData) => {
    //     if (err) {
    //       return cb && cb(err);
    //     }
    //     try {
    //       const object = JSON.parse(fileData);
    //       return cb && cb(null, object);
    //     } catch (err) {
    //       return cb && cb(err);
    //     }
    //   });
    // }
    // jsonReader("./customer.json", (err, customer) => {
    //   if (err) {
    //     console.log(err);
    //     return;
    //   }
    //   console.log(customer.address); // => "Infinity Loop Drive"
    // });

    // const fs = require('fs');

    // fs.readFile('https://api.allorigins.win/raw?url=https://portfolio-project-1-backend.herokuapp.com/get/readPost', 'utf-8', (err, jsonString) => {
        
    //         console.log(jsonString);
        
    // });