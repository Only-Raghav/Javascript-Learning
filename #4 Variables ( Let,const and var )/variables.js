const accountId = 112253;
accountEmail = "rr@gmail.com";
accountPassword = "6789";
accountCity = "delhi";

console.table([accountId, accountEmail, accountPassword, accountCity]);

//  let and var are changeable so now whats the difference bitween let and war


/*
let is block scoped
var is global scoped
*/


/* 
prefer not to be use var because of issue in block scope and functional scope.
*/


let accountState;

console.log(accountState); // undefined

// const country; 

// constant must be initialized at the time of decleration.

console.log(country); 

// otherwise error : missing initializer in const declarstion;