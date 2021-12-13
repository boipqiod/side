import React, {Fragment, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import DetailContents from '../Components/DetailContents'
import TopNavigation from '../Components/TopNavigation'
// import getMovieDataByCategory from '../controller/getMovieDataByCategory'
import getDetailMovieData from '../controller/getDetailMovieData'

const movieListItems = [];

for(let i=0; i<5; i++){
    const movieListItem = {
        imgUrl: "https://image.tmdb.org/t/p/w500/1Lh9LER4xRQ3INFFi2dfS2hpRwv.jpg",
        title: "영화제목",
        genre: "장르",
        overview: "이 영화의 개요는 이렇게 시작해서 저렇게 끝나는데, 개요를 길게 작성하기 위해서 길게 그냥 막 작성하고 있습니다. 실제로 개요 데이터가 얼마나 길게 올지 모르겠는데, 너무 짧게만 오지 않았으면 좋겠습니다. 길이가 영화마다 다르니, 후처리를 해야될 수 도 있겠습니다. 이상입니다."
    }
    movieListItems.push(movieListItem);
}
let prodList = [];
for(let i=0; i<5; i++){
    let prod = {
        name: "제작진이름",
        profileUrl: "https://image.tmdb.org/t/p/w500/4LD7NmEu1JV7TLLOsG6VJzhvz0t.jpg",
        position: "감독"
    }
    prodList.push(prod);
}
let actList = [];
for(let i=0; i<5; i++){
    let act = {
        name: "배우이름",
        profileUrl: "https://image.tmdb.org/t/p/w500/ilPBHd3r3ahlipNQtjr4E3G04jJ.jpg",
        position: "배역이름"
    }
    actList.push(act);
}


const Detail = () =>{

    const movieId = useParams().id;

    // const [movieListItems, setMovieListItems] = useState([]);
    const [movieDetail, setMovieDetial] = useState([]);

    useEffect(()=>{
        getDetailMovieData(movieId).then(async (res)=>{
            await setMovieDetial(res);
        });
    },[movieId])

    window.scrollTo(0, 0);
    return (
        <Fragment>
            <TopNavigation />
            { movieDetail.length === 0 ? (<div/>) : (<DetailContents movieId={movieId} movieDetial={movieDetail}/>)}
        </Fragment>
    );
};
export default Detail;