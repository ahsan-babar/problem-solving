// Task-1

const groupAnagrams = (list) => {
    const obj = {};

    for (let i = 0; i < list.length; i++) {

        const item = list[i];
        const itemSorted = item.split('').sort().join('');

        if (!obj.hasOwnProperty(itemSorted))
            obj[itemSorted] = [item];
        else
            obj[itemSorted].push(item);
    }

    for (let [, value] of Object.entries(obj))
        console.log(value.join(' - '));
}

const anagramList = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS'];
groupAnagrams(anagramList);


// Task-2

const parenthesizedStringList = ['foo(bar)', '(bar)', 'foo(bar)blim', 'foo(foo(bar))blim'];

const reverseBracket = (str) => {

    let leftParanthesesLastIndex = str.lastIndexOf('(');

    // Base Condition
    if (leftParanthesesLastIndex == -1)
        return str;

    // Recursive Condition
    else {

        let rightParanthesesIndex = str.indexOf(')', leftParanthesesLastIndex);
        
        const originalLeft = str.substring(0, leftParanthesesLastIndex);
        const parenthesized = str.substr(leftParanthesesLastIndex + 1, rightParanthesesIndex - leftParanthesesLastIndex - 1);
        const originalRight = str.substring(rightParanthesesIndex + 1);

        return reverseBracket(`${originalLeft}${parenthesized.split('').reverse().join('')}${originalRight}`);
    }
}

console.log(    parenthesizedStringList.map(str => reverseBracket(str)))