import React, {useRef, useState, useMemo, useReducer, useCallback, useEffect} from "react";
import _ from "lodash";
import Store from "../src/store";


async function gf_LoginUser_fetch(params:object) {
    
    var url = Store.sm_get('furl');
    return fetch(`${url}Login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    .then(data => data.json())
    .then(res => {
        if(res.login){
            window.location.href = url;
        }else{
            alert(res.message);
        }
    })
}

export default function Login(props:any) {
    const [h_id,setId] = useState('');
    const [h_password,setPassword] = useState('');

    const lf_HandleSubmit = async (e:any) => {
        e.preventDefault();
        await gf_LoginUser_fetch({
            h_id,
            h_password
        });
        props.login();
    }
    
    return (
        <div className="login-wrapper">
            <div className="login-box">
                <p>로그인</p>
                <form onSubmit={lf_HandleSubmit}>
                    <div className="login-signup">
                        <input type="text" name="id" placeholder="아이디" value={h_id} onChange={e=>setId(e.target.value)}/>
                        <input type="password" name="password" placeholder="비밀번호" value={h_password} onChange={e=>setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <button className="postButton" type="submit">로그인</button>
                    </div>
                </form>
            </div>
        </div>
    );

}
