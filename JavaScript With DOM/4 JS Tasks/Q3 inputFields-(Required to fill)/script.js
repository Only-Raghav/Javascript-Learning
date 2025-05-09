let form = document.querySelector("form");

let ipts = document.querySelectorAll('input[type="text"]');

// let ipt1 = document.querySelector("#ipt1");
// let ipt2 = document.querySelector("#ipt2");

let h4 = document.querySelector("#error");


form.addEventListener("submit",function(e){
    e.preventDefault();
    const obj={}
    
    for(let i=0; i<ipts.length; i++){
    
        if(ipts[i].value.trim()===''){
            
            h4.textContent="error, some fields are blank";
            h4.style.color="red";
            break;
        }
        else if(ipts[i].value.trim() !==''){
           let key=ipts[i].name;
            obj[key]=ipts[i].value;
            
            if(ipts.length-1 == i){
                
                h4.textContent="";
                h4.style.color="black";
                console.log(obj);
            }

        }
       
    }
   
});