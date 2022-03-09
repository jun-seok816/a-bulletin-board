import React, {useRef, useState, useMemo, useReducer, useCallback, useEffect} from "react";
import _ from "lodash";
import Store from "../src/store";



async function gf_Sign_Up_fetch(params:object) {
    var url = Store.sm_get('furl');
    return fetch(`${url}Signup`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(params)
    })
    .then(data => data.json())
    .then(res => {
        if(!res.error){
            window.location.href = url;
        }else{
            alert(res.message);
        }
    })
}

export default function Sign_up() {
    const [h_id,setId] = useState('');
    const [h_password,setPassword] = useState('');
    const [h_passwordCheck,setPasswordCheck] = useState('');

    const lf_HandleSubmit = async (e:any) => {
        e.preventDefault();
        if(h_password === h_passwordCheck){
            await gf_Sign_Up_fetch({
                h_id,
                h_password
            });
        }else{
            alert('비밀번호가 맞는지 확인해주세요')
        }
    }

    return (
        <div className="login-wrapper">
            <div className="login-box">
                <p>회원가입</p>
                <form onSubmit={lf_HandleSubmit}>
                        <div className="login-signup">
                            <input type="text" name="id" placeholder="아이디" value={h_id} onChange={e=>setId(e.target.value)}/>
                            
                            <input type="password" name="password" placeholder="비밀번호" value={h_password} onChange={e=>setPassword(e.target.value)}/>
                        
                            <input type="password" name="password" placeholder="비밀번호 확인" value={h_passwordCheck} onChange={e=>setPasswordCheck(e.target.value)}/>
                        </div>
                    <div>
                        <button className="postButton" type="submit">회원가입</button>
                    </div>
                </form>
            </div>
    </div>
    );

}
