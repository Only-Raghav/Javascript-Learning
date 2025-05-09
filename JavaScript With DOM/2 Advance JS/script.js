// this , call, apply, bind

// (a) this 
console.warn("this keyword");


// 1 global - window
console.error("1");
console.log(this);

// 2 function - window
console.error("2");
function abcd(){
    console.log(this);
    
}
abcd();

// 3 method - obj  // a function inside the obj is called method. 
console.error("3");
let obj = {
    name: function(){
        console.log(this);
    }
}
obj.name();

// 4 fn inside method (es5) - window
console.error("4");
let obj2 = {
    name: function(){
        function child(){
            console.log(this); 
            
        }
        child();
    }
}
obj2.name();

// 5 fn inside method (es6) - object
console.error("5");
let parent = {
    name: function(){
       const child = ()=>{
        console.log(this);
        
       }
        child();
    }
}
parent.name();

// 6 constructor fn mein this is value  - blank obj or no obj
console.error("6");
function constructor(){
    console.log(this);
}
const save = new constructor();

// 7 event listner mein this is value - that element jispar event listner lga ho
console.error("7");
document.querySelector("button")
.addEventListener("click", function click(){
    console.log(this);
    
})

// this, call, apply, bind
console.error("8 this, call, apply, bind");

// prototype inhertance
console.error("9 prototype inhertance");
function makeHuman(){
}
makeHuman.prototype.gender= function gender(){
    console.log("male or female");
    
}
let human1 = new makeHuman();



// closers
console.error("10 closers");
function timer(){
    let a = 12;
    return setTimeout(() => {
        console.log(a);
    }, 2000);
}

let ans = timer();

// 

let element = document.querySelector("#parent");

element.addEventListener("click",function click(){
    console.log("works");
    
})
