import React, {useRef, useState, useMemo, useReducer, useCallback, useEffect} from "react";
import { BrowserRouter, Routes, Route, Link, Outlet, Router } from "react-router-dom";
import _, { divide } from "lodash";
import Store from "../src/store";
import TextareaAutosize from 'react-textarea-autosize';

async function gf_DatInsert(props:object) {
    var url = Store.sm_get('furl');
    return fetch(`${url}Dat/Insert`, {
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
async function gf_DatUpdate(props:object) {
    var url = Store.sm_get('furl');
    return fetch(`${url}Dat/Update`, {
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
async function gf_DatDelete(props:object) {
    var url = Store.sm_get('furl');
    return fetch(`${url}Dat/Delete`, {
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


export default function Noticegf_DatUpdate(props:any) {
    var item = props.object;
    const [h_dat,setDat] = useState(item?.f_word ?? '');
    const [h_evh,set_evh_ForceRender] = useState({});

    // console.log('Noticegf_DatUpdate() -> Render !');
    // console.log('Noticegf_DatUpdate() item : ' + JSON.stringify(item));
    // console.log('Noticegf_DatUpdate() h_dat : ' + h_dat);

    const lf_UpdateSubmit = async (e:any) =>{
        e.preventDefault();
        await gf_DatUpdate({f_word : h_dat , f_datNum : item.f_datNum});
        set_evh_ForceRender({});
        props.rerender();
    }
    const lf_DeleteSubmit = async (e:any)=>{
        await gf_DatDelete({f_datNum:item.f_datNum});
        set_evh_ForceRender({});
        props.rerender();
    }

    const lf_InsertDat = async (e:any)=>{
        e.preventDefault();
        await gf_DatInsert({f_number:props.object.PostID , f_user:props.object.Session , f_word:h_dat})
        set_evh_ForceRender({});
        props.rerender();
    }

    if(props.object.PostID){
       return( 
       <div className="postDat">
        
            <label>
                <p>댓글</p>
                <TextareaAutosize
                        className="scroll"
                        cacheMeasurements
                        value={h_dat}
                        onChange={ev => setDat(ev.target.value)}
                        />
            </label>
            <div onClick={lf_InsertDat} className="datButton"><span>작성</span></div>
            
        </div>
    ) 
    }else{
        return(
            <div className="datLine" >
                <div className="datInfo">
                    <span className="datUser">{item.f_user}</span>
                    <span className="datDate">{item.f_date}</span>
                </div>
                <TextareaAutosize
                    className="scroll"
                    cacheMeasurements
                    value={h_dat}
                    onChange={ev => setDat(ev.target.value)}
                    />
                <div className="TextAreaButton">
                    <div onClick={lf_UpdateSubmit} className="datButton" ><span>수정</span></div>
                    
                    <div onClick={lf_DeleteSubmit} className="datDelete" ><span>삭제</span></div>  
                </div>
              
            </div>  
        )
    }
    
}
