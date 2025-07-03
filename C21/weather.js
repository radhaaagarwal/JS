import axios from "axios";

/*async function callApi() {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random")
    console.log(response.data.message)
    console.log(response.data.message.length)
}

callApi();
*/

/**
 *  You have to make a function that take Location (city/town/state). 
 *  Show -> Location ( temperature )
 *  You have to use axios only
 *  Find your own API and API KEY
 */

async function weatherApi(location){
    const apiKey = "f4f6b5b9cd44454597a165442251904";
    const url1 = "http://api.weatherapi.com/v1/current.json?key="+apiKey+ "&q="+ location;
    const response = await axios.get(url1);
    console.log(response.data.current.temp_c);
}
weatherApi("Jaipur, India")