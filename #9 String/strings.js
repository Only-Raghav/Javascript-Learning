//       concatination

// old method
const name = "raghav"; // String Declaration
const repoCount = 50;
console.log(name + repoCount + " value"); // raghav50 value
console.log(name);

// //new method :- string intapolation
console.log(`my name is ${name} and my score is ${repoCount}`);

// one more way to declare string using new keyword 
const anotherName = new String("raghav-ji");
console.log(anotherName);  // here string is obj

// in prototype we have so many methods in js 
//task is study all the methods in string


// --------------some methods------------------------//

console.log(anotherName.__proto__); // object but it is not empty in browser console we have so many methods

// method ( key value by index )
console.log(anotherName[0]);

// length()
console.log(anotherName.length);

// toUppercase()
console.log(anotherName.toUpperCase());

// toLowerCase()
console.log(anotherName.toLocaleLowerCase());

// charAt()
console.log(anotherName.charAt(2));

// indexOf()
console.log(anotherName.indexOf('v'));


// .substring(start index, last index)
const newString = anotherName.substring(1,4); 
console.log(newString);
console.log(anotherName);
console.log(); // where last index is not included here we give negitive values also


// .slice(start index, last index)
const anotherString = anotherName.slice(0,4);
console.log(anotherString);
console.log(anotherName);
console.log(name); // where last index is not included here we give negitive values also


// trim();
const newStringOne = "   raghav  ";
console.log(newStringOne.trim());

//replace();
const url = "https://raghav.com/raghav%20choudhary";
console.log(url.replace('%20', '-'));

//includes();
console.log(url.includes('raghav')); 

//split();
const anotherName2 = new String("raghav-ji-raghav");
console.log(anotherName2.split('-')); // return array accordinglly split
