/*

what is object ? how ojects declare ?

objects are declared by two types (1) Literal (2) Constructor

singleton :- when we create object by constructor it is singleton obj mtlbki yeh apne trha ka ek he object hai
agar dushri trha se bnate hai to wo singleton nhi hota ushke multiple instances an jate hai it is callad literals 

*/
// one ways to create a obj 
// Object.create(); it is constructor based or singleton 

// (1) objects literals
const jsUser = {
    name: "raghav",    // in key :- by default system render this "name" also we write here 0
    age: 22,
    location: "raghav@google.com",
    isLoogedIn: false,
    lastLogginDays: ["monday", "saturday" ]
}

// Now how to access obj => we have two diffent ways 

// (1) way
 console.log(jsUser.email); // raghav@google.com

//  (2) way
 console.log(jsUser["email"]); // raghav@google.com
//    why we need to learn know about second way because => 
//    here is no way to access this full name

    const jsUser2 = {
        "full name": "raghav",    // in key :- by default system render this "name" also we write here 0
        age: 22,
        location: "raghav@google.com",
        isLoogedIn: false,
        lastLogginDays: ["monday", "saturday" ]
    }
    console.log(jsUser["full name"]);  // raghav
    
    // symbol declaration and acces and object

    const mySym = Symbol("key");

    const jsUser3 = {
        "full name": "raghav",    
        age: 22,
        location: "raghav@google.com",
        isLoogedIn: false,
        lastLogginDays: ["monday", "saturday" ],
        [mySym]: "myKey1"
    }
    console.log(jsUser.mySym);  // myKey1 but this is not symbol type if we check typeof
    console.log(typeof jsUser.mySym);  // String 

    console.log(jsUser[mySym]); // myKey


    // how values change
jsUser.email = "raghavji@microsoft.com";

// if we mant no one can change our obj jata then freeze object 

Object.freeze(jsUser); // now nothing change by other in our obj example =>

    jsUser.email = "rahul@chat.gpt.com";
    console.log(jsUser);  // othing change in obj


// add function in our obj  


jsUser.greetings = function() {
    console.log("hello user");
}
console.log(jsUser.gretings); // [function (anomous)] function is not excecuted comes only function refer
console.log(jsUser.gretings());  // hello users


jsUser.greetingsTwo = function() {
    console.log(`hello user, ${this.name}`);
}
console.log(jsUser.gretingsT()); // hello user
console.log(jsUser.gretingsTwo());  // hello users, raghav













