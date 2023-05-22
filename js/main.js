// Calculator Logic

// Display Panel
const display = document.getElementById('calculator-display');

// Keywords
const keywords = document.querySelectorAll('.keypad-keyword');
const operators = document.querySelectorAll('.keypad-operator');

keywords.forEach(keyword => {
  keyword.addEventListener('click', function () {
    var value = keyword.textContent;
    Calculator.buttonClick(value);
  });
});

class Calculator {
  static display(value) {
    const lastValue = display.innerHTML.slice(-1)
    if (value === "." && lastValue === ".") return;
    if (value.match(/[*/+-]/)) value = ` ${value} `;

    display.innerHTML += value;
  }

  static clearDisplay() {
    display.innerHTML = "";
  }

  static calculate() {
    const result = eval(display.innerHTML);
    display.innerHTML = result.toString();
  }

  static del() {
    const currentInput = display.innerHTML;
    display.innerHTML = currentInput.slice(0, -1);
  }

  static buttonClick(value) {
    switch(value) {
      case "=":
        this.calculate();
        break;
      case "C":
        this.clearDisplay();
        break;
      case "←":
        this.del();
        break;
      default:
        this.display(value);
    }
  }
}