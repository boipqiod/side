import MovieList from '../Components/MovieList'
import {Fragment, useEffect, useState } from "react";
import splitMovieList from '../controller/splitMoiveList'
import { useMediaQuery } from 'react-responsive'
import { useInView } from "react-intersection-observer"
import getMovieDataByKeyword from '../controller/getMovieDataByKeyword'
import {useParams} from 'react-router-dom';

import '../css/Search.css'

const SearchResult = (props) => {

    let splitedMovieLista = [];
    const [ref, inView] = useInView();
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [getItems, setGetItems] = useState([]);
    const [isOver, setIsOver] = useState(false);

    useEffect(()=>{
        setLoading(true);
        getMovieDataByKeyword(props.useParams, 30, page).then((res)=>{
            setGetItems(res);
        });
    },[])
    useEffect(()=>{
        setLoading(true);
        setGetItems([]);
        setPage(1);
        getMovieDataByKeyword(props.useParams, 30, page).then((res)=>{
            setGetItems(res);
        });
        setLoading(false);
        setIsOver(false);
    },[useParams().search])

    useEffect(() => {
        setLoading(true);
        getMovieDataByKeyword(props.useParams, 30, page).then((res)=>{
            if(res.length < 30 && res !== false){
                setIsOver(true);
            }
            else setGetItems(i => [...i, ...res]);
        })
        setLoading(false);
    }, [page]);

    if(useMediaQuery({ minWidth: 900 })){
        splitedMovieLista = (splitMovieList(getItems, 5));
    }
    else  splitedMovieLista = (splitMovieList(getItems, 3));

    useEffect(() => {
        if(inView && !loading && !isOver) setPage(p => p+1);
    },[inView, loading, isOver])

    return(
        <Fragment>
            <div id="searchResult">
                <p>{props.useParams} 검색 결과입니다.</p>
                { splitedMovieLista.map((movieList, index)=>
                    splitedMovieLista.length - 1 === index ? (
                        <div id="searchResultMovieList" key={index} ref={ref}>
                            <MovieList movieList={movieList}/>
                        </div>
                    ) : (
                        <div id="searchResultMovieList" key={index}>
                            <MovieList movieList={movieList}/>
                        </div>
                    )
                )}
                {isOver? (<p>검색 결과가 없습니다.</p>) : (<p></p>)}
            </div>

        </Fragment>
    )
}
export default SearchResult;