import React, {useRef, useState, useMemo, useReducer, useCallback, useEffect} from "react";
import { BrowserRouter, Routes, Route, Link, Outlet, Router,useParams } from "react-router-dom";
import _, { divide } from "lodash";
import Store from "../src/store";



export default function NoticeMain() {
    var url = Store.sm_get('furl');

    const [h_db,setDb] = useState([]);
    const [h_radioBtn,setRadioBtn] = useState('전체');

    const lf_IsRadioSelected = (value:string):boolean => h_radioBtn === value;
    const lf_HandleRadioClick = (e:any):void => setRadioBtn(e.currentTarget.value);
   
    useEffect(()=>{
        fetch(`${url}Notice/Main/${h_radioBtn}`)
        .then(response =>{
            if(response.ok){
                //console.log(response);
                return response.json()
            }
            throw response;
        })
        .then(res=>{
            //console.log('NoticeMain : ' + JSON.stringify(res))
            setDb(JSON.parse(JSON.stringify(res)))
        })
    },[h_radioBtn]);
  

    if(h_db[0]){
        return(
            <div id="board_write">
                <div className="sub_row">
                    <input 
                        type="radio"
                        name="전체"
                        value="전체"
                        checked={lf_IsRadioSelected('전체')}
                        onChange={lf_HandleRadioClick}
                     />
                    <label onClick={()=>{setRadioBtn('전체')}}>전체</label>
                    <input 
                        type="radio"
                        name="일반"
                        value="일반"
                        checked={lf_IsRadioSelected('일반')}
                        onChange={lf_HandleRadioClick}
                     />
                     <label onClick={()=>{setRadioBtn('일반')}}>일반</label>
                    <input 
                        type="radio"
                        name="질문"
                        value="질문"
                        checked={lf_IsRadioSelected('질문')}
                        onChange={lf_HandleRadioClick}
                     />
                      <label onClick={()=>{setRadioBtn('질문')}}>질문</label>
                    <input 
                        type="radio"
                        name="정보"
                        value="정보"
                        checked={lf_IsRadioSelected('정보')}
                        onChange={lf_HandleRadioClick}
                     />
                    <label onClick={()=>{setRadioBtn('정보')}}>정보</label>
                    <input 
                        type="radio"
                        name="후기"
                        value="후기"
                        checked={lf_IsRadioSelected('후기')}
                        onChange={lf_HandleRadioClick}
                     />
                    <label onClick={()=>{setRadioBtn('후기')}}>후기</label>
                </div>
                <div id="write_area">
                    <div className="write_head">
                        <span className="wrow col-id">번호</span>
                        <span className="wrow col-subtitle">글머리</span>
                        <span className="wrow col-title">제목</span>
                        <span className="wrow col-writer">작성자</span>
                        <span className="wrow col-date">작성일</span>
                        <span className="wrow col-enterCount">조회수</span>
                        <span className="wrow col-recommend">추천</span>
                    </div>
                    <div className="write_body">
                    {h_db.map((e:any,i:number)=>{
                        return (
                            <li className={e.f_div} key={i}> 
                                <Link to={{ pathname: `/App/noticeMain/${e.f_number}/${e.f_writer}` }}> 
                                    <span className="wcol col-id">{e.f_number}</span>
                                    <span className="wrow col-subtitle">{e.f_div}</span>
                                    <span className="wcol col-title">{e.f_title}</span>
                                    <span className="wcol col-writer">{e.f_writer}</span>
                                    <span className="wcol col-date">{e.f_date}</span>
                                    <span className="wcol col-enterCount">{e.f_enterCount}</span>
                                    <span className="wcol col-recommend">{e.f_recommend}</span>
                                </Link> 
                            </li>
                        )
                    })}
                    </div>
                </div>
                
            </div>
        )
    }else{
        return (
        <div>
            <div className="sub_row"> 
                <input 
                    type="radio"
                    name="전체"
                    value="전체"
                    checked={lf_IsRadioSelected('전체')}
                    onChange={lf_HandleRadioClick}
                    />
                <label onClick={()=>{setRadioBtn('전체')}}>전체</label>
                <input 
                    type="radio"
                    name="일반"
                    value="일반"
                    checked={lf_IsRadioSelected('일반')}
                    onChange={lf_HandleRadioClick}
                    />
                    <label onClick={()=>{setRadioBtn('일반')}}>일반</label>
                <input 
                    type="radio"
                    name="질문"
                    value="질문"
                    checked={lf_IsRadioSelected('질문')}
                    onChange={lf_HandleRadioClick}
                    />
                    <label onClick={()=>{setRadioBtn('질문')}}>질문</label>
                <input 
                    type="radio"
                    name="정보"
                    value="정보"
                    checked={lf_IsRadioSelected('정보')}
                    onChange={lf_HandleRadioClick}
                    />
                <label onClick={()=>{setRadioBtn('정보')}}>정보</label>
                <input 
                    type="radio"
                    name="후기"
                    value="후기"
                    checked={lf_IsRadioSelected('후기')}
                    onChange={lf_HandleRadioClick}
                    />
                <label onClick={()=>{setRadioBtn('후기')}}>후기</label>
            </div>
            <div>게시글이 없습니다</div>
        </div>
        )
    }
    
}
