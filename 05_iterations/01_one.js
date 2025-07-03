// for loop
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
}

//command + d - sab same variable walo ko pick

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop : ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner loop : ${j}`);
        console.log(i + '*' +j +'=' + i*j); // to print table 
    }  
}

// break 
for (let index = 0; index <= 20; index++) {
    if(index== 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`);
    
}

//continue 
for (let index = 0; index <= 20; index++) {
    if(index== 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
    
}