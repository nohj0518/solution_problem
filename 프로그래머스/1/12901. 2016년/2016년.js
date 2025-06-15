function solution(a, b) {
    const days = ["SUN","MON",'TUE',"WED","THU","FRI","SAT"]
    const today =  new Date(2016, a-1, b)
    const day = today.getDay()
    return days[day];
}