var color1 = document.getElementById("input1");
var color2 = document.getElementById("input2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");


function backgroundStyle() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}
color1.addEventListener("input", backgroundStyle);

color2.addEventListener("input", backgroundStyle);
