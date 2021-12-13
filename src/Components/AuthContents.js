import React, {Fragment, useState, useEffect} from "react";

import AuthQRcode from '../Components/AuthQRcode'
import AuthQRscan from '../Components/AuthQRscan';
import {useNavigate} from 'react-router-dom';

export default function AuthContents(){

    const navigate = useNavigate();
    const cTxNoHead = "simos-movie-";

    console.log();

    const [changeBntName,setChangeBntName] = useState("스캔하기");
    const [cTxNo, setCTxNo] = useState(window.localStorage.getItem("cTxNo"));
    const [isQRcode, setIsQRcode] = useState(true)


    useEffect(()=>{
        if(window.localStorage.getItem("cTxNo")===null){
            window.localStorage.setItem("cTxNo",cTxNoHead+"1");
        }
        else{
            setCTxNo(window.localStorage.getItem("cTxNo"));
        }
        if(window.sessionStorage.getItem("userName")!==null){
            alert("잘못된 접근입니다.");
            navigate('/');
        }
        console.log(window.sessionStorage.getItem("userName"))
    },[])


    const onChangeBtn = ()=>{
        setIsQRcode(!isQRcode);
        if(isQRcode) setChangeBntName("생성하기");
        else setChangeBntName("스캔하기");
    }


    return(
        <div id="authContents">
            {isQRcode ? (
                <AuthQRcode cTxNo={cTxNo}/>
            ):(
                <div id="scander">
                    <AuthQRscan />
                </div>
            )}
            <p>{window.sessionStorage.getItem("userName")}</p>
            <button id="changeBte" onClick={onChangeBtn}>{changeBntName}</button>
        </div>
    )
}