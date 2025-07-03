function add(num1, num2){
    console.log(num1 +num2)
}

add(1,2)
const Result = add(1,2)
console.log(Result) // undefined here 

//----*how to print result value----*//
function add2(num1, num2){
    let Result2 = num1 +num2
    return Result2
}
const Result2 = add2(3,4)
console.log("Result - ", Result2)