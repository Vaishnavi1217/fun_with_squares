var sideInput = document.querySelector("#side")
var calculateAreaBtn = document.querySelector("#button")
var outputDiv = document.querySelector("#output-div")

function calculateAreaOfSquare(s){
    var area = s*s;
    return area;
}
function clickHandler(){
    var area = calculateAreaOfSquare(Number(sideInput.value))
    // console.log(area)
    output("Area of the Square for the given side is : " + area + " Sq.units")
    // outputDiv.innerText="Area of the Square for the given side is : " + area + " Sq.units"
}
function output(msg){
    outputDiv.innerText=msg;
}
calculateAreaBtn.addEventListener("click",clickHandler)