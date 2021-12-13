import axios from 'axios';

export default async function getMovieDataByKeyword(keyword, movieCount, pageNum){
    const result = axios.get('http://54.180.134.194:3000/api/movie/search',{
        params: {
            keyword: keyword,
            movieCount: movieCount,
            pageNum: pageNum
        }
    })
    .then(function(response) {
        console.log(response);
        let res = response.data;
        return res;
    })
    .catch(function(error) {
        console.log(error);
    });

    return result;
}