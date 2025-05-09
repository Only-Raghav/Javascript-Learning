let texts = document.querySelectorAll("#texts");

let tabs = document.querySelectorAll("#tab");

texts[0].style.display="block";
texts[0].style.width="50%";


tabs.forEach(function(tab,index){
    tab.addEventListener("click",function(){
        console.log(tab);
        hideAllTexts();
        texts[index].style.display="block";
        texts[index].style.width="50%";

        

        
    });
    
})



function hideAllTexts() {

    texts.forEach(function(text){

        text.style.display="none";
        text.style.width="50%";
            
        
        });
    
}

