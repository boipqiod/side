import axios from 'axios';

export default async function getDetailMovieData(id){
    const result = axios.get('http://54.180.134.194:3000/api/movie/detail/'+id,{
        // params: {
        //     id: id
        // }
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