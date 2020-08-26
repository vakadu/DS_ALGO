function twoSum(arr, target) {

    //Brute Force O(n2)
    // let result = [];    
    // for(let i=0; i<arr.length; i++) {
    //     for(let j=i+1; j<arr.length; j++) {
    //         if(arr[i] + arr[j] === target) {
    //             result.push(i);
    //             result.push(j);
    //         }
    //     }
    // }    
    // return result;

    // let obj = {};

    // for(let i=0; i<arr.length; i++) {
    //     let current = arr[i];
    //     let reqNum = target - current;
    //     let index = obj[reqNum];

    //     if(index !== undefined) {
    //         return [index, i];
    //     } else {
    //         obj[current] = i;
    //     }        
    // }
    
    
    const map = new Map();
    for(let i=0; i<arr.length; i++) {
        let currentVal = arr[i];
        let diff = target - currentVal;
        if(map.has(currentVal)) {
            return [map.get(currentVal), i]
        }
        map.set(diff, i);
    }    
}

twoSum([3, 2, 10, 11, 7, 15], 9);
