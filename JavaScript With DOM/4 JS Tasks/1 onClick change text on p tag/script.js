
let text = document.querySelector(".para");
let btn = document.querySelector(".btn");
btn.addEventListener("click",function(){
    if(text.textContent = "Q1. onclick change in text on paragraph tag."){
        return;
    }
    text.textContent += " onclick change in text on paragraph tag."
});