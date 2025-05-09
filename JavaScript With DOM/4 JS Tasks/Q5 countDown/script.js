let count = document.querySelector("#count");

let start = document.querySelector("#start");
let pause = document.querySelector("#pause");
let clear = document.querySelector("#clear");


let interval;

start.addEventListener("click", function(){
    if(count.innerHTML == 0){


    let num = 0;
    console.log("click");
    
    interval=setInterval(function(){
        count.innerHTML=num;
        num++;
        
    },1000);
}

});

pause.addEventListener("click", function(){

    if(pause.innerHTML === "pause"){
        clearInterval(interval);
        if( count.innerHTML > 0){
            pause.innerHTML="play";
        }
        

    }
    else{
        pause.innerHTML="pause";
        let num = count.innerHTML;
        num++;
    interval=setInterval(function(){
        count.innerHTML=num;
        num++;
        
    },1000);
    }

    
});

clear.addEventListener("click", function(){
    clearInterval(interval);
    count.innerHTML=0;
    pause.innerHTML="pause";

});




