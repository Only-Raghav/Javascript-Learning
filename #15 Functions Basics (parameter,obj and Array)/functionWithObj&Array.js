// inFuture in make projects & in projects we have a shoping cart 
// so in shoping cart user continously add items and we dont knows how many numbers of items are coming we just need to add all items price 
// so these situation is very common when we dont know how many arguments are coming so we ready our parameters accordingly

// rest operator (...) it convert data into array

function calculateCartPrice(...num1) {

    return num1;
}
console.log(calculateCartPrice(10));


// but we have so many arguments then 
console.log(calculateCartPrice(100,200,500,900));   //  [100,200,500,900]

// to solve this we have rest operator (rest & spread)
// after rest operator we gave a array of data

// some times  people done like this
// function calculateCartPrice(value1, value2, ...num1) {} // then value 1 take 100, value 2 take 200 and num 1 take array of data [500,900]


 // ----------<<<<>>>>------------//


// we also know about objects // how we pass object in functions


const user = {
    name: "raghav",
    price:199
}

function handleObject(anyobject){
    
 console.log(`Username is ${anyobject.name} and price is ${anyobject.price} `);    
    
}

handleObject(user);  // here we also direct pass object

// const anyboy = raghav;
// handleObject(anyboy); // here we not pass object that why type cheaking is neccesary this expersssion show a exception

// problem is when price name change into prices then it show undefined where the doller is accessing the price


     // ----------<<<<>>>>------------//


// we also know about arrays // how we pass arrays in functions

const myArray = [200,400,100,600]; // then make function who support or take arrays

function handleArray(getArray){ 
    
    // return second value
    return getArray[1];
}

console.log(handleArray(myArray)); // also we pass array directly