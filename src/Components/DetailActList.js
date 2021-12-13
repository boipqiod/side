import { Link } from 'react-router-dom';
import {Fragment} from "react";

export default function DetailActList(props){
    return(
        //배우 데이터 뿌려줌
        <Fragment>
            { props.item.profile_path===null ? (
                <Fragment/>
            ) : (
                <Fragment>
                    {/*<Link to={"/search/" + props.item.name} title={props.item.name+"(으)로 검색하기"}>*/}
                        <img src={props.item.profile_path} alt={props.item.name}/>
                    {/*</Link>*/}
                    <p>{props.item.name} ({props.item.character_name})</p>
                </Fragment>
            )}
        </Fragment>
    )
}