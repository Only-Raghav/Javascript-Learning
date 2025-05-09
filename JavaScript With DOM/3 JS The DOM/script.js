// DOM 


// Access Element  // selection
// document.querySelector();


// Modifying Element // changes
// (a) textContent :- only text
// (b) innerHTML :- text with tags

// Manipulating styles and classes // changes in css
// (a) styles syntax :- Element.style.color = "red";
// (b) classes syntax :- (i) h1.classList.add("className");
//                             (ii) h1.classList.remove("className");

// creating & delete Element 
// (i) Create Element
let h1 = document.createElement("h1");
h1.classList.add("makeItRed");
h1.textContent = "heyy..!"

// (ii) Append Element
document.querySelector("body").appendChild(h1);

// (iii) Remove Element
document.querySelector("body").removeChild(h1); 
// or
h1.remove(); 

// Event Handling
let hiii = document.querySelector("#hiii")
let button = document.querySelector("#button");
button.addEventListener("click", function click(e){
    // button.textContent += ", waoo";
    hiii.style.color= "red";
    hiii.style.fontFamily="gilroy";
    hiii.style.fontSize="5rem";
    
})


let body = document.querySelector("body");

body.addEventListener("mousemove",function(e){
    console.log(e);
    
});

