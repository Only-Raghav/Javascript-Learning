const score = 100;

if(true){
    let a = 'A';
    const b = 'B';
    var c = 'C';

}
console.log(a); // good it is not avilable
console.log(b); // good it is not avilable
console.log(c); // bad it is avilable outerside of the block

// outside of the curly braces is global scope 
// inside of the curly braces is local scope
// global scope data available in local scope but local scope data is not available in global scope

const a = "ABC";

if(true){
    let a = 'A';
    const b = 'B';
    var c = 'C';

    console.log(`inner scope ${a}`);  // A

}

console.log(`outer scope ${a}`);  // ABC

// browser scope and node enviroment scope are different scopes