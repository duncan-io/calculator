//Declarations

let btn = document.querySelectorAll(".num");
let opr = document.querySelectorAll(".operator");
let mathArea = document.getElementById("mathArea");
let equals = document.getElementById("equals");
let answer = document.getElementById("answer");
let clear = document.getElementById("clear");
let deeleet = document.getElementById("delete");
let num1 = 0;
let num2 = 0;
let operator;
let result= 0;

//Add Numbers to display
btn.forEach(item => item.addEventListener("click", event => getNums(event.target.innerText)))
function getNums(calc){
    let previousText = mathArea.innerText;
    let newText = previousText + calc;
    mathArea.innerText = newText
}

//Add Operator

opr.forEach(item => item.addEventListener("click", event => getOpr(event.target.innerText)))

function getOpr(opr){
    let previousText = parseFloat(mathArea.innerText);
    if(result == 0){
        num1 = previousText;
    } else {
        num1 = result;
    }
    operator = opr;
    let newText = num1 + opr;
    mathArea.innerText = newText
}

//Calculate Solution and display results

equals.addEventListener("click", event => equalFunction(num1, operator));

function equalFunction (num1, operator){
    let split = mathArea.innerText.split("");
    let start = split.indexOf(operator);
    let temporary = split.slice(start+1);
    num2 = parseFloat(temporary.join(""));

    switch (operator){
        case "+":
            result = add(num1, num2);
            answer.innerText = result;
            break;
        case "-":
            result = subtract(num1, num2);
            answer.innerText = result;
            break;
        case "x":
            result = multiply(num1, num2);
            answer.innerText = result;
            break;
        case "÷":
            result = divide(num1, num2);
            answer.innerText = result;
            break;
        default:
            answer.innerText = "ERROR"
    }
}


//Clear All

clear.addEventListener("click", () => {
    mathArea.innerText = "";
    num1=0;
    num2=0;
    answer.innerText = "";
    result = 0;
});

//Delete Button
deeleet.addEventListener("click", () => {
    let math = mathArea.innerText.split("");
    math.pop();
    let newMath = math.join("");
    mathArea.innerText = newMath;
} );

//Operations

function add(a,b){
    return a + b;
}

function subtract (a,b) {
    return a - b;
}

function multiply (a,b) {
    return a*b;
}

function divide (a,b){
    return a/b;
}

