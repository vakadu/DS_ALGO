// Write a program to find the n-th ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. 

// Input: n = 10
// Output: 12
// Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

let nthUglyNumber = function(n) {
    let p2=0, p3=0, p5=0, result=[];
    result[0] = 1;
    for(let i=1; i<n; i++){
        let next = Math.min(result[p2] * 2, result[p3] * 3, result[p5] * 5);
        if(next === result[p2] * 2) p2++;
        if(next === result[p3] * 3) p3++;
        if(next === result[p5] * 5) p5++;
        result[i] = next;
    }    
    return result[n-1];
};

nthUglyNumber(10)
