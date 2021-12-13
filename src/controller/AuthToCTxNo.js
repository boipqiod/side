import dmplus from './dmplus'

let result = false;

export default function AuthToCTxNo(cTxNo){

    // const navigate = useNavigate();

    dmplus(cTxNo).then(async (res)=>{
        if(res.result.resultCode == 200){
            result = true;
        }
        else { //인증 성공
        }
    })
    return result;
}