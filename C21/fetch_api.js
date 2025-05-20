//Promise - in JS

/*async function main(){
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    console.log(data);
}
main().catch(console.error);
*/

//for promises resolve
fetch("https://catfact.ninja/fact").then((c) => console.log(c)).catch((e) => console.log(e))
