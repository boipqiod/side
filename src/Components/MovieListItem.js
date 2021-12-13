import {useNavigate} from 'react-router-dom';

export default function MovieListItem (props){
    const navigate = useNavigate();

    const onClick = () =>{
        navigate("/detail/" + props.id);
    }

    return (
        <div id="movieListItem">
            {/*<Link id="movieListImagesLink" to={"/detail/" + props.title} title="자세히보기">*/}
            <img id="movieListImages" src={props.poster_path}  alt="포스터" title={props.title+" 자세히보기"}/>

            <div id="movieListInfo" onClick={onClick} title="자세히보기">
                <div>
                    <p id="movieListTitle">{props.title}</p>
                    <p id="movieListGenre">{props.genre}</p>
                </div>
                <div id="movieListOverview">
                    {props.overview}
                </div>
            </div>

            <p>{props.title}</p>
        </div>

    );
}