function solution(cipher, code) {
    return cipher.split('').filter((s,idx)=> (idx+1)%code == 0).join('');
}