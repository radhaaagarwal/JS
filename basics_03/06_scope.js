// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // can be called here as well as later

function addone(num){
    return num + 1
}



addTwo(5) // can not be declared here 
const addTwo = function(num){
    return num + 2
}

addTwo(5) //allowed to call here 