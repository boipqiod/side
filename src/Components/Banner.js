import '../css/banner.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {useState, useEffect} from 'react';
import getMovieDataByCategory from '../controller/getMovieDataByCategory'
import BannerItem from './BannerItem'

export default function Banner () {
    // Slick 라이브러리 셋팅
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        pauseOnHover: true,
        // fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
    };

    const [items, setItems] = useState([]);

    useEffect(()=>{
        getMovieDataByCategory(18, 5, 1).then((res)=>{
            setItems(res);
        })
    },[])

    return (
        <div id="bannerDiv">
            <Slider {...settings}>
                {/*배너 장수만큼 넘겨받음 */}
                {items.map((item, index)=>
                    <BannerItem key={index} item={item}/>
                )}
            </Slider>

        </div>
    );
}