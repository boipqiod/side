import '../css/MovieList.css';
import MovieListItem from '../Components/MovieListItem';

export default function MovieList (props) {
    return (
        <div id="movieList">
            {props.movieList.map((item) =>
                <MovieListItem poster_path={item.poster_path} title={item.title} genre={item.genre} overview={item.overview} id={item.movie_id}/>)}
        </div>
    );
}