// Calculator Logic

// Display Panel
const display: HTMLElement =
document.getElementById('calculator-display');

// Keywords
const keywords: NodeList =
document.querySelectorAll('.keypad-keyword');
const operators: NodeList =
document.querySelectorAll('.keypad-operator');

keywords.forEach((keyword) => {
  keyword.addEventListener('click', () => {
    const value = keyword.textContent;
    Calculator.buttonClick(value);
  });
});

class Calculator {
  public static display(value: string) {
    display.innerHTML += value;
  }

  public static clearDisplay() {
    display.innerHTML = "";
  }

  public static calculate() {
    const result: HTMLElement = eval(display.innerHTML);
    display.innerHTML = result.toString();
  }

  public static buttonClick(value: string) {
    switch(value) {
      case "=":
        this.calculate();
        break;
      case "C":
        this.clearDisplay();
        break;
      default:
        this.display(value);
    }
  }
}