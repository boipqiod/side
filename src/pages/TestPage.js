// // import { useMediaQuery } from 'react-responsive'
// // import getMovieDataByCategory from "../controller/getMovieDataByCategory";
// import '../css/test.css'
// // import React, { Component } from 'react'
// // import QrReader from 'react-qr-reader-es6'
// import dmplus from '../controller/dmplus'
// import {useNavigate} from 'react-router-dom';
//
// import React, { useState } from 'react';
// import QrReader from 'react-web-qr-reader';
//
const Test = () => {
    // const navigate = useNavigate();
    //
    // const handleScan = (result) => {
    //     if (result) {
    //         dmplus(result.data).then((res)=>{
    //             if(res.result.resultCode !== 200){
    //                 alert("잘못된 인증입니다.")
    //             }
    //             else{
    //                 console.log(res);
    //                 window.sessionStorage.setItem("userName",res.data.passport.surName);
    //                 navigate('/');
    //             }
    //         })
    //             .catch((e)=>{
    //                 alert("잘못된 값입니다.");
    //             })
    //     }
    // };
    //
    // const handleError = (error) => {
    //     console.log(error);
    // };

    return (
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vTsOMV0jVQ-tQjxcBeiVxekOrbAgP0AMcNCXOBWcm14SRqB43G_72A5MpJzyFUS7jPiJNX8n_2EYbhd/pub?embedded=true"></iframe>
    );
};

export default Test;
// //
// // class Test extends Component {
// //     state = {
// //         result: 'No result'
// //     }
// //
// //     handleScan = data => {
// //         if (data) {
// //
// //             dmplus(data).then((res)=>{
// //                 console.log(res);
// //                 window.sessionStorage.setItem("userName",res.data.passport.surName);
// //                 const navigate = useNavigate();
// //
// //                 navigate('/');
// //             })
// //             this.setState({
// //                 result: data
// //             })
// //         }
// //     }
// //     handleError = err => {
// //         console.error(err)
// //     }
// //     render() {
// //         return (
// //             <div id="testQrReader">
// //                 <div>
// //                     <QrReader
// //                         delay={300}
// //                         onError={this.handleError}
// //                         onScan={this.handleScan}
// //                         style={{ width: '100%' }}
// //                     />
// //                     <p>{this.state.result}</p>
// //                 </div>
// //             </div>
// //         )
// //     }
// // }
// // export default Test;
//
//
//
// // const Desktop = ({ children }) => {
// //     const isDesktop = useMediaQuery({ minWidth: 992 })
// //     return isDesktop ? children : null
// // }
// // const Tablet = ({ children }) => {
// //     const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
// //     return isTablet ? children : null
// // }
// // const Mobile = ({ children }) => {
// //     const isMobile = useMediaQuery({ maxWidth: 767 })
// //     return isMobile ? children : null
// // }
// // const Default = ({ children }) => {
// //     const isNotMobile = useMediaQuery({ minWidth: 768 })
// //     return isNotMobile ? children : null
// // }
