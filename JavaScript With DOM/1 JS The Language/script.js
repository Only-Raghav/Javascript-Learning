var a = 12;
var b = 23;
console.log("hey"+ a);

// console, alert, promt 
//console
console.log("console.log :- msg");
console.warn("console.warn :- warning");
console.error("console.error :- error");

//alert
alert("hiii... developer");

//promt
var dev =prompt("are you a developer ?");
console.log("we have a developer "+ dev);

// data types


// spread operator
console.warn("spread operator");
var arr = [1,2,3];
var arr2 = [...arr];
arr2.pop();
console.log(arr);
console.log(arr2);



//conditional :- if else , ternory operator, switch case
console.warn("conditional statement");
if(true){
    console.log("true");
}
else{
    console.log("false");
}



// loops  :- for, while, foreach
console.warn("loops");
for(let i=0; i<=10; i++){
    console.log(i);
}

let i =11;
while(i<=20){
    console.log(i);
    i++;
}

console.error("forEach loops");
let array = [21,22,23,24,25];
array.forEach((e)=> console.log(e));

// sum all member of an array
console.error("arrays");
console.error("sum of an array using forEach");
let sum=0;
array.forEach((e)=>{
    sum= sum+e;
});
console.log(sum);




