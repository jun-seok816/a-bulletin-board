import React, {useRef, useState, useMemo, useReducer, useCallback, useEffect} from "react";
import _ from "lodash";
import Store from "../src/store";
import NoticeDatUpdate from "./noticeDatUpdate";


export default function NoticeDat(props:any) {
    const [h_datObject,setDatObject] = useState([]);
    const [h_evh,set_evh_ForceRender] = useState({});

    let lv_isUnmounted = false;
    let _isUnmounted =  useRef(false);


    //console.log('notcieDat render')
    //console.log(props.DatObject.PostId);

    useEffect(
        ()=>{
        console.log('NoticeDat Mount');
        return () => {
            console.log('NoticeDat UnMount');
            _isUnmounted.current = true;
        }
    },[]);

    useEffect(()=>{
        //console.log('notcieDat render -> useEffect')
        var url = Store.sm_get('furl');
        fetch(`${url}Dat/Select/${props.DatObject.PostId}`)
            .then(response =>{
                if(response.ok){
                    return response.json()
                }else{
                    alert('Not Found');
                }
            })
            .then(res=>{
                //console.log('NoticePost h_Post : ' + JSON.stringify(res.database));
                //console.log('NoticePost h_Post : ' + JSON.stringify(res.database));

                if (_isUnmounted.current) return;
                setDatObject(JSON.parse(JSON.stringify(res.database)));
                //h_setDatUpdate(JSON.parse(JSON.stringify(res.database)))
            })
    },[h_evh]);

    return(
        <div>
            <NoticeDatUpdate rerender={() => {
                            set_evh_ForceRender({})
                        }} object = {{PostID : props.DatObject.PostId ,Session :props.DatObject.h_Session}}/>

            {h_datObject.map((item:any,i:number)=>{
                if(props.DatObject.h_Session === item.f_user){
                    return (
                        <NoticeDatUpdate key={item.f_datNum} rerender={() => {
                            set_evh_ForceRender({})
                        }} object = {item}/>
                    )
                }else{
                    return(
                        <div key={i} className="datLine">
                            <div className="datInfo">
                                <span className="datUser">{item.f_user}</span>
                                <span className="datDate">{item.f_date}</span>
                            </div>
                            <div className="datWord">
                                {item.f_word}
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
   
}
