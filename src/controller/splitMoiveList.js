export default function splitMoiveList(movieList, amount){
    let Lists = [];

    for(let i =0; i+amount <= movieList.length; i+=amount){
        let splited = movieList.slice(i,i+amount);
        Lists.push(splited);
    }
    return Lists
}