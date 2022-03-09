import React, {useRef, useState, useMemo, useReducer, useCallback, useEffect} from "react";
import _ from "lodash";
import Store from "../src/store";
import TextareaAutosize from 'react-textarea-autosize';

async function gf_LoginUser(params:object) {
    var url = Store.sm_get('furl');
    return fetch(`${url}Notice/Write`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    .then(data => data.json())
    .then(res => {
        alert(res.message);
    })
   }

export default function NoticeWrite() {
    var url = Store.sm_get('furl');
    const [h_title,setTitle] = useState('');
    const [h_write,setWrite] = useState('');
    const [h_radioBtn,setRadioBtn] = useState('일반');

    const lf_IsRadioSelected = (value:string):boolean => h_radioBtn === value;
    const lf_HandleRadioClick = (e:any):void => setRadioBtn(e.currentTarget.value);

    const lf_HandleSubmit = async (e:any) => {
        e.preventDefault();
        console.log(e.list)
        await gf_LoginUser({
            h_title,
            h_write,
            h_radioBtn
        });
        window.location.href = url;
      }
    
    return (
        <div className="postWriter">
            <form onSubmit={lf_HandleSubmit}>
                <span>글머리</span>
                <div className="sub_row">
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
                <label>
                    <p>제목</p>
                    <input type="text" name="id" value={h_title} onChange={e=>setTitle(e.target.value)}/>
                </label>
                <label>
                    <p>본문</p>
                    <TextareaAutosize
                        className="scroll"
                        cacheMeasurements
                        value={h_write}
                        minRows={20}
                        onChange={ev => setWrite(ev.target.value)}
                        />
                </label>
                <div>
                    <button className="postButton" type="submit">게시글 작성</button>
                </div>
            </form>
        </div> 
    );

}
