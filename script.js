// Initialization of variables
let operator = "";
let numberClicked = "";
let numberClickedB = "";
let operatorClicked = false;
let resultDisplayed = false;

// Activation of the numbers' buttons
function getNumbers() {
    for (let i = 0; i < document.querySelectorAll(".number").length; i++) {
        let numberElement = document.querySelectorAll(".number")[i];

        // Reset after the result
        numberElement.addEventListener("click", function () {
            if (resultDisplayed) {
                numberClicked = "";
                numberClickedB = "";
                operator = "";
                operatorClicked = false;
                resultDisplayed = false;
                document.querySelector(".screen").textContent = "";
            }

            if (!operatorClicked) {
                numberClicked += this.textContent;
                document.querySelector(".screen").textContent = numberClicked;
            } else {
                numberClickedB += this.textContent;
                document.querySelector(".screen").textContent = numberClickedB;
            }
        });
    }
}


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
    numberClickedB = "";
    operator = "";
    operatorClicked = false;
    document.querySelector(".screen").textContent = "0";
});

getNumbers();
getOperators();
negativePositiveNumber();

// Initialization of the add and subtract with the classical functions
function add(numA, numB) {
    let score = numA + numB;
    document.querySelector(".screen").textContent = score;
    resultDisplayed = true;
};

function subtract(numA, numB){
    let score = numA - numB;
    document.querySelector(".screen").textContent = score;
    resultDisplayed = true;
};


// Initialisation of the multiply and divide by arrow functionsc
let multiply = (numA, numB) => {
    let score = numA * numB;
    document.querySelector(".screen").textContent = score;
    resultDisplayed = true;
};

let divide = (numA, numB) => {
    if (numB === 0) {
        document.querySelector(".screen").textContent = "Error division not possible";
    } else {
        let score = numA / numB;
        document.querySelector(".screen").textContent = score;
        resultDisplayed = true;
    }
};

// Calling of calculation function after pressing "="
document.querySelector(".equal").addEventListener("click", function () {

    if (operator === "+") {
        add(parseInt(numberClicked), parseInt(numberClickedB));

    } else if (operator === "-") {
        subtract(parseInt(numberClicked), parseInt(numberClickedB));

    } else if (operator === "*") {
        multiply(parseInt(numberClicked), parseInt(numberClickedB));

    } else if (operator === "/") {
        divide(parseInt(numberClicked), parseInt(numberClickedB));
    };
});