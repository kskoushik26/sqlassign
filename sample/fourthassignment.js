const fs = require('fs');

let lyrics = 'Hello  Welcome To The World ';

fs.writeFile('hell.txt', lyrics, (err) => {  
  
    if (err) throw err;

    console.log('Written into the file ');
});