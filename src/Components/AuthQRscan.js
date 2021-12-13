import '../css/test.css'
import dmplus from '../controller/dmplus'
import {useNavigate} from 'react-router-dom';

import React, { useState } from 'react';
import QrReader from 'react-web-qr-reader';

export default function AuthQRscan(){
    const navigate = useNavigate();

    const handleScan = (result) => {
        if (result) {
            dmplus(result.data).then((res)=>{
                if(res.result.resultCode !== 200) alert("잘못된 인증입니다.")
                else{
                    alert("인증성공! 케빈화이팅!");
                }
            })
            .catch((e)=>{
                alert("잘못된 값입니다.");
            })
        }
    };
    const handleError = (error) => {
        console.log(error);
    };

    return (
        <div id="testQrReader">
            <QrReader
                delay={300}
                style={{height: 200, width: 200}}
                onError={handleError}
                onScan={handleScan}
            />

        </div>
    );
}