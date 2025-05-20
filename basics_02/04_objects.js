const tinderUser = new Object() // singelton object
const tinderUser2 = {} // non singleton object

tinderUser2.id = "123abc"
tinderUser2.name = "Raa"
tinderUser2.isLoggedIn = false

//console.log(tinderUser2);

const regularUser = {
    email: "somememeemem",
    fullname: {
        userfullname:{
            firstname: "radha",
            lastname: "agarwal"
        }
    }
}
//console.log(regularUser.fullname.userfullname)

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "a", 5: "b", 6: "c"}
//const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)