// 3 ways to remove duplicates from array

const array = ["a", 1, 34, 4, 34, "b", 5, "a"];

//using Set
//Set only lets you store unique values. When you pass in an array, it will remove any duplicate values.

const uniqueSet = new Set(array);
//we’re going to convert it back to an array by using the spread operator ...
console.log([ ...uniqueSet ], "SET");

// you can also use Array.from to convert a Set into an array:
console.log(Array.from(new Set(array)), "Set array from")

//using Filter and indexOf
// The indexOf method returns the first index it finds of the provided element from our array.
// The filter() method creates a new array of elements that pass the conditional we provide. 
//In other words, if the element passes and returns true, it will be included in the filtered array. 
//And any element that fails or return false, it will be NOT be in the filtered array.

let filterArr = array.filter((item, index) => {
    return array.indexOf(item) === index;

    //if only duplicates
    //return array.indexOf(item) !== index;
})
console.log(filterArr, "filter arr");

//using reduce
// The reduce method is used to reduce the elements of the array and 
// combine them into a final array based on some reducer function that you pass.
let reduceArr = array.reduce((acc, item) => {
    return acc.includes(item) ? acc : [ ...acc, item ];
}, [])
console.log(reduceArr, "reduce arr");
