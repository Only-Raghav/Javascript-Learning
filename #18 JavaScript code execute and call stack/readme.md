// JavaScript code execute and call stack

how code execute in javascript and how call Stacks are execute ?

# javaScript execution contect :- how js run our js file // for run the program js run our file in two phases. 

(1) first always created a Global execution contect under this 

# here sabka global context alag hota hai lakin sabse jada browser ka context important hota hai ushke ander this is value Windows aati hai.
# it all execute in a thread and js is single threaded.

(1) Global Execution Contect    
(2) Function Execution Contect
(3) Eval Execution Contect

# how js code run in two phases ?
# (1) Memory Creation Phase or Creation Phase 
:- here in memory creation phase only memory is allocatred for your variables and all the data you diclare in your code
# (2) Execution Phase
:- and after that all operation you done in your program these all the thing happend in Execution phase.

# code file :- 
# let val 1 = 10;
# let val 2 = 5;
# function addNum(num1, num2) {
# Let total = num1 + num2;
# return total;
# }
# let result1 = addNum(val1, val2);
# let result2 = addNum(10,2);

Cycle 1

step 1 :- always firstly global execution context under this

step 2 :- memory phase

# val1 = undefined
# val2 = undefined
# addNum = function defination
# result1 = undefined
# result2 = undefined

Cycle 2

step 3 :- execution phase

# val1 = 10
# val2 = 5
# addNum =  ------ nothing work
# result1 = addNum // here one more executional context is ready  ( new variable environment -
# result2 = addnum // here one more executional context is ready   -and + execution thread )

// jitni bar yeh functions execute hote hai utni bar ek box creat hota hai jisko bolte hai new executional context and ishke ander kya hota hai :- variable ke alag se enviroment ka sand box bnaya jata hai aur ek execution thread bhi apke liye bnaya jata hai jisse apka sara execution hota hai.
lakin ab ish box ke lye do kam phire honge (1) memory phase (2) execution phase

now the box is created for addNum();

Cycle 1

step 1 :- memory phase

# val1 = undefined
# val1 = undefined
// one more imp thing it is created for Function defination 
total = undefined

Cycle 2

step 3 :- execution phase

# num1 => val1 = 10
# num2 => val2 = 5
# total = 15
// here total is return 
// where it is return 
// it return its global executional context or parent executional context
// after done his all work this new new executional context is delete

# result1 = 15

for result2 = all repeatation


call stack =>
(1)global execution context
(2) one() when execute => top of global context => after done his work it deleted
// one more thing when we call function under function
 then Lifo( last in first out ) is working 





