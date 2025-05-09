const score = 100;  // 100 // here it is any type of num 

const balance = new Number(100); // here quranted it is number

console.log(balance); // [Number: 100]

// 0r in console we get number obj with prototype => Number{100}

// toString();
console.log(balance.toString()); // 100
const num = balance.toString();
console.log(typeof num);  // string type


// length();
// now we use string methods also on it like .length();
console.log(balance.toString().length); //3


// toFixed();
// how many num you want after decimal
console.log(balance.toFixed(3));  // for:- 2:- 100.00  // for:- 3:- 100.000


// toPrecision();
// range bitween 1 - 21 & returns string type value
const otherNum = 1125.5876;
console.log(otherNum.toPrecision(3));


const num2 = 1000000; // little complicated to understand
console.log(num2.toLocaleString());   // 1,000,000 
console.log(num2.toLocaleString("en-IN"));  // indian num sys :- 10,00,000 


// +------------------------ Maths ------------------------------+

console.log(Math); // Object[Math] {}
// in console we have so many methods

// const numm = -5;
// .abs(() it convert nugitive num into positive
console.log(Math.abs(-4)); // 4

// .round() 
console.log(Math.round(4.4)); // 4.4:- 4 0r 4.6:- 5

// .ceil() means decimal se jara sa bhi jada hua to ++
console.log(Math.ceil(7.2)); // 8

// floor() means decimal se kitna bhi jada ho hata dega
console.log(Math.floor(5.9)); // 5

// if you find min or max value in an array then
console.log(Math.min(4,5,2,8)); // 2
console.log(Math.max(4,5,2,8)); // 8

//  where math laibarry is used and where we used

// .random(); values always bitween 0 or 1
console.log(Math.random());
console.log(Math.random()*10); // values always 0-9
console.log( (Math.random()*10) + 1); // now value is not zero
console.log( Math.floor((Math.random()*10) + 1 )); // after decimal num is removed 

const min = 10;
const max = 20

console.log( Math.floor( Math.random() * (max-min +1) + min ) );  // value bitweem 10-20








