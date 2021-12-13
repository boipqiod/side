import {useEffect, useState} from 'react'

export default function DetailMovieInfo(props){
    const [items, setItems] = useState();
    const [crewNames, setCrewNames] = useState("");

    setItems(props);

    useEffect(()=>{
        if(items.crew != null)
            items.crew.forEach((item)=>{
                setCrewNames(t => t + item.name);
            })
    },[items])

    //상단 정보
    return(
        <div id="detailMovieInfo">
            <div id="detailTitle">
                {props.movieDetial.title}
            </div>
            <div> <p>{props.movieDetial.rating}</p> <p>{props.movieDetial.popularity}</p> </div>
            <hr/>
            <div>
                <p>연출진 : {crewNames}</p>
                {/*<p>배우 : {acterNames}</p>*/}
                <p>장르 : {props.movieDetial.genre}</p>
                <p>개봉일 : {props.movieDetial.release_date}</p>
            </div>
        </div>
    );
}