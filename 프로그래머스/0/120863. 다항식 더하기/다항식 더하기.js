function solution(polynomial) {
    const arr = polynomial.split(' ').filter((a) => a !== '+')
    const xTerms = arr.filter((a) => a.includes('x'))
    let xTerm = xTerms.reduce((acc, cur) => {
       acc += cur.length > 1 ? +cur.split('x')[0] : 1
        return acc
    },0)
    const intTerms = arr.filter((a) => !a.includes('x'))
    const intTerm = intTerms.reduce((acc, cur) => {
        return acc += +cur
    },0)
    
    switch(true){
        case(xTerm > 0 && intTerm > 0) :{
            
            return `${xTerm == 1? '' : xTerm}x + ${intTerm}`
        }
        case(xTerm > 0 && intTerm == 0):{
            return `${xTerm == 1? '' : xTerm}x`
        }
        case(intTerm > 0 && xTerm == 0):{
            return `${intTerm}`
        }
        default:{
            return `0`
        }
    }
}