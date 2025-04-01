// Initialization of variables
let operator = "";
let numberClicked = "";
let operatorClicked = false;

// Activation of the numbers' buttons
function getNumbers() {
    for (let i = 0; i < document.querySelectorAll(".number").length; i++) {
        let numberElement = document.querySelectorAll(".number")[i];
    
        numberElement.addEventListener("click", function () {
            numberClicked += this.textContent;
            document.querySelector(".screen").textContent = numberClicked;
        })
    }; 
};

// Activation of the operator's buttons
function getOperators() {
    for (let i = 0; i < document.querySelectorAll(".operator").length; i++){
        document.querySelectorAll(".operator")[i].addEventListener("click", function () {
            operator = this.textContent;
            document.querySelector(".screen").textContent = operator;
            operatorClicked = true;
        });
    };
};

// Activation +/-
function negativePositiveNumber() {
    document.querySelector(".negative-number").addEventListener("click", function () {
    numberClicked = parseInt(numberClicked);
    numberClicked = numberClicked * -1;
    document.querySelector(".screen").textContent = numberClicked;
});
};

// Activation Clear
document.querySelector(".clear").addEventListener("click", function () {
    numberClicked = "";
    document.querySelector(".screen").textContent = "";
});

getNumbers();
getOperators();
negativePositiveNumber();

// Initialization of the add and subtract with the classical functions
function add(numA, numB) {
    let score = numA + numB;
    document.querySelector(".screen").textContent = score.toString();
};

function subtract(numA, numB){
    return numA - numB;
};


// Initialisation of the multiply and divide by arrow functionsc
let multiply = (numA, numB) => {
    return numA * numB;
};

let divide = (numA, numB) => {
    return numA / numB;
};

if (operatorClicked){
    if (document.querySelector(".screen").textContent == "+") {
        add(parseInt(numberClicked), parseInt(getNumbers()));
        operatorClicked = false;
    } else if (document.querySelector(".screen").textContent == "-") {
        console.log("-");
        operatorClicked = false;
    } else if (document.querySelector(".screen").textContent == "*") {
        console.log("*");
        operatorClicked = false;
    } else if (document.querySelector(".screen").textContent == "/") {
        console.log("/");
        operatorClicked = false;
    };
};

// let currentNumber = "";
// for (let i = 0; i < document.querySelectorAll(".number").length; i++) {
//     const numberElem = document.querySelectorAll(".number")[i];
//     numberElem.addEventListener("click", function() {
//         currentNumber += this.textContent;
//         document.querySelector('#result').textContent = currentNumber;
//     })
// };
