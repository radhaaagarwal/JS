//falsy values 
// False, 0, -0, BigInt 0n, "", null, undefined, Nan

//truthy values 
//"0", 'false', " ", (),{}, function(){}


//Nullish Coalescing Operator (??) : Null undefined
let val1;
val1 = 5 ?? 10
val2 = null ?? 10
var1 = undefined ?? 15

console.log(val1)
console.log(val2)
console.log(var1)

// Terniary Operator 
// condition ? true : false

const iceTea = 100
iceTea <= 80 ? console.log("yum, less than 80") : console.log("areeey, more than 80")