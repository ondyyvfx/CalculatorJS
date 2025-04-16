let currentNumber = "";
let previousNumber = "";
let operation = null;

function appendNumber(number) {
  currentNumber += number;
  updateDisplay();
}

function chooseOperation(op) {
  if (previousNumber !== "") {
    calculate();
  }

  operation = op;
  previousNumber = currentNumber;
  currentNumber = "";
  parseInt(currentNumber);
}

function calculate() {
  let result = "";

  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);

  if (operation == "+") {
    result = prev + current;
  } else if (operation == "*") {
    result = prev * current;
  } else if (operation == "/") {
    result = prev / current;
  } else if (operation == "-") {
    result = prev - current;
  } else {
    return;
  }

  currentNumber = result.toString();
  operation = null;
  previousNumber = "";
  updateDisplay();
}

function clearDisplay() {
  previousNumber = "";
  currentNumber = "";
  result = "";

  operation = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").innerText = currentNumber || "0";
}

// ПОДСКАЗКА ДЛЯ 49 строки
//    document.getElementById('display').innerText = currentNumber || '0';
