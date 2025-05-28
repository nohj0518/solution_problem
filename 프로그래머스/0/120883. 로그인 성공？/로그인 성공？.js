function solution(id_pw, db) {
    var answer = 'fail';
    db.map(([id, pw]) =>{
        if(id_pw[0] === id && id_pw[1] === pw) {
            answer = 'login';
        } else if(id_pw[0] === id && id_pw[1] !== pw){
            answer = 'wrong pw';
        }
    })
    return answer;
}