const coading = ["js", "ruby", "java", "puthon", "cpp"]
// what is i want to store  this experssion into a variable
// :- foreach is not return any value

const values = coading.array.forEach((item) => {

    console.log(items); // js, rupby.....

    
});

console.log(values); // undefine

// in return case we have 


// ----------------------->>>><<<<<<<<----------------------------//


// filture() // callback // it return value any value is array type


const myNum = [1,2,3,4,5,6,7,8,9,10];

const nums = myNum.filter( (num) => num > 4 );
console.log(nums); // [5,6,7,8,9,10]

// if we use curly braces {} // then we get empty array
// scope start so use return keyword
const nums2 = myNum.filter( (num) => {
    return num > 4;
} );
console.log(nums); 

// i want to use this in foreach than

const newArr = [];

myNum.forEach( (num) => {
    if(num>4){
        newArr.push(num);
    }
});

console.log(newArr); // as output as filture



// ----------------------->>>><<<<<<<<----------------------------//



//map // call back function


// add 10

const newNums = myNum.map( (num) => (num+10) );
console.log(newNums); [11,12,...]




// chaining // mop().map() or map().filture()

const newNumber = myNum
                          .map((num) => (num*10))
                          .map((num) => (num+1))
                          .filter((num)=>(num+10));
console.log(newNumber); // [11,12.....]


// ----------------------->>>><<<<<<<<----------------------------//


// reduce() method


const total = myNum.reduce((acc, currValue) => {
    console.log(`acc: ${acc}, currval: ${currValue}`);
    return acc + currValue;
}, 0);

console.log(total);


// task :- add all prices in shoping cart 

const shopingCart = [
    {price: 99},
    {price: 199},
    {price: 299}
];

const myCartTotal = shopingCart.reduce((acc, items) => (acc + item.price), 0);

console.log(mycartTotal);


