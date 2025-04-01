const name = "radha";
const rr= "agarwal";
console.log(name + rr);

const age = 21;
console.log(`hello i am ${name} ${age}`);

//type 2 
const gameName = new String("discord")
console.log(gameName[0]);
console.log(gameName.__proto__); //prototype
console.log(gameName.charAt(2));
console.log(gameName.indexOf("r"));

//slice
const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString)

const url ="www.wikepedia20.com";
console.log(url.replace('%20', "^^^"));