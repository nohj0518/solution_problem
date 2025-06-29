function solution(babbling) {
    // 조카가 발음 할 수 있는 발음
    const canSpeak = ['aya', 'ye', 'woo', 'ma'];
    const converted = babbling.map((babble) => {
        canSpeak.map((can) => {
            const patternString1 = `(${can})`;
            const patternString2 = `(${can}){2,}`;
            const regex1 = new RegExp(patternString1, 'g');
            const regex2 = new RegExp(patternString2);
            babble = babble.replace(regex2, '*')
            babble = babble.replace(regex1, '-')
        })
        return babble
    })
    return converted.filter((c) => c.replaceAll('-','').length === 0 && !c.includes('*')).length;
}