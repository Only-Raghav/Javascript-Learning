// scope leveling or nasted scope & mini hostingn & glocers

function one() {
    const userNAme = "raghav";

    function two() {
        const wepsite = "github";
        console.log(userNAme);
    }
    console.log(wepsite); //  wepsite is not accessable

    two(); // execute one 

}

one(); // raghav


if(true) {
    const userName = "raghav";
    
    if (username === "raghav"){
        const wepsite = "github";
        console.log(userName+wepsite);   
    }
    console.log(wepsite); //  wepsite is not accessable

}

console.log(userName); //  userName is not accessable



