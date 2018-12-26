var express=require('express')();

express.get('/', (req,res)=>{

res.send("Hello Jai");

});

// express.all('/test', function(req, res){
//    res.send("HTTP method doesn't have any effect on this route!");
// });

// express.post('/', (req, res)=>{
//    res.send("You just called the post method at '/hello'!\n");
// });
express.listen(3000);
