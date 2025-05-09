// Immediately Invoked Function Expressionas (IIFE) ==>> () ();

function one(){
    console.log(`DB connected`);
}

one(); // DB Connected

// when we want immediately invoke this function

(function two(){
    console.log(`DB connected`);
})(); // DB Connected

// means syntax ==>>  ()();  // (Function Defination) (Execution)
// why we use iffi ?
// gobale scope ke polluction se problem hoti hai kai bar to ush global scope ke jo variables ya data jo bhi waha diclare hai ushke polluction ko hatane ke liye hume IIFi ka use krte hai.



// it is working in all types of function but it need to stop by ;



  ( () => {
    console.log(`db connected two`);
  } ) (); // db connected two

//  parameterise invoke function

  ( (anyName) => {
    console.log(`${anyName}, db connected ` );
  } ) ("raghav");  // raghav, db connected
