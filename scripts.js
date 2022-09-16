let btn = document.querySelectorAll(".num");
let opr = document.querySelectorAll(".operator");
let mathArea = document.getElementById("mathArea");
let equals = document.getElementById("equals");
let answer = document.getElementById("answer");
let clear = document.getElementById("clear");
let deeleet = document.getElementById("delete");

//Add Numbers
btn.forEach(item => item.addEventListener("click", event => getNums(event.target.innerText)))
function getNums(calc){
    let previousText = mathArea.innerText;
    let newText = previousText + calc;
     mathArea.innerText = newText
}

//Add Operator

opr.forEach(item => item.addEventListener("click", event => getOpr(event.target.innerText)))

function getOpr(opr){
    let previousText = mathArea.innerText;
    let newText = previousText + opr;
     mathArea.innerText = newText
}

//Calculate Solution

equals.addEventListener("click", event => equalFunction(mathArea.innerHTML));

function equalFunction (numsToCalc){
    let split = numsToCalc.split("");
    console.log(split)
}


//Clear All

clear.addEventListener("click", () => mathArea.innerText = "" );

//Delete Button
deeleet.addEventListener("click", () => {
    let math = mathArea.innerText.split("");
    math.pop();
    let newMath = math.join("");
    mathArea.innerText = newMath;
} );