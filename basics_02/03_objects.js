// singleton 
// constructor se banega toh humesha singleton banega

//object literals 
const mySym = Symbol("key1")
const Jsuser = {
    name: "Radha",
    age: 22,
    location : "Bijainagar",
    [mySym]: "hey", // as symbol
    email: "aggdgdg@gmail.com",
    isLoggedIn: false,
    lastLoginDay : ["Monday", "Saturday"]
}
console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser[mySym]) // for symbol

//Object.freeze(Jsuser) // to more changes are allowed 
console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Hellooooooo!");
}
console.log(Jsuser.greeting);

Jsuser.greeting2 = function(){
    console.log(`Hellooooooo, ${this.name}`);
}
console.log(Jsuser.greeting2());

Object.freeze(Jsuser) // to more changes are allowed 