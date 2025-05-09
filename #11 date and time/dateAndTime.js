let mydate = new Date();
console.log(mydate);

console.log(typeof mydate); // object

console.log(mydate.toString());  // wed sept 18 2024 10:37:19

console.log(mydate.toDateString()); // wed Sep 18 2024

console.log(mydate.toLocaleString()); // 9/18/2024, 10:37:19 AM

console.log(mydate.toLocaleDateString()); // 9/18/2024

console.log(mydate.toISOString()); // 2024-09-18T10:39:47.677Z

console.log(mydate.toJSON()); //same as top

// how to declare 

let myCreatedDate = new Date(2023, 0, 23); // month start with zero
console.log(myCreatedDate.toLocaleDateString()); // 1/23/2023


let myCreatedDate2 = new Date(2023, 0, 23, 5, 3); // month start with zero
console.log(myCreatedDate2.toLocaleString()); //

let myCreatedDate3 = new Date("2023-01-14"); // 
console.log(myCreatedDate3.toLocaleString()); // 


let myTimeStamp = Date.now();

console.log(myTimeStamp);

console.log(myCreatedDate3.getTime());

// when convert into seconds

console.log(Math.floor(Date.now()/1000));

// ---some methods---

let newDate = new Date();
console.log(newDate);
// no need full date need only day or year or min
console.log(newDate.getDate);
console.log(newDate.getMonth);
console.log(newDate.getDay); // etc

// `${newDate.getday} and the time is `

newDate.toLocaleString("default", {weekday:"long"});  // it is take obj