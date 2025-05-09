let list = document.querySelector("#list");

let input = document.querySelector("#input");

let add = document.querySelector("#add");

let remove = document.querySelector("#remove");



add.addEventListener("click",function(){
    if(input.value===""){
        console.log("pls enter item name");
        
        
    }else{
    const listItem = document.createElement("li");
    listItem.textContent=input.value;
    list.appendChild(listItem);
    input.value="";
    }
    
});

remove.addEventListener("click",function(){
    if(input.value===""){
        console.log("error");
        
    }
    else{
        let li = document.querySelectorAll("li");
        
        // console.log(li.length);

        for(let i=0; i<li.length; i++){
            
             if(li[i].innerText === input.value){
                list.removeChild(li[i]);
                input.value='';
                
            }
            else{
                console.log("invalid entered name "+input.value+" is not available in list ");
                
                     
            }

        }
        
        
    }

});






