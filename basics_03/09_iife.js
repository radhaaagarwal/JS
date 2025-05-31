// Immediately Invoked Function Expressions (IIFE)

//first paranthesis () => function ki defination  
// second parathesis () => execution 

//Global scope ke pollution ko avoid karne ke liye iife use karte hai

(function chai(){
    console.log("connected")
})();

( () => {
    console.log("dissss")
})();


( (name) => {
    console.log(`my name is ${name}`)
})("radha");
