import {Fragment} from "react";

import DetailActList from './DetailActList';
import DetailProductionList from './DetailProductionList';

export default function DetailMoreInfo(props){

    let items = props.movieDetial;

    //디테일 페이지 하단 더보기 정보
    return(
        <Fragment>
            <hr/>
            <div>
                <p>개요</p>
                <p>{items.overview}</p>
                <br/>
            </div>
            <p>출연진</p>
            <div id="detailActList">
                {items.cast.map((item,index) =>
                    <DetailActList key={index} item={item}/>
                )}
            </div>
            <p>제작진</p>
            <div id="detailProductionList">
                {items.crew.map((item,index) =>
                    <DetailProductionList key={index} item={item}/>
                )}
            </div>
            <hr/>
        </Fragment>
    );
}