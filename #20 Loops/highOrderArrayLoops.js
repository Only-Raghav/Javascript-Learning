// for of loop

// ["", "", ""], string and
// [{}, {}, {}]  arrays specific

const arr = [10,20,30,40];

for (const num of arr) {

    console.log(num);
    
}


const greatings = "hello raghav"

for (const great of greatings) {

    console.log(great);

}



// Maps  Map is a object holds key value pairs and remembers the original insertation order of the key
// here is no duplicate values very key is unique

const map = new Map();
map.set("in", "india");
map.set("usa", "united state of america");
map.set("fr", "france");

console.log(map);

// for of loop on map return Array of key and value pairs

for (const key of map) {

    console.log(key); // key and value pair but we want only key
    
}

// De-structure of array is nor return array 

for (const [key, value] of map) {

    console.log(key, ":-",  value); 
    
}

// if we have object when for of loop :- not working in obj

const myObj = {
    "game1": "cod",
    "game2": "pubg"
}

// for (const [key, value] of myObj) {

//     console.log(key, ":-",  value);  // error it is not itratable
    // for this issue we have for in loop 
// }



//  for in loop

for (const keys in myObj) {

    console.log(keys);  // keys
    console.log(myObj[keys]);  // values

    
}

// kya for in loop arrays par use kr skte hai



const arr2 = [10,20,30,40];

for (const value of arr2) {
    console.log(value);
    console.log(arr2[value]);

    
}

// for in loop in maps 


for (const key in map) {

    console.log(keys); // nothing because Map is not ittratable
    
}



// for each loop :- it is higer order function

const arr3 = [10,20,30,40];

arr3.forEach( function (item) { // callback function //callback fn has no name

    console.log(item);
}); 

// arrow function
arr3.forEach( (item) => { // callback function //callback fn has no name

    console.log(item);
}); 

// passing a function in foreach loop
function printMe(item){
    console.log(item);
}

arr3.forEach(printMe);

// it has more access
arr3.forEach( (item, index, arr) => { // callback function //callback fn has no name

    console.log(item, index, arr);
}); 


// common sinario

const mydata = [
    {
        language: "hindi",
        country : "india"

    },
    {
        language: "english",
        country : "usa"

    },
    {
        language: "russian", // noty hora katai
        country : "russia"

    }
]

mydata.forEach( (item) => { 
    console.log(item.language);
} )

