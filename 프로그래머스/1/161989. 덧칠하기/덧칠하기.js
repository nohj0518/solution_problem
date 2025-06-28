function solution(n, m, section) {
    // n : 벽의 총 번호
    // m : 롤러의 길이
    // section : 다시 페인트를 칠해야할 구역 벽의 번호들
    let i = 0;
    let sectionNumber = section[i];
    let size = m;
    let cnt = 0;
    while(sectionNumber <= section[section.length-1]){
        if(sectionNumber < section[i]){
            // sectionNumber : 현재위치
            // section[i] : 칠해야하는 섹션 번호
            sectionNumber = section[i] + size;
        } else if(sectionNumber == section[i]){
            sectionNumber = sectionNumber + size;
        }
        cnt++
        // i를 옮긴다.
        i = section.findIndex((n) => n >= sectionNumber)
        if(i == -1) break
        
    }
    return cnt;
}