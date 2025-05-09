// console prototypes methods

const marval = ["deadpool", "venom", "ironman"];
const dc = ["superman", "flash", "batman"];

// push() 

marval.push(dc);
console.log(marval); // ["deadpool", "venom", "ironman", ["superman", "flash", "batman"] ];
// probelm array ke ander array aagya // array koi bhi data le leta hai
// for access dc index 0 =>
console.log(marval[3][0]); // superman



// concat()   // add two or more arrays and return new array

const allheros = marval.concat(dc);

console.log(allheros); // ["deadpool", "venom", "ironman", "superman", "flash", "batman" ];


// spread [...]operator // must better than concat

const Allheros2 = [...marvel, ... dc]
console.log(allheros); // ["deadpool", "venom", "ironman", "superman", "flash", "batman" ];


// flat( how much dept)
const anotherArray = [1, 2, ,3, [4, 5, 6], 7, [4,5], 8];
const real_anotherArray = anotherArray.flat(Infinity);
console.log(real_anotherArray); // [1,2,3,4,5,6,7,4,5,8]


// data scraping // whenever we select any data from any wepsite data comes in diffrent   format like nodelist, obj, string but we wamt array then =>

console.log(Array.isArray("raghav")); // false // it is not array

Array.from() // it converts into array

console.log(Array.from("raghav")); // ['r', 'a', 'g', 'h', 'a', 'v'] 


// one intrusting case is when 

console.log(Array.from({name: "raghav"})); // [] // here define or tell key or value  kiska array bnana hai warna empty array milega

let score1 = 100;
let score2 = 200;
let score3 = 300;

// Array.of() return new array from set of elements

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]

















