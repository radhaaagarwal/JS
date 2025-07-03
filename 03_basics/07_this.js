const user = {
    username : "radha",
    price : 777,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome here`)
        //console.log(this) // talks about current context 
    }

}
user.welcomeMessage()