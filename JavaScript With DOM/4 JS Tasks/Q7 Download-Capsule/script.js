let mover = document.querySelector("#mover");

let h3 = document.querySelector("h3");


    let count = 0;
    let int = setInterval(function(){
        if(count === 100){
            clearInterval(int);
            h3.style.opacity=1;
        }
        count++;
        mover.style.width = count+"%";
    },50);


