//---------->>><<<<-----------------// // hosting
  

// it is normal function

function addOne(num) {
    return num+1;
  }
  addOne(5); // ishko function se phele ya bad mein diclare kr skte hai
  
  
  
  // it is function with Experssion/
  
  const addTwo = function(num){
    return num+2;
  }
  addTwo(5); // but ishko function se phele diclare nahi kar skte it is called hosting

//---------->>><<<<-----------------// // Arrow Function
// const one = function () {} // syntax ==> () => {}
// const two = () => {}  it is arrowFunction

const add = (num1,num2) => {
  return num1 + num2
}
add(5,8); //13 
// this is basic 

// here one more way to diclare arrow function
// it is called implicit return

const addtwo = (num1,num2) => num1 + num2; 
//or
const addnum = (num1,num2) => (num1 + num2); 
// {} => need to write return keyword
// () => no need to write return keyword 
// for obj return ({})*/
// in react it is very usefull


addtwo(5,8); // 13 
addnum(5,8); // 13

// in arrays

const myarray = [2,5,8,3];

// myarray.forEach(function () => {});
// myarray.forEach(() => {});
// myarray.forEach(() => ());






  