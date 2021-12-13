import axios from 'axios';

export default async function getMovieDataByCategory(categoryId, movieCount, pageNum){
    const result = axios.get('http://54.180.134.194:3000/api/movie/list',{
        params: {
            categoryId: categoryId,
            movieCount: movieCount,
            pageNum: pageNum
        }
    })
    .then(function(response) {
        // console.log(response.data.result);
        let res = response.data.result;
        return res;
    })
    .catch(function(error) {
        console.log(error);
    });

    return result;
}