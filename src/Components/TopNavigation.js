import React, {useState, useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import '../css/navigation.css';
import logo from '../images/title.png';
import {useNavigate} from 'react-router-dom';

export default function TopNavigation () {
    const navigate = useNavigate();

    const [text, setText] = useState('');
    const [title, setTitle] = useState('로그인');
    const [isLogin, setIsLogin] = useState(false);
    const [userName, setUserName] = useState(null);

    useEffect(()=>{
        if(window.sessionStorage.getItem("userName")!==null) {
            setTitle("로그아웃");
            setIsLogin(true);
            setUserName(window.sessionStorage.getItem("userName"));
        }
    },[])

    const onClick = () => {
      if(isLogin){
          window.sessionStorage.clear();
          setIsLogin(false);
          setUserName(null);
      }
      else{
          navigate("/auth");
      }
    }
    const onChange = (e) => {
        setText(e.target.value);
    };
    const onKeyDown = (e) => {
        if(e.key === 'Enter') { navigate("/search/" + text);}
    }
    return(
        <div id="navigation">
            <div id="navTitle">
                <Link id="toTitle" to="/"><img src={logo} alt="로고"/></Link>
            </div>
            <div id="search">
                <input onKeyDown={onKeyDown} onChange={onChange} value={text} id="searchInput" autoComplete="off" placeholder="제목, 장르, 배우, 감독으로 검색"/>

            </div>
            <div id="login">
                {isLogin ? (
                    <Fragment>
                        <p>{userName}님! 반갑습니다.</p>
                        <button onClick={onClick} id="icon" className="iconColorGreen" title={title}></button>
                    </Fragment>
                    ) : (
                    <Fragment>
                        <p>로그인을 해주세요.</p>
                        <button onClick={onClick} id="icon" className="iconColorRed" title={title}></button>
                    </Fragment>
                )}
            </div>
        </div>
    );
}