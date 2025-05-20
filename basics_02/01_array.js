//array

const myArray = [0,1,2,3]
const Name = ["radha", "ayushi", "neelakshi", "abhima"]

const myAr2 = new Array(1,2,3,4,65)
console.log(myArray[1]);

//array methods

myArray.push(6);
console.log(myArray);
myArray.pop()
console.log(myArray);

myArray.unshift(9) // add to front
console.log(myArray);

myArray.shift(); //remove the first
console.log(myArray);

console.log(myArray.includes(9));
console.log(myArray.indexOf(2));


//slice and splice 
const myArray1 = [0,1,2,3]
console.log("A", myArray1)

const myn1 = myArray1.slice(1,3)

console.log(myn1);
console.log("B", myArray1);

//splice
const myn2 = myArray1.splice(1,3)
console.log("C", myArray1);
console.log(myn2);

