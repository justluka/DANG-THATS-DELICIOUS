const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
 const wes={name:'luis',age:100, cool:true};
  //res.json(wes);
  //res.send(req.query);
   res.render('hello',{name:'wes',dog:'Hugo', title:'I love Food'});  
});

router.get('/reverse/:name',(req,res)=>{
   res.send(req.params);
});

//someone was here from MAcOS -- esta es un nuevo test,
//aprendiendo a usar github
module.exports = router;
