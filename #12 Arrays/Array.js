// Arrays 

// () => peranthisis [] => brackits {} => braces or curley braces 

// defination of Array :- the Array object as with other programming languages, enables storing collection of multiple items under a single variable name,  and has members for performing common array operations.
//  javaScript arrays are resizable and can contain a mix of diffrent data types.
// eg:- 
// const myArr = [0, 1, 2, 3, 4, 5, true, "raghav"] 

//  js array are not associative array and so array elements cannot be accessed using arbitery strings as indexes, but must be accessed using nonnegative integers
// js are zero based indexed

// js array-copy-operations create shallow copies.
// :- A shallow copies of an object is a copy whose properties share the same reference point.
// :- A deep copies of an object is a copy whose properties do not share the same reference point

/* in console
const numbers = [1, 2, 3, 4, 5];
numbers;  // we have prototype acces */

const myArr = [10, 11, 2, 3, 4, 5,];  // Array declaration

const myArr2 = new Array(1, 2, 3, 4, 5);  // Array declaration using new keyword

console.log(myArr[1]); // 1 

// --------- Arrays Methods ----------------

// (1) push() & pop()

// .push(value) // add value in last index of array
myArr.push(6);
myArr.push(7);
console.log(myArr);  // [10,11,2,3,4,5,6,7];

// .pop(); // remove last index of array
myArr.pop(); 
console.log(myArr);  // [10,11,2,3,4,5,6]



// (2) shift() & unshift()

// .unshift(value); // add value in first index of array
myArr.unshift(99);  
console.log(myArr);  // [99,10,11,2,3,4,5,6,7];

// .shift()  // remove first index of array
myArr.shift();  
console.log(myArr);  // [10,11,2,3,4,5,6,7];


// (3) // questioner methods whose return ans in boolean value like:-

console.log(myArr.includes(9));  // false
console.log(myArr.indexOf(9));  // -1 means nahi hai
console.log(myArr.includes(3));  // 3 (index)


//  (4) here is a imp thing 

const newArr = myArr.join();  // join the array and return string

console.log(myArr);  // [10,11,2,3,4,5,6]

console.log(newArr);  // 10,11,2,3,4,5,6

console.log(typeof newArr); // String



// (5) Slice() & Splice()


console.log("org ", myArr);


// slice(Start index, End index) // retuns a copy of a section of an array 

const myNewArr = myArr.slice(1, 3);  // last index is not included

console.log(myNewArr); // [11,2]

console.log("org,(a) ", myArr); // [10,11,2,3,4,5,6]



// splice(Start index, count of shifting) // retuns a cut of a section of an array 

const myNewArr2 = myArr.splice(1, 3);  // last index is not included

console.log(myNewArr2); // [11,2,3]

console.log("org,(b) ", myArr); // [10,4,5,6]


















