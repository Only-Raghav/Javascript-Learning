const user = {
    userName : "raghav",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.userName}, welcome to wepsite`);
        // this is showing current context
        console.log(this);
    }
}

user.welcomeMessage(); // raghav, welcome to wepsite

// but if someone change userName then what we do 

user.userName = "sam";
user.welcomeMessage(); // sam, welcome to wepsite

// but i write this in global scope so now what is the current context
// this
console.log(this); // in node enviroment she give empty object but in console current context is windows.

// one more thing about this

// this is only working in objects not in functions

function one() {
    let userName = "raghav";
    console.log(this);          //output :- so many values
    console.log(this.userName); //output :- undefined

    
}

one(); //  in node under the function //output :- so many values

// =====>>>>>>>><<<<<======== this in arrow functions

const one = function () { // syntax ==> () => {}
    let userName = "raghav";
    console.log(this.userName);
  }
  one(); // undefined


  const two = () => {
    let userName = "raghav";
    console.log(this.userName); // undefined
    console.log(this);   // empty braces

  }
  one(); // also now undefined

  
