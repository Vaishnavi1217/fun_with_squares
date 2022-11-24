var sideInput = document.querySelector("#side")
var calculateDiagonalBtn = document.querySelector("#button")
var outputDiv = document.querySelector("#output-div")

function calculateArea(side){
    var diagonal = Math.sqrt(2)*side
    return diagonal;
}
function clickHandler(){
    var diagonal = calculateArea(Number(sideInput.value))
    // console.log(diagonal)
    outputMsg("Diagonal of the square with side " + sideInput.value +" is " + diagonal);
}

function outputMsg(msg){
    outputDiv.innerText=msg;
}

calculateDiagonalBtn.addEventListener("click",clickHandler)
// console.log(calculateArea(5))