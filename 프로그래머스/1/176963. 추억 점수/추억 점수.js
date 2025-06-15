function solution(name, yearning, photo) {
    var answer = [];
    // 사람 이름 배열 name, 그리임 점수 yearning, 각 사진의 인물들 photo
    const dictionary = {}
    for( i in name) {
        const person = name[i]
        if(!dictionary[person]) dictionary[person] = yearning[i];
    }
    return photo.map((ph) => {
        return ph.reduce((acc, cur) => {
            if(!dictionary[cur]) dictionary[cur] = 0
            return acc += dictionary[cur]
        }, 0)
    })
}