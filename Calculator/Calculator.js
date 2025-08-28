let number = [0, 0];
let temp = 0;
let i = 0;
var operand;
var result;

function addition(a, b) {
    result = a + b; 
}

function substraction(a, b) {
    result = a - b;
}
function multiplication(a, b) {
    result = a * b;
}

function devision(a, b) {
    if (b === 0) {
        document.getElementById("Screen").style.fontSize = "25px";
        document.getElementById("Screen").innerText = "Error - Division by zero";
        return;
    }
        result = a / b;
}
function modulus(a, b) {
    if (b === 0) {
        document.getElementById("Screen").style.fontSize = "25px";
        document.getElementById("Screen").innerText = "Error - Division by zero";
        return;
    }
    result = a % b;
}

function operakey(oper) {
    operand = oper;
    document.getElementById("Screen").value = operand;
    if (temp == 0) {
        i++
    }
    temp++;
}

function execute() {
    if ( operand === "+") {
        addition(number[0], number[1]);
    }
    else if ( operand === "-") {
        substraction(number[0], number[1]);
    }
    
    else if ( operand === "*") {
        multiplication(number[0], number[1]);
    }
    else if ( operand === "/") {
        devision(number[0], number[1]);
    }
    else if ( operand === "%") {
        modulus(number[0], number[1]);
    }
    else {
        result = "Error - Invalid operation";
    }

    document.getElementById("Screen").value = result;

    number = [0, 0];
    temp = 0;
    i = 0;
    operand = undefined;
    result = undefined;

}

function numkey(numberkey) {
    if (number[i] >= 100000000000) {
        document.getElementById("Screen").style.fontSize = "25px";
        document.getElementById("Screen").value = "Error - Too large number";
        return;
    }
    number[i] = number[i] * 10 + numberkey;
    document.getElementById("Screen").value = number[i];

}

function decikey() {

}