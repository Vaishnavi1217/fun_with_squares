var quizForm = document.querySelector("#quiz-form");
var submitBtn = document.querySelector("#button");
var outputDiv = document.querySelector("#output-div");

const answers=["16","6400","8","90°","4"]

function scoreCalculator(){
    let score = 0;
    let index = 0;
    var resultStore = new FormData(quizForm)
    for(let value of resultStore.values()){
        if(value===answers[index]){
            score=score+1;
        }
        index=index+1;
    }
    if(score<3){
        printResult("Your score is " + score + "!Practice more.")
    }
    else if(score<=5){
        printResult("Your score is " + score + "!Machaya!Decent score.")
    }
}
function printResult(msg){
    outputDiv.innerText=msg
}
submitBtn.addEventListener("click",scoreCalculator)