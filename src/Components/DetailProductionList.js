import {Fragment} from "react";

export default function DetailProductionList(props){
    return(
        <Fragment>
            {props.item.profile_path ===null ? (<div/>) : (<img src={props.item.profile_path} alt={props.item.name}/>)}
            <p>{props.item.name} ( {props.item.job} )</p>
        </Fragment>
    )
}
