// Input: [1,2,4,6,8] ----> Output: 6
// Input: [1,2,8,3,7] ----> Output: 7

const getSecondLargestFromArray = (arr) => {
    let largest = arr[0];
    let secLargest = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (largest < arr[i]) {

            secLargest = largest;
            largest = arr[i];
        }
    }

    return [largest, secLargest];
}
// Test:
// console.log(
//     getSecondLargestFromArray([1, 2, 4, 6, 8])
// );

// console.log(
//     getSecondLargestFromArray([1, 2, 8, 3, 7])
// );

// -----------------------------

// Input: [301,900,458,67]
// Output: [103,9,854,76]

/* const getSecondLargestFromArray = (arr) => {

    const output = [];
    for (let i = 0; i < arr.length; i++) {

        const out = parseInt((arr[i]).toString().split('').reverse().join(''));
        output.push(out);

    }
    return output;
}

console.log(getSecondLargestFromArray([301, 900, 458, 67]));
 */



let str = '123(456(78))90';
// Output: 1238765490

str = '1((23)4)5'

// str = '1(234)'
// str = '1234'
// str = '(12)(34)'
// str = 'foo(foo(bar))blim'
str = 'foo(bar)'

const reverseBracket = (str) => {

    let start = str.indexOf('(');
    let end = str.lastIndexOf(')');

    if (start == -1) {
        // Base Condition
        return str;
    }

    // else if (start == 0 && end == str.length - 1) {
    //     let reversed = `${str.substring(start + 1, end).split('').reverse().join('')}`
    //     start = reversed.indexOf('(');
    //     end = reversed.lastIndexOf(')');

    //     return reversed;
    // }

    else {
        // Recursive Condition
        return reverseBracket(str.substring(0, start) + str.substr(start + 1, end - start - 1).split('').reverse().join('') + str.substring(end + 1));
    }
}

console.log(
    // reverseBracket(str)
)



/* const A = [1, 2, 4, 4, 3];
const B = [2, 3, 1, 3, 1];
const cartesianProduct = (N, A, B) => {


    if (N*(N-1)) {

    }
    const graph = []


    for (let k = 0; k < A.length; k++) {
        graph.push(
            A[k] + B[k]
        );
    };

    const res = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B.length; j++) {
            res.push(B[j] + A[i])
        };
    };
    console.log(res)
    return graph.every(item => res.includes(item));

};
console.log(
    cartesianProduct(4, [1, 2, 1, 3], [2, 4, 3, 4])
) */




function segmentsWithSum(a, m, k) {

    a = a.sort((a, b) => a - b)
    let result = 0;
    for (let i = 0; i < a.length; i++) {

        const subArr = a.slice(i, i + m);
        if (subArr.length == m) {

            let subArrCount = 0
            if (subArr.some(elem => elem >= k)) {
                result += 1;

            }
            else {
                for (let j = 0; j < m; j++) {
                    result = subArr[j] + subArr[j + 1] >= k ? result + 1 : result;
                }



            }
        }
        else {
            break;
        }

    }

    return result;

}


/* You are given an array of strings arr. Your task is to construct a string from the words in arr, starting with the 0th character from each word (in the order they appear in arr), followed by the 1st character, then the 2nd character, etc. If one of the words doesn't have an ith character, skip that word.

Return the resulting string.

Example

For arr = ["Daisy", "Rose", "Hyacinth", "Poppy"], the output should be readingVertically(arr) = "DRHPaoyoisapsecpyiynth".

First, we append all 0th characters and obtain string "DRHP";
Then we append all 1st characters and obtain string "DRHPaoyo";
Then we append all 2nd characters and obtain string "DRHPaoyoisap";
Then we append all 3rd characters and obtain string "DRHPaoyoisapaecp";
Then we append all 4th characters and obtain string "DRHPaoyoisapaecpyiy";
Finally, only letters in the arr[2] are left, so we append the rest characters and get "DRHPaoyoisapaecpyiynth";
example

For arr = ["E", "M", "I", "L", "Y"], the output should be readingVertically(arr) = "EMILY".

Since each of these strings have only one character, the answer will be concatenation of each string in order, so the answer is EMILY.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string arr

An array of strings containing alphanumeric characters.

Guaranteed constraints:
1 ≤ arr.length ≤ 100,
1 ≤ arr[i].length ≤ 100.

[output] string

Return the resulting string.

 */
let ary = ["Daisy", "Rose", "Hyacinth", "Poppy"];
function readingVertically(ary) {
    let st = '';
    while (ary.length > 0) {

        for (let i = 0; i < ary.length; i++) {

            if (!ary[i].length) {
                ary.splice(i, 1)
            }

            if (ary[i]) {
                st += ary[i].slice(0, 1)
                ary[i] = ary[i].slice(1)
            }
        }

    }
    return st;
}
// console.log(readingVertically(ary) == 'DRHPaoyoisapsecpyiynth');

function mostFrequentDigits(a) {

    let obj = {};

    for (let i = 0; i < a.length; i++) {

        let number = a[i];
        while (number / 10 > 0) {

            if (obj.hasOwnProperty(`${number % 10}`)) {
                obj[`${number % 10}`] += 1;
            }
            else {
                obj[`${number % 10}`] = 1;
            }
            number = parseInt(number / 10);

        }

    }

    const maxCount = Object.values(obj).sort((a, b) => b - a)[0];
    const result = [];
    for (const key in obj) {
        if (obj[key] == maxCount) {
            result.push(parseInt(key))
        }
    }
    return result;

}

function segmentsWithSum(a, m, k) {

    let result = 0;
    for (let i = 0; i < a.length; i++) {

        const subArr = a.slice(i, i + m);
        if (subArr.length == m) {

            let subArrCount = 0
            if (subArr.some(elem => elem >= k)) {
                result += 1;

            }
            else {
                for (let j = 0; j < m; j++) {
                    subArrCount += subArr[j];
                }
                if (subArrCount / k >= 1.5) {
                    result += 1;
                }

                else {
                    break;
                }

            }
        }

    }
    return result;

}


function arrayHasSumOfPair(arr, sum) {

    let obj = {};
    for (let i = 0; i < arr.length; i++) {


        let temp = sum - arr[i]
        if (obj.hasOwnProperty(`${arr[i]}`)) {

            console.log("Pair with given sum " + sum + " is (" + arr[i] + ", " + temp + ")")


        }
        else {
            obj[`${temp}`] = arr[i];

        }

    }
    console.log(obj)
}

// arrayHasSumOfPair([6, 2, 5, 4, 3, 1], 10)

let n = 100;
let sum = 0
for (let i = 0; i <= n; i++)
    sum += i;
let avg = sum / n;
console.log('avg: ' + avg);


function asyncAvg(n, avgCB) {
    // Save ongoing sum in JS closure.
    var sum = 0;
    function help(i, cb) {
        sum += i;
        if (i == n) {
            cb(sum);
            return;
        }

        // "Asynchronous recursion".
        // Schedule next operation asynchronously.
        setImmediate(help.bind(null, i + 1, cb));
    }

    // Start the helper, with CB to call avgCB.
    help(1, function (sum) {
        var avg = sum / n;
        avgCB(avg);
    });
}

//   asyncAvg(n, function(avg){
//     console.log('avg of 1-n: ' + avg);
//   });

// n = 1000;
// sum = 0
// for (let i = 0; i <=n  ; i++)
//   sum += i;
// avg = sum / n;
// console.log('avg: ' + avg);


function f2(n) {

    for (let i = 0; i < 10 ** 10; i++) {
        let g = n

    }
}


async function f1(n) {

    console.log(n, 'In')
    for (let i = 0; i < 10 ** 10; i++) {
        // await '123'
        await console.log(n, i)
    }
    console.log(n, 'Done')
}


async function main(n) {
    await f1(n)
    f2(n)
}

main(1)

main(2)

main(3)

main(4)


/* 
function a(){
    console.log(b)
}
var b;
a()
 */

/* 
var double = 22;

function double(num) {
  return (num*2);
}
console.log(typeof double); // Output: number
*/


/* var double;

function double(num) {
  return (num*2);
}

console.log(typeof double); // Output: function
*/


/* 
console.log("first");
setTimeout(() => {
    console.log("second");
}, 0);
console.log("third");
 */



/* let myObject = {
      egg: "plant",
      func: function() {
            var self = this;   
            console.log('outer func: this.egg = ' + this.egg);
            console.log('outer func: self.egg = ' + self.egg);
           (function() {
            console.log('inner func: this.egg = ' + this.egg);
            console.log('inner func: self.egg = ' + self.egg);
            }());
       }
};
myObject.func();
 */

let myObject2 = {
    egg: "plant",
    func: () => {
        var self = this;
        console.log('outer func: this.egg = ' + this.egg);
        console.log('outer func: self.egg = ' + self.egg);
        (function () {
            console.log('inner func: this.egg = ' + this.egg);
            console.log('inner func: self.egg = ' + self.egg);
        }());
    }
};
myObject2.func();


// Output:
// outer func:  this.egg = plant
// outer func:  self.egg = plant
// inner func:  this.egg = undefined
// inner func:  self.egg = plant



/*
Given an array, create an ordered array so it satisfies the following condition [a < b > c < d > e < f > g]. 
Sample input: [66, 1, 77, 2, 11, 31, 12, 42, 55, 74, 200] 
Sample output: [1, 66, 2, 77, 11, 31, 12, 55, 42, 200, 74]. 
Output may differ depending on your implementation.  
*/


// even index -> lesser than neighbors
// odd index -> greater than neighbors


// 1, 66, 2, 77, 11, 31, 12, 55, 42 // 8 ---> 8 (index)

let input = [66, 1, 77, 2, 11, 31, 12, 42, 55, 74, 200];
let output = [];
for (let i = 0; i < input.length; i++) {

    if (i == 0)
        output.push(input[i])
    else {
        if (i % 2 == 0) {

            if (input[i] < output[i - 1]) {
                output.push(input[i]);
            }
            else {
                const temp = output[i - 1];
                output[i - 1] = input[i];
                output.push(temp);
            }
        }
        else {

            if (input[i] > output[i - 1]) {
                output.push(input[i]);
            }
            else {
                const temp = output[i - 1];
                output[i - 1] = input[i];
                output.push(temp);
            }
        }
    }
}

const flatArray = foods => {

    for (let i = 0; i < foods.length; i++) {

        if (!Array.isArray(foods[i])) continue;

        const [splice] = foods.splice(i, 1)
        foods = foods.concat(splice);
        --i;
    }
    return foods;
}
let foods = ['Orange', 'Apple', ['Carrot', ['Celery'], ['Chicken', 'Fish']], ['Bread', 'Pasta', ['Pizza']], ['Steak']];
// console.log(flatArray(foods));


const mergeIntervals = given => {

    for (let i = 0; i < given.length - 1; i++) {

        let [currX, currY] = given[i];
        // console.log(given, i)
        let [nextX, nextY] = given[i + 1];

        const difference = currY - nextX;
        if (difference < 0) continue;

        given[i] = [currX, nextY]
        given.splice(i + 1, 1)
        --i;
    }
    return given;
}

// console.log(mergeInterals([[1, 4], [2, 5], [7, 10], [12, 16]]))


const find3IntegersWithMaximumProduct = arr => {
    const [a, b, c, ...remaining] = arr.sort((a, b) => b - a);

    let d = remaining.pop();
    let e = remaining.pop();

    if (d * e > 0) {
        console.log(`Product of ${a}*${d}*${e},  ${a * d * e}`);
    }
    else {
        console.log(`Product of ${a}*${b}*${c},  ${a * b * c}`);
    }
}

// Test:
// const arr2 = [-1000, 1, 0, 100, 10, 5, -1, 100, 5, 0, -200, 7, 3445, 26, 26, -26, 100, 0, 2, -1, -1, -1, 2, 11];
// find3IntegersWithMaximumProduct(arr2)
