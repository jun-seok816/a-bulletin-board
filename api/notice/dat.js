const express = require('express');
const router = express.Router();

router.post('/Insert',(req,res)=>{
    if(!req.session.login){
      res.redirect(302,'/')
    }else{
      const sql = `INSERT INTO tbl_dat (f_number,f_user,f_word) VALUES(?,?,?)`;
      process._myApp.db.query(sql,[req.body.f_number,req.body.f_user,req.body.f_word],(err,result)=>{
        if(err){
          res.send({error:true,message:JSON.stringify(err)})
        }else{
          const sql2 = `UPDATE tbl_noticeMain SET f_datCount = tbl_noticeMain.f_datCount+1 WHERE f_number = ${req.body.f_number}`
          process._myApp.db.query(sql2);
          res.send({error:false,message:'댓글 작성완료'});
        }
      })
    }
  })
  router.post('/Update',(req,res)=>{
    if(!req.session.login){
      res.redirect(302,'/')
    }else{
      const sql = `UPDATE tbl_dat SET f_word = '${req.body.f_word}' WHERE f_datNum = ${req.body.f_datNum}`;
      process._myApp.db.query(sql,(err,result)=>{
        if(err){
          res.send({error:true,message:JSON.stringify(err)})
        }else{
          res.send({error:false,message:'댓글 수정 완료'});
        }
      })
    }
  })
  router.post('/Delete',(req,res)=>{
    if(!req.session.login){
      res.redirect(302,'/')
    }else{
      const sql = `Delete FROM tbl_dat WHERE f_datNum = ${req.body.f_datNum}`;
      process._myApp.db.query(sql,(err,result)=>{
        if(err){
          res.send({error:true,message:JSON.stringify(err)})
        }else{
          res.send({error:false,message:'댓글 삭제 완료'});
        }
      })
    }
  })
  router.get('/Select/:id',(req,res)=>{
    if(!req.session.login){
      res.redirect('/')
    }else{
      const page_id = req.params.id;
      const sql = `SELECT f_user
                         ,f_word
                         ,date_format(f_date, '%Y-%m-%d') as f_date 
                         ,f_datNum
                         ,f_number
                         FROM tbl_dat WHERE f_number = ${page_id}
                         ORDER BY f_datNum`;
      process._myApp.db.query(sql,(err,result)=>{
        if(err){
          res.send({error:true,message:'댓글 검색 오류'})
        }else{
          res.send({database:result});
        }
      })
    }
  })
module.exports = router;