function solution(survey, choices) {
    var answer = '';
    const dictionary = {
        'R': 0,
        'T': 0,
        'C': 0,
        'F': 0,
        'J': 0,
        'M': 0,
        'A': 0,
        'N': 0,
    }
    survey.map((s, idx)=> {
        const [s1, s2] = s.split('');
        const score = choices[idx]
        if(score < 4) dictionary[s1] +=4-(score%4);
        else if(score > 4) dictionary[s2] +=(score%4);
    })
    dictionary['R'] >= dictionary['T'] ? answer+= 'R' : answer+= 'T'
    dictionary['C'] >= dictionary['F'] ? answer+= 'C' : answer+= 'F'
    dictionary['J'] >= dictionary['M'] ? answer+= 'J' : answer+= 'M'
    dictionary['A'] >= dictionary['N'] ? answer+= 'A' : answer+= 'N'
    return answer;
}