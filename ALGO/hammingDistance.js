// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// Note: 0 ≤ x, y < 231

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// The above arrows point to positions where the corresponding bits are different.

////////// toString() /////////
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
// let baseTenInt = 10;
// console.log(baseTenInt.toString(2)); 
// Expected output is "1010"

// The bitwise XOR assignment operator (^=) uses the binary representation of both operands, 
// does a bitwise XOR operation on them and assigns the result to the variable.

// let a = 5;      // 00000000000000000000000000000101
// a ^= 3;         // 00000000000000000000000000000011

// console.log(a); // 00000000000000000000000000000110
// expected output: 6

let hammingDistance = function(x, y) {
    // if (x.length !== y.length) {
    //     throw new Error('Strings must be of the same length');
    // } 
    // let distance = 0;
    // for (let i = 0; i < x.length; i++) {
    //     if (x[i] !== y[i]) {
    //         distance++;
    //     }
    // }
    // console.log(distance);
    // return distance;
    // let mask = (x^y).toString(2).split("");
    // let arr = [];
    // mask.map(m => {
        
    //     if(m==="1"){
    //         arr.push(m);
    //     }
    //     console.log(arr.length);
        
    //     return arr.length;
    // })

    return (x^y).toString(2).split("").filter(n => { return n==="1" }).length;
};

hammingDistance(20, 26)
