// This message will appear in browser console
console.log("🔥 UDAY.JS IS CONNECTED!");

// Change heading and paragraph
function changeText() {

    document.getElementById("title").innerHTML =
        "JavaScript Successfully Connected!";

    document.getElementById("message").innerHTML =
        "Bhai tera JavaScript perfectly chal raha hai 🚀";
}


// Change background color
function changeColor() {

    document.body.style.backgroundColor = "lightblue";

    document.getElementById("output").innerHTML =
        "Background color changed using JavaScript!";
}


// Show current time
function showTime() {

    let currentTime = new Date();

    document.getElementById("output").innerHTML =
        "Current Time: " + currentTime.toLocaleTimeString();
}


// Click counter
let clicks = 0;

function countClick() {

    clicks++;

    document.getElementById("counter").innerHTML =
        "Clicks: " + clicks;
}


// Extra test
alert("js connected🚀");