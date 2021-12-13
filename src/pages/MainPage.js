import React, {Fragment, useState, useEffect} from 'react';

import TopNavigation from '../Components/TopNavigation'
import Banner from '../Components/Banner'
import MovieSlideList from '../Components/MovieSlideList'
import getMovieDataByCategory from '../controller/getMovieDataByCategory'

const genre = [12, 14, 16, 18, 27, 35, 36, 37, 53, 80, 99, 878, 9648, 10402, 10749, 10751, 10752, 10770];

const Main = () =>{

    // const MovieLists =[];
    const [movieLists, setMovieLists] = useState([]);

    useEffect(() => {
        genre.forEach((item) => {
            getMovieDataByCategory(item,20,1).then((res)=>{
                setMovieLists(ml => [...ml, res])
            })
        })
    },[]);


    return (
        <Fragment>
            <TopNavigation />
            <Banner />
            <MovieSlideList MovieLists={movieLists}/>
        </Fragment>
    );
};

export default Main;







// let getItems =[];
//
// for(let i=0; i<10; i++){
//     for(let j=0; j<5; j++){
//         const getItem = {
//             imgUrl: "https://image.tmdb.org/t/p/w500/1Lh9LER4xRQ3INFFi2dfS2hpRwv.jpg",
//             title: "영화제목",
//             genre: "장르",
//             overview: "이 영화의 개요는 이렇게 시작해서 저렇게 끝나는데, 개요를 길게 작성하기 위해서 길게 그냥 막 작성하고 있습니다. 실제로 개요 데이터가 얼마나 길게 올지 모르겠는데, 너무 짧게만 오지 않았으면 좋겠습니다. 길이가 영화마다 다르니, 후처리를 해야될 수 도 있겠습니다. 이상입니다."
//         }
//         getItems.push(getItem);
//     }
//     let tgetItems = getItems;
//     MovieLists.push(tgetItems);
// }