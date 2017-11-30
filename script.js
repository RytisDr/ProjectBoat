let boat = document.querySelector("#boat");
let button1 = document.querySelector("#im1");
let button2 = document.querySelector("#im2");
let button3 = document.querySelector("#im3");
let button4 = document.querySelector("#im4");
let button5 = document.querySelector("#im5");
let text1 = document.querySelector("#p1");

button1.addEventListener("click", beClicked);

function beClicked() {
    document.getElementById("p1").style.display = "block";
}
text1.addEventListener("click", text1Clicked);

function text1Clicked() {
    document.getElementById("p1").style.display = "none";
}
