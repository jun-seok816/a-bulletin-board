const express = require('express');
const router = express.Router();

router.post('/Login',(req,res)=>{
    const sql = `SELECT * FROM tbl_user WHERE f_id = '${req.body.h_id}' AND f_password = '${req.body.h_password}'`;
    process._myApp.db.query(sql,(err,result)=>{
      if(err)throw err;
      if(result[0]){
        req.session.login = req.body.h_id;
        req.session.save(err =>{
          if(err) res.send({login: false, message : err});
          res.send({login: true})
        })
      }else{
        res.send({login:false , message : '아이디나 비밀번호를 확인해 주세요'})
      }
    })
  
})

router.get('/logout',(req,res)=>{
  console.log('session destroy : ' + req.session.login )
  req.session.destroy(function(){ 
    console.log('session destroy : ' + req.session )
    res.send('logout')
  });
})

router.post('/Signup',(req,res)=>{
  if (!req.body.h_id||!req.body.h_password) return res.status(400).send({ error:true, message: 'Please provide task' });
  const sql = "INSERT INTO tbl_user (f_id,f_password) VALUES(?,?)";
  process._myApp.db.query(sql,[req.body.h_id,req.body.h_password],(err,result)=>{
    if(err){
      res.send({error:true,message:'중복된 아이디입니다'});
    }else{
      req.session.login = req.body.h_id;
      res.send({error:false,message:'회원가입 완료'});
    }
  })
})
router.use('/LoginCheck',(req,res)=>{
  if(req.session.login){
    const loginToken =req.session.login;
    res.send({loginToken});
  }else{
    res.send(false)
  }
})
module.exports = router;
