
// -------- conversion into number  ---------------//


//let score = 33;
//console.log(typeof score);  // number type


// if score in string 
// let score = "33"
// console.log(typeof scoree); // value in string type 
// But
// suppose operation will be done in numder then
// methods first letter in capital latter like Number(),String(),etc
// let valueInNumber = Number(score); // number type here gaurante the score converted into number;


//suppose String mixed
// let score = "33abc";
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // number type 
// // But what if score = "33abc". then also get // number type its is wrong way so what inside in valueInNumber lets check
// console.log(valueInNumber); // NaN type (not a number)


//suppose null
// let score = null;
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // number type 
// // what inside in valueInNumber lets check
// console.log(valueInNumber); // 0 zero


//suppose undefine
// let score = undefined;
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // number type 
// // But what if score = "33abc". then also get // number type its is wrong way so what inside in valueInNumber lets check
// console.log(valueInNumber); // NaN type (not a number)


// suppose bollean
// let score = true;
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // number type 
// // what inside in valueInNumber lets check
// console.log(valueInNumber); // 1

/*
"33" => 33 number
"33abc" => NaN 
true => 1; false => 0
null => 0 
*/




// -------- conversion into bolleans ---------------//


// ------ number to bollean ---------- //

// let isLoggedIn = 0;
// let bolleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(bolleanIsLoggedIn); // 1:- true /  0:- false 


// ------ string to bollean ---------- //

// let isLoggedIn = "";
// let bolleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(bolleanIsLoggedIn); // false

// let isLoggedIn = "raghav";
// let bolleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(bolleanIsLoggedIn); // true

/*

1 => true; 0 => false
"" => false; "raghav" => true

*/



// -------- conversion into string ---------------//

// let someNumber = 10;
// let stringNumber = String(someNumber);
// console.log(stringNumber); // 10
// console.log(typeof stringNumber); // String type



