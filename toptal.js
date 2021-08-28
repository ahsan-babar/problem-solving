function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    // Split the input in triads, pair, singles
    S = S.replace(/[^\d]/g, '');
    let trunced = S;
    let final = '';
    let iterator = 3;
    for (let i = 0; i < S.length; i += iterator) {

        if (trunced.length == 4 || trunced.length == 2) {
            iterator = 2;
        }
        else if (trunced.length == 1) {
            iterator = 1;
        }

        final += S.substring(i, i + iterator)
        if (i + iterator < S.length) {
            final += '-'
        }

        trunced = trunced.slice(iterator)

    }
    return final;
}


// Testing
solution('1234567891011')
solution('022-198-532-4')