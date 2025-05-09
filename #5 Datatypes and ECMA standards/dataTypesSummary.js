/*

javascript is a dynamiclly types language

Data Types :-----   two types 
  
  (1) premitive (call by value)
  
  (2) non premitive (call by reference)
   
Basecally diffrencatation is on the basis of memory accocation,means how to store your data in memory and how to accsess it.

(1) premitive (call by value) :- 7 types
 :-- String,Number,Null,Undefined,Boolean,Bigint,Symbol
 
 const score = 100;
 const isLoggedIn = false;
 const outSideTemp = null;
 let userEmail = undefined;

 const id = Symbol("123");
 const anotherId = Symbol("123");
 console.log(id === anotherId);

 const bigInt = 12343238271864n;

(2) non premitive (call by reference) :- 3 types
:-- Arrays, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]; // Arrays

let myObj = {
name: "raghav",
age: 22,
}                                              // object

const myFunctions = function(){
console.log("hello raghav");
}

*/

console.log(typeof null);  // object

/*

type of values :-- result
undefined :-- undefined type
null :-- object type
boolean :-- boolean type
number :-- number type
string :- string type
object (native and does not impliment (call) :-- object
object (native and does impliment (call) :-- function

*/