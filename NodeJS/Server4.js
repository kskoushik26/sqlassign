const fs = require('fs');

let lyrics = 'Hello Jai Welcome To The World ';

fs.writeFile('haha.txt', lyrics, (err) => {  

    if (err) throw err;

    console.log('Written into the file ');
});
