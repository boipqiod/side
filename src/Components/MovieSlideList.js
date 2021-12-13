import '../css/MovieList.css';
import MovieSlide from './MovieSlide'

export default function MovieSlideList (props) {
    return (
        <div id="movieSlideLists">
            {props.MovieLists.map((MovieList, index) =>
                <MovieSlide key={index} MovieList={MovieList}/>
         )}
        </div>

    );
}