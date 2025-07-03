/**
 * Function 3, name - age - gender ( default )
 * Print -> My name is (name) and When I was in (year) I am (x) year old.
 */

function whatever(name, age, gender = "whats"){
    let a;
    for(let i =0; i<= age; i++){
        a = 2025 - (age -i);
        console.log("My name is " +name +" and When I was in " +a+ " I am " + i +" year old. ");
    }
    
}

whatever("Radha", "22", "Female");

