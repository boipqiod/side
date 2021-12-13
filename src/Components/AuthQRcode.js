import React, {Fragment, useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import AuthToCTxNo from '../controller/AuthToCTxNo';


const apiKey = "8d6fc5f1bbad81d1509671a24ca39de2ad67d625f4edbe47daf1f9fb8f95c117";
const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfY2lkIjozMjExMTIyMTA3NTU0ODYsIl9yb2xlIjozLCJfZW1haWxJZCI6InNpbW9uLmtvbmdAZGV0aW9uLm1lIiwiaWF0IjoxNjM3NjQ2ODA0LCJleHAiOjE2NjkxODI4MDR9.Ts3GMZr7JkPBiy7J3zCQESg3gOvkWRbjEqocr87sw0E";
const cid = 321112210755486;
const deviceType = "m";
const urlReturn = "http://localhost:3001/auth/success";

export default function AuthQRcode(porps){
    const navigate = useNavigate();

    const [isEditText, setIsEditText] = useState(false);
    const [text, setText] = useState("");
    const [cTxNo, setCTxNo] = useState(porps.cTxNo);
    const [isAuth, setIsAuth] = useState(false);

    const onClick = ()=>{
        let popup = window.open("", "popup","popup, width=400, height=600, resizable=false");

        var timer = setInterval( async function() {
            if(popup.closed) {
                clearInterval(timer);
                AuthToCTxNo(isEditText ? text : cTxNo);
            }
        }, 500);
    }
    const onEditBtn = ()=>{
        setIsEditText(!isEditText);
    }
    const onChange = (e)=>{
        setText(e.target.value);
    }

    return(
        <div id="qrcode">
            <div>
                <button onClick={onEditBtn}>cTxNo직접입력</button>
            </div>
            <form id="authForm" method="post" action="https://gw.dmplus.me/gateway/v1.0/client/auth" target="popup">
                <input type="hidden" name="api-key" value={apiKey}/>
                <input type="hidden" name="access-token" value={accessToken}/>
                <input type="hidden" name="cid" value={cid}/>
                {isEditText ? (
                    <input type="text" name="cTxNo" autoComplete="off" onChange={onChange} />
                ) : (
                    <input type="hidden" name="cTxNo" value={cTxNo}/>
                )}
                <input type="hidden" name="deviceType" value={deviceType}/>
                <input type="hidden" name="urlReturn" value={urlReturn}/>
                <input id="qrBtn" type="submit" onClick={onClick} value="QR코드 생성!"/>
            </form>
        </div>
    )
}