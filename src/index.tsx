import React ,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link, Outlet, Router } from "react-router-dom";
import "./demo.scss";
import Sign_up from "../login/sign_up";
import Login from "../login/login";
import NoticeMain from "../noticeBoard/noticeMain"
import NoticePost from "../noticeBoard/noticePost"
import NoticeWrite from "../noticeBoard/noticeWrite"
import Store from "./store";

Store.sm_set('furl','http://localhost:8001/')
const url = Store.sm_get('furl');

export  default  function Root() {

    const [,evh_ForceRender] = useState({});
    const [h_Logined,setLogined] = useState(false)

    useEffect(()=>{
        fetch(`${url}LoginCheck`)
        .then(res =>{
            if(res.ok){
                return res.json()
            }
        })
        .then(res => {
            //console.log('index.tsx fetch : ' + res.loginToken)
            setLogined(res.loginToken)
        })
    });

    //console.log('index.tsx : ' + h_Logined);
    if(h_Logined){
        return(
            <Routes>
                <Route path="/"  element={<Layout_login logout={() => {evh_ForceRender({})}} />} >
                    <Route index element ={<NoticeMain />} />
                    <Route path={"/App/noticeMain/:Category"} element ={<NoticeMain />} />
                    <Route path={"/App/noticeMain/:PostId/:UserId"}  element={<NoticePost />} />
                    <Route path = "/App/noticeWrite" element ={<NoticeWrite />} />
                </Route>
            </Routes>
        )
    }else{
        return (
            <Routes>
                <Route path="/" element={<Layout_logout />}>
                    <Route index element ={<Login login={()=>{evh_ForceRender({})}}/>} />
                    <Route path="/App/Login" element ={<Login login={()=>{evh_ForceRender({})}}/>} />
                    <Route path="/App/Sign_up" element={<Sign_up />} />
                </Route>
            </Routes>
        )
    }
    
}
function Layout_login(props:any) {
    function set_logout(){
        fetch(`${url}logout`)
        window.location.href = url;
    }

    return (
        <div className="Root">
            <div className="Header">
                <div>
                    junseok816@gmail.com
                </div>
                <div>
                    <Link to="/"><b>JunGallery</b></Link>
                </div>
                <div>
                    <Link to="/App/noticeWrite">글쓰기</Link>
                    <Link onClick={set_logout} to="/">로그아웃</Link>
                </div>
            </div>
            <div className="Container">
                <Outlet />
            </div>
        </div>
    );
}
function Layout_logout() {
    return (
        <div className="Root">
            <div className="Header">
                <div>
                    junseok816@gmail.com
                </div>
                <div>
                    <Link to="/"><b>JunGallery</b></Link>
                </div>
                <div>
                    <Link to="/App/Login">로그인</Link>
                    <Link to="/App/Sign_up">회원가입</Link>
                </div>
            </div>
            <div className="Container">
                <Outlet />
            </div>
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('app')
);


