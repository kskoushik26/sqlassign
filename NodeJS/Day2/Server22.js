const express = require('express')();




express.get('/year',(req, res)=>{
  var date=new Date();
  var age=req.query.id;
  var lol=date.getFullYear();
  var born=lol-age;
   res.send('The id  you specified is born on  ' +born);
});
express.listen(3000);
