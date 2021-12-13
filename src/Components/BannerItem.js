import '../css/banner.css';
import {Fragment} from "react";
import { Link } from 'react-router-dom';

export default function BannerItem (props) {
    return (
        <Fragment>
            {/*배너 데이터 뿌려줌*/}
            <Link id="toDetail" to={"/detail/" + props.item.movie_id} title="자세히보기">
                <div id="bannerBackdrop">
                    <img src={props.item.backdrop_path} alt="XBOX"/>
                </div>
                <div id="banner">
                    <div id="bannerContents">
                        <div id="bannerTitle">
                            {props.item.title}
                        </div>
                        <div id="bannerGenre">
                            {props.item.genre}
                        </div>
                        <div id="bannerOverview">
                            {props.item.overview}
                        </div>
                    </div>
                    <div id="bannerImage">
                        <img src={props.item.poster_path} alt="XBOX"/>
                    </div>
                </div>
            </Link>
        </Fragment>
    );
}