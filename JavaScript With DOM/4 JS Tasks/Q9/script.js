

let scrol = document.querySelector(".scroll");


  
  document.addEventListener('scroll', function(){
    console.log("------------------------");
    
    const scrollTop = document.documentElement.scrollTop;
    console.log(document.documentElement.scrollTop);
    console.log(document.documentElement.scrollHeight);
    console.log(document.documentElement.clientHeight);

    console.log("------------------------");
 


    
    

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (scrollTop / height) * 100;

    scrol.style.width = scrolled + '%';

  });


  