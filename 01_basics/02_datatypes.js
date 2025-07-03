"use strict"; // treat all JS code as newer version

//alert(3+3) // we are using nodejs, not browser

console.log(3+3);
console.log("Hello");

let name = "radhaaa"
let age = 21
let isloggedIn = false 

/*
number => 2 to power 53
bigint 
string = ""
boolean => true/false
null => standalone value
undefined
symbol
*/

// object 
console.log(typeof age); //number
console.log(typeof undefined); //undefined
console.log(typeof null); //object

console.log(null >0);//false
console.log(null ==0);//false
console.log(null >= 0);//false

//The reason is that an equality check == and comparison ≤ work differently.
/*Comparisons convert null to a number, treating it as zero.
thats why (3) null≥0 is true and (1) null>0 is false.*/