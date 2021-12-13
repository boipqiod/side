import '../css/DetailContents.css';
import {useState, useEffect, Fragment} from 'react';
// import DetailMovieInfo from './DetailMovieInfo';
import DetailMoreInfo from './DetailMoreInfo';
import MovieList from './MovieList';
import getMovieDataByCategory from '../controller/getMovieDataByCategory'

let director="";
let casts = "";
// let movieListItems = [];

export default function DetailContents (props){

    const [loading, setLoading] = useState(0);
    const [movieListItems, setMovieListItems] = useState([]);

    useEffect(()=>{
        casts = "";

        for (let i of props.movieDetial.crew) if(i.job === "Director") director = i.name;
        for(let i of props.movieDetial.cast) casts = casts + i.name + " / ";
        getMovieDataByCategory(parseInt(props.movieDetial.genre_ids.split(",")[0]),5,1).then((res)=>{
            setMovieListItems(res);
        })
        setLoading(1);
    },[]);
    //각 컨포넌트에 데이터 뿌려줌
    return(
        <div id="detailPage">
            <div id="detailBackdrop">
                <img src={props.movieDetial.backdrop_path} alt="영화백드롭이미지"/>
            </div>
            <div id="detailContentsDiv">
                <div id="detailMovieInfo">
                    <div id="detailTitle">
                        {props.movieDetial.title}
                    </div>
                    <div> <p> 평점 : ⭐ {props.movieDetial.vote_average} </p> </div>
                    <hr/>
                    <div>
                        <p>감독 : {director}</p>
                        <p>배우 : {casts}</p>
                        <p>장르 : {props.movieDetial.genre}</p>
                        <p>개봉일 : {props.movieDetial.release_date}</p>
                        {props.movieDetial.adult===1 ? (<p>청소년 관람불가!</p>):(<p></p>)}
                    </div>
                </div>
                <div id="detailImage">
                    <img src={props.movieDetial.poster_path} alt="영화포스터"/>
                </div>
            </div>
            <div id="detailViewMore">
                <p>영화 정보</p>
                <DetailMoreInfo movieDetial={props.movieDetial}/>
            </div>
            <div id="detailRecommendMovie">
                {movieListItems.length === 0 ?(
                    <div>데이터 불러오는 중...</div>
                ):(
                    <Fragment>
                        <p>같은 장르 추천작!</p>
                        <MovieList movieList={movieListItems}/>
                    </Fragment>
                    )}
            </div>
        </div>
    );
}