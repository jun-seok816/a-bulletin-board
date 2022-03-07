const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const PORT = 8001;
const mysql = require('mysql');


process._myApp = {};


process._myApp.db = mysql.createConnection({
  host:'jun.cafe24app.com',
  port:'3306',
  user:'ojsbox816',
  password:'ahah4281',
  database:'ojsbox816',
})


const loginRouter = require('./api/login');
const noticeRouter = require('./api/notice/write');
const datRouter = require('./api/notice/dat');

// https://www.npmjs.com/package/express-session
app.use(session({
  secret: "secret key",
  resave: false,
  saveUninitialized: true,
}))

//https://expressjs.com/ko/starter/static-files.html
app.set('puplic', path.join(__dirname, 'views')); 
app.use(express.static(app.settings.puplic));
//https://www.npmjs.com/package/body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/App*',(req,res)=>{
  res.redirect('/')
})

app.use('/',loginRouter);
app.use('/Notice',noticeRouter);
app.use('/Dat',datRouter);

app.get('/test',(req,res)=>{
  res.send('?');
})

app.listen(PORT, (req,res) => {

})