
// document.getElementById("count-el").innerText = 115;

// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0
let countEl = document.getElementById("count-el");
let welcomeEl = document.getElementById("welcome-el");
let saveEl = document.getElementById("save-el");

function increment() {
    count = count + 1;
    //console.log(count);
    //document.getElementById("count-el").innerText = count;
    countEl.innerHTML = count;

}

//1. Create a function, save(), which logs out the count when it's called
let logMsg = saveEl.innerHTML;
function save() {
    console.log(count);
    logMsg = logMsg + count + " - ";
    saveEl.innerHTML = logMsg;
    count = 0;
    countEl.innerHTML = count;
}


let myname = "Haris";
let greeting = " Good morning, " + myname + "!";

welcomeEl.innerHTML = greeting;

