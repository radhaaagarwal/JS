function loginUserMessage(username){
    return `${username} just logged inn`
}

console.log(loginUserMessage("radha")) // prints radha just logged inn
console.log(loginUserMessage("")) // just logged inn
console.log(loginUserMessage()) // undefined just logged inn
