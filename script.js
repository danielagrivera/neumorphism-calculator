var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");
    Array.prototype.forEach.call(buttons, function(button) {
        button.addEventListener("click", function() {
            if (button.textContent != "%" &&
            button.textContent != "log" &&
            button.textContent != "x!" && 
            button.textContent != "e" && 
            button.textContent != "ln" && 
            button.textContent != "x²" && 
            button.textContent != "|x|" && 
            button.textContent != "sin" && 
            button.textContent != "x^" && 
            button.textContent != "deg" && 
            button.textContent != "cos" && 
            button.textContent != "√" && 
            button.textContent != "rad" && 
            button.textContent != "tan" && 
            button.textContent != "π" && 
            button.textContent != "AC" && 
            button.textContent != "CE" && 
            button.textContent != "/" && 
            button.textContent != "*" 
            && button.textContent != "=") {
                display.value += button.textContent;
            } else if (button.textContent === "%") {
                percent();
            } else if (button.textContent === "log") {
                log();
            } else if (button.textContent === "x!") {
                factorial();
            } else if (button.textContent === "e") {
                exp();
            } else if (button.textContent === "ln") {
                ln();
            } else if (button.textContent === "x²") {
                square();
            } else if (button.textContent === "|x|") {
                absoluteValue();
            } else if (button.textContent === "sin") {
                sin();
            } else if (button.textContent === "x^") {
                exponent();
            } else if (button.textContent === "deg") {
                degrees();
            } else if (button.textContent === "cos") {
                cos();
            } else if (button.textContent === "√") {
                squareRoot();
            } else if (button.textContent === "rad") {
                radians();
            } else if (button.textContent === "tan") {
                tan();
            } else if (button.textContent === "π") {
                pi();
            } else if (button.textContent === "CE") {
                clearEntry();
            } else if (button.textContent === "AC") {
                allClear();
            } else if (button.textContent === "/") {
                divide();
            } else if (button.textContent === "*") {
                multiply();
            } else if (button.textContent === "=") {
                equals();
            }
        });
    });

function syntaxError() {
    if (eval(display.value) == SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError) {
        display.value = "Syntax Error";
    }
}
function equals() {
    if ((display.value).indexOf("^") > -1) {
        var base = (display.value).slice(0, (display.value).indexOf("^"));
        var exponent = (display.value).slice((display.value).indexOf("^") + 1);
        display.value = eval("Math.pow(" + base + "," + exponent + ")");
    } else {
        display.value = eval(display.value)
        checkLength()
        syntaxError()
    }
}

function allClear() {
    display.value = "";
}

function clearEntry() {
    display.value = display.value.substring(0, display.value.length - 1);
}

function multiply() {
    display.value += "*";
}

function divide() {
    display.value += "/";
}

function plusMinus() {
    const inputValue = parseFloat(display.value);

    if (!isNaN(inputValue)) {
        display.value = -inputValue;
    } else {
        display.value = "Invalid Input";
    }
}

function factorial() {
    var number = 1;

    if (display.value === 0) {
        display.value = "1";
    } else if (display.value < 0) {
        display.value = "undefined";
    } else {
        var number = 1;
        for (var i = display.value; i > 0; i--) {
            number *=  i;
        }
        display.value = number;
    }
}

function pi() {
    const inputValue = parseFloat(display.value);
    if (!isNaN(inputValue)) {
        display.value = inputValue * Math.PI;
    } else {
        display.value = "Invalid Input";
    }
}

function square() {
    const inputValue = parseFloat(display.value);
    if (!isNaN(inputValue)) {
        display.value = inputValue * inputValue;
    } else {
        display.value = "Invalid Input";
    }
}

function squareRoot() {
    const inputValue = parseFloat(display.value);
    if (!isNaN(inputValue) && inputValue >= 0) {
        display.value = Math.sqrt(inputValue);
    } else {
        display.value = "Invalid Input";
    }
}

function percent() {
    const inputValue = parseFloat(display.value);
    if (!isNaN(inputValue)) {
        display.value = inputValue / 100;
    } else {
        display.value = "Invalid Input";
    }
}

function sin() {
    const inputValue = parseFloat(display.value);
    if (!isNaN(inputValue)) {
        display.value = Math.sin(inputValue);
    } else {
        display.value = "Invalid Input";
    }
}

function cos() {
    const inputValue = parseFloat(display.value);
    if (!isNaN(inputValue)) {
        display.value = Math.cos(inputValue);
    } else {
        display.value = "Invalid Input";
    }
}

function tan() {
    const inputValue = parseFloat(display.value);
    if (!isNaN(inputValue)) {
        display.value = Math.tan(inputValue);
    } else {
        display.value = "Invalid Input";
    }
}

function log() {
    const inputValue = parseFloat(display.value);
    if (!isNaN(inputValue) && inputValue > 0) {
        display.value = Math.log10(inputValue);
    } else {
        display.value = "Invalid Input";
    }
}

function ln() {
    const inputValue = parseFloat(display.value);
    if (!isNaN(inputValue) && inputValue > 0) {
        display.value = Math.log(inputValue);
    } else {
        display.value = "Invalid Input";
    }
}

function absoluteValue() {
    const inputValue = parseFloat(display.value);
    if (!isNaN(inputValue)) {
        display.value = Math.abs(inputValue);
    } else {
        display.value = "Invalid Input";
    }
}

function exponent() {
    display.value += "^";
}

function exp() {
    display.value = Math.exp(display.value);
}

function radians() {
    display.value = display.value * (Math.PI / 180);
}

function degrees() {
    display.value = display.value * (180 / Math.PI);
}