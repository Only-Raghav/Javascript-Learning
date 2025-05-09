let people = document.querySelector(".people");

let input = document.querySelector(".input");

let datas =[ {name:"sofia", src:"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"sofy", src:"https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"sonali", src:"https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"raghu", src:"https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"ragni", src:"https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"saurabh", src:"https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]

let element = "";
datas.forEach(function(data){

   element += `<div class="person">
    <div class="img">
        <img src=${data.src}>
    </div>
    <h4>${data.name}</h4>
</div>` ;


    people.innerHTML = element;


});




input.addEventListener("input",function(){
    console.log("1");
    let newData = datas.filter(function(data){
        return data.name.startsWith(input.value)
    });
    console.log(newData);

    console.log("2");
    let newElements = "";
    newData.forEach(function(data){

    newElements += `<div class="person">
    <div class="img">
        <img src=${data.src}>
    </div>
    <h4>${data.name}</h4>
</div>` ;
console.log(newElements);

    people.innerHTML = newElements;
    


});
if(newElements===""){
    people.innerHTML = newElements;


    }

});
   
    
