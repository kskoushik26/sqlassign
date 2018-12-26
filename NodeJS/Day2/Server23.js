var express=require('express')();

express.get('/hello', (req,res)=>{

res.send("Hello Jai");

});
var num= +process.argv[2]
express.listen(num);
