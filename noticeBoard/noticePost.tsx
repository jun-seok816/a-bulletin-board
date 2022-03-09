import React, {useRef, useState, useMemo, useReducer, useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet, Router,useParams } from "react-router-dom";
import _, { map } from "lodash";
import NoticeDat from "./noticeDat"
import Store from "../src/store";



async function gf_NoticeDelete(props:any) {
    var url = Store.sm_get('furl');
    return fetch(`${url}Notice/Delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({f_number: props})
    })
    .then(data => data.json())
    .then(res => {
        alert(res.message);
    })
}

async function gf_NoticeUpdate(props:object) {
    var url = Store.sm_get('furl');
    return fetch(`${url}Notice/Update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(props)
    })
    .then(data => data.json())
    .then(res => {
        alert(res.message);
    })
}

async function gf_RecommendUpdate(props:any) {
    var url = Store.sm_get('furl');
    return fetch(`${url}Notice/Recommend`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({f_number:props})
      })
      .then(data => data.json())
      .then(res => {
            alert(res.message);
    })
}

export default function NoticePost() {
    var url = Store.sm_get('furl');
    let { PostId,UserId } = useParams();
    // const [h_Post, setPost] = useState({f_writer:'',f_recommend:0,f_date:'',f_enterCount:''});
    // const [h_Session,setSession] = useState('');
    // const [h_title,setTitle] = useState('');
    // const [h_write,setWrite] = useState('');

    const [lv_data,setData] = useState(
        {
            Post : {
                f_writer:'',f_recommend:0,f_date:'',f_enterCount:'',f_title:'',f_write:''
            },
            Session : '',
        }
    )

    const [h_evh,set_evh_ForceRender] = useState({});

    const lf_DeleteSubmit = async (e:any) => {
        await gf_NoticeDelete(PostId);
        window.location.href = url;
    }

    const lf_UpdateSubmit = async (e:any) =>{
        e.preventDefault();
        await gf_NoticeUpdate({f_title : lv_data.Post.f_title, f_post : lv_data.Post.f_write ,f_number : PostId});
        window.location.href = url;
    }

    const lf_UpdateRecommend = async (e:any)=>{
        //@ts-ignore
        await gf_RecommendUpdate(PostId);
        set_evh_ForceRender({});
    }

    console.log('noticePost() Render!')

    useEffect(()=>{
        console.log('noticePost()-> useEffect(h_evh)')

        var url = Store.sm_get('furl');
        fetch(`${url}Notice/Main/Detail/${PostId}`)
        .then(response =>{
            if(response.ok){
                //console.log(response);
                return response.json()
            }else{
                alert('Not Found');
            }
        })
        .then(res=>{
            //console.log('NoticePost h_Post : ' + JSON.stringify(res.database));
            //console.log('NoticePost h_Session : ' + JSON.stringify(res.sessionId));
            //console.log('noticePost()-> useEffect(h_evh) -> setPost()');
            //setPost(JSON.parse(JSON.stringify(res.database)));

            //console.log('noticePost()-> useEffect(h_evh) -> setSession()');
            //setSession(JSON.parse(JSON.stringify(res.sessionId)));

            //console.log('noticePost()-> useEffect(h_evh) -> setTitle()');
            //setTitle(JSON.parse(JSON.stringify(res.database.f_title)));

            //console.log('noticePost()-> useEffect(h_evh) -> setWrite()');
            //setWrite(JSON.parse(JSON.stringify(res.database.f_post)));
            console.log('noticePost()-> useEffect(h_evh) -> setData()');
            lv_data.Post = JSON.parse(JSON.stringify(res.database));
            lv_data.Session = JSON.parse(JSON.stringify(res.sessionId));
            console.log('noticePost()-> useEffect(h_evh) -> setData() :' + JSON.stringify(lv_data));
            setData(Object.assign({},lv_data));
        })
    },[h_evh]);
    //@ts-ignore
    //console.log('NoticePost : ' + h_Session === h_Post.f_writer)
    //@ts-ignore
    if(lv_data.Session === UserId){
        return (
            <div className="postWriter">
                 <div className="write_info">
                    <div>
                        <p>{lv_data.Post.f_writer}</p>
                    </div>
                    <div className="write_info_right">
                        <p className="write_info_recommend">추천&nbsp; <b>{lv_data.Post.f_recommend}</b></p>
                        <p>작성일&nbsp; <b>{lv_data.Post.f_date}</b></p>
                        <p>조회수&nbsp; <b>{lv_data.Post.f_enterCount}</b></p>
                    </div>
                </div>
                <form onSubmit={lf_UpdateSubmit}>
                    <label>
                        <p>제목</p>
                        <input type="text" name="id" value={lv_data.Post.f_title} onChange={e=>
                            {
                                lv_data.Post.f_title = e.target.value;
                                setData(lv_data);
                            }
                        }/>
                    </label>
                    <label>
                        <p>본문</p>
                        <textarea cols={30} rows={5} name="password" value={lv_data.Post.f_write} onChange={e=>
                            {
                                lv_data.Post.f_write = e.target.value;
                                setData(lv_data);
                            }}/>
                    </label>
                    <div>
                        <button className="postButton" type="submit">게시글 수정</button>
                    </div>
                </form>
                <div className="datDelete" onClick={lf_DeleteSubmit}><span>게시글 삭제</span></div>
                <NoticeDat DatObject = {{h_Session:lv_data.Session,PostId:PostId}} />
            </div>
         );
    }else{
        return(
            <div className="postWriter">
                <h1>{lv_data.Post.f_title}</h1>
                <div className="write_info">
                    <div>
                        <p>{lv_data.Post.f_writer}</p>
                    </div>
                    <div className="write_info_right">
                        <p className="write_info_recommend">추천&nbsp; <b>{lv_data.Post.f_recommend}</b></p>
                        <p>작성일&nbsp; <b>{lv_data.Post.f_date}</b></p>
                        <p>조회수&nbsp; <b>{lv_data.Post.f_enterCount}</b></p>
                    </div>
                </div>
                <div className="postBody">{lv_data.Post.f_write}</div>
                <div className="recommendButton_flex">
                    <button className="recommendButton" onClick={lf_UpdateRecommend}>추천! &nbsp;<b>{lv_data.Post.f_recommend}</b></button>
                </div>
                <NoticeDat DatObject = {{h_Session:lv_data.Session,PostId:PostId}} />
            </div>
        )
    }
   

}
