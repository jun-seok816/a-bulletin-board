const express = require('express');
const router = express.Router();
router.get('/Main/:category',(req,res)=>{
    if(!req.session.login){
      res.redirect('/')
    }else{
      let category = req.params.category;
      let sql = '';
      if(category === '전체') 
      { sql = `SELECT f_number
                      ,f_title
                      ,f_writer
                      ,date_format(f_date, '%Y-%m-%d') as f_date
                      ,f_enterCount
                      ,f_recommend
                      ,f_post
                      ,f_datCount
                      ,f_div FROM tbl_noticeMain`;}
      else
      {
        sql = `SELECT f_number
                      ,f_title
                      ,f_writer
                      ,date_format(f_date, '%Y-%m-%d') as f_date
                      ,f_enterCount
                      ,f_recommend
                      ,f_post
                      ,f_datCount
                      ,f_div FROM tbl_noticeMain WHERE f_div = '${category}'`;
      };
      //console.log(sql)
      process._myApp.db.query(sql,(err,result)=>{
        if(err) res.status(400).send({ error:true, message: err });
        //console.log('Main: ' + result);
        res.send(result);
      })
    }
  })
  
  router.get('/Main/:id',(req,res)=>{
    if(!req.session.login){
      res.redirect('/')
    }else{
      const page_id = req.params.id;
      //console.log('noticeMain/:id' + page_id);
      const sql2 = `UPDATE tbl_noticeMain SET f_enterCount = tbl_noticeMain.f_enterCount+1 WHERE f_number = ${page_id}`
      const sql  = `SELECT f_number
                          ,f_title
                          ,f_writer
                          ,date_format(f_date, '%Y-%m-%d') as f_date
                          ,f_enterCount
                          ,f_recommend
                          ,f_post
                          ,f_datCount
                          ,f_div FROM tbl_noticeMain WHERE f_number = ${page_id}`;
      process._myApp.db.query(sql2);
      process._myApp.db.query(sql,(err,result)=>{
        if(err) {
          res.status(400).send({ error:true, message: ' Main/:id Not Found' })
        }else{
          res.send({database : result[0] , sessionId : req.session.login })
        }
      })
    }
  })
  router.post('/Write',(req,res)=>{
    if(!req.session.login){
      res.redirect('/')
    }else{
      if (!req.body.h_title||!req.body.h_write) return res.status(400).send({ error:true, message: 'Please provide task' });
      const sql = "INSERT INTO tbl_noticeMain (f_title,f_writer,f_post,f_div) VALUES(?,?,?,?)";
      process._myApp.db.query(sql,[req.body.h_title
                                  ,req.session.login
                                  ,req.body.h_write
                                  ,req.body.h_radioBtn],(err,result)=>{
        if(err){
          res.send({error:true,message:JSON.stringify(err)});
        }else{
          res.send({error:false,message:'게시글 작성 완료'});
        }
      })
    }
  })
  router.post('/Delete',(req,res)=>{
    if(!req.session.login){
      res.redirect('/')
    }else{
      const sql = `Delete tbl_noticeMain WHERE f_number = ${req.body.f_number}`;
      process._myApp.db.query(sql,(err,result)=>{
        if(err){
          res.send({error:true,message:JSON.stringify(err)});
        }else{
          res.send({error:false,message:'게시글 삭제 완료'});
        }
      })
    }
  })
  router.post('/Update',(req,res)=>{
    if(!req.session.login){
      res.redirect('/')
    }else{
      const sql = `UPDATE tbl_noticeMain SET f_title = '${req.body.f_title}' , f_post = '${req.body.f_post}' WHERE f_number = ${req.body.f_number}`;
      process._myApp.db.query(sql,(err,result)=>{
        if(err){
          res.send({error:true,message:JSON.stringify(err)});
        }else{
          res.send({error:false,message:'게시글 수정 완료'});
        }
      })
    }
  })
  router.post('/Recommend',(req,res)=>{
    if(!req.session.login){
      res.redirect('/')
    }else{
      const val = req.session.login + req.body.f_number;
      const sql = `INSERT INTO tbl_recommend (f_recommend,f_number) VALUES(?,?)`;
      process._myApp.db.query(sql,[val,req.body.f_number],(err,result)=>{
        if(err){
          res.send({error:true,message:'이미 추천을 하셨습니다'})
        }else{
          const sql2 = `UPDATE tbl_noticeMain SET f_recommend = tbl_noticeMain.f_recommend+1 WHERE f_number = ${req.body.f_number}`
          process._myApp.db.query(sql2);
          res.send({error:false,message:'추천완료'});
        }
      })
    }
  })
module.exports = router;