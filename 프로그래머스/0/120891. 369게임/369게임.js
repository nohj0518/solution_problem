function solution(order) {

    const arr = order.toString().split('');
    const filtered = arr.filter((a) => {
        return ['3', '6', '9'].includes(a)
    })
    return filtered.length;
}