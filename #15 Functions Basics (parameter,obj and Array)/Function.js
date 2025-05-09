// console.log('r');
// console.log('a');
// console.log('g');
// console.log('h');
// console.log('i');
// console.log('j');
// very irritating because of repetation code

// the only solution is // function

// syntax =>> functionkeyword functionName () {}
function sayMyName() {
    console.log('r');
    console.log('a');
    console.log('g');
    console.log('h');
    console.log('a');
    console.log('v');
  }
  
  // functionName execute()
  sayMyName();
  
  // it is basics
  
  
  // function without return
  function addTwoNumbers(num1, num2) // perameters
  {
    console.log(num1+num2);
  }
  
  addTwoNumbers(3,8); // here in arguments datatype checking is needed;
  
  
  
  // return type function
  function addNumbers(num1, num2) // perameters
  {
    return num1+num2; // after return nothing is return
  }
  
  const result = addNumbers(8,8);
  console.log(result);
  
  
  // how many types of works we do in perrameters & argu
  
  function loginUserMessage(username){
    if(username === undefined){
      console.log("please enter a username");
      return;
    }
    return `${username} just logged in`;
  }
  
  console.log(loginUserMessage("hitesh")); // hitesh just logged in
  
  // if value is giving 
  console.log(loginUserMessage()); // undefined just logged in



  