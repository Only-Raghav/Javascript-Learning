// for control loop flows we have two key words

// -------->>>>break and continue <<<<----------//


// break :- break the loop
for (let i=0; i<=20; i++) {
if(i == 5){
    console.log(" 5 is detected");
    break;
}

    console.log(`vale of i is ${i}`);
}


// continue :- just skip the single ittration and continue our loops 
for (let i=0; i<=20; i++) {
    if(i == 6){
        console.log(" 5 is detected");
        continue;
    }
    
        console.log(`vale of i is ${i}`);
    }