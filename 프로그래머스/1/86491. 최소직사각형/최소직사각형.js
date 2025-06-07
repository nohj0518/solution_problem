function solution(sizes) {
    let maxW = 0;
    let maxH = 0;
    sizes.map(([w,h])=>{
        if(w < h){
            // 회전 필요
            maxW = maxW < h ? h : maxW;
            maxH = maxH < w ? w : maxH;
        } else {
            maxW = maxW < w ? w : maxW;
            maxH = maxH < h ? h : maxH;
        }
    })
    return maxW * maxH;
}