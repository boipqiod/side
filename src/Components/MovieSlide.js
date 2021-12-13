import "../css/slick.css";
import "../css/slick-theme.css";
import Slider from 'react-slick';
import splitMovieList from '../controller/splitMoiveList'
import { useMediaQuery } from 'react-responsive'

import '../css/MovieList.css';
import MovieList from './MovieList'

export default function MovieSlide(props) {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    let SplitedMovieList;

    if(useMediaQuery({ minWidth: 1025 })){
        SplitedMovieList = splitMovieList(props.MovieList, 5);
    }
    else SplitedMovieList = splitMovieList(props.MovieList, 3);

    return (
        <div id="movieListSlide">
            <div id="movieListSlideGenre">
                #{props.MovieList[0].genre}
            </div>
            <Slider {...settings}>
                { SplitedMovieList.map((movieList, index)=>
                    <MovieList key={index} movieList={movieList} />
                )}
            </Slider>
        </div>
    );
}