import axios from 'axios';

const header = {
    headers: {
        'api-key': "8d6fc5f1bbad81d1509671a24ca39de2ad67d625f4edbe47daf1f9fb8f95c117",
        'access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfY2lkIjozMjExMTIyMTA3NTU0ODYsIl9yb2xlIjozLCJfZW1haWxJZCI6InNpbW9uLmtvbmdAZGV0aW9uLm1lIiwiaWF0IjoxNjM3NjQ2ODA0LCJleHAiOjE2NjkxODI4MDR9.Ts3GMZr7JkPBiy7J3zCQESg3gOvkWRbjEqocr87sw0E"
    }
}

export default function dmplus(cTxNo) {

    let result = axios.put('https://gw.dmplus.me/api/gateway/v1.0/client/auth', {
        'cid': 321112210755486,
        'cTxNo': cTxNo
    }, header)
        // axios.post('https://gw.dmplus.me/api/gateway/v1.0/client/auth/issue',data,header)
        //연결 성공
        .then(function (response) {
            return response.data
        })
        //연결 실패
        .catch(function (error) {
            console.log(error);
        });
    return result;
};