const display = document.querySelector(".output-value");
const buttons = document.querySelectorAll(".key");

let currentNumber = "";
let prevNumber = null;
let operator = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (/\d/.test(value)) {
      if (currentNumber.length <= 11) {
        currentNumber += value;
      }
      display.textContent = currentNumber;
    } else if (value === `.`) {
      currentNumber += `.`;
      display.textContent = currentNumber;
    } else if (value === `RESET`) {
      currentNumber = "";
      prevNumber = null;
      operator = null;
      display.textContent = currentNumber;
    } else if (value === `Del`) {
      currentNumber = currentNumber.slice(0, -1);
      if (currentNumber === ``) {
        prevNumber = null;
        operator = null;
      }
      display.textContent = currentNumber;
    } else if (value === `=`) {
      if (prevNumber === null || operator === null) {
        return;
      }
      let result;
      switch (operator) {
        case `+`:
          result = prevNumber + parseFloat(currentNumber);
          break;
        case `-`:
          result = prevNumber - parseFloat(currentNumber);
          break;
        case `x`:
          result = prevNumber * parseFloat(currentNumber);
          break;
        case `/`:
          if (parseFloat(currentNumber) === 0) {
            result = "Error:Division by Zero";
          } else {
            result = prevNumber / parseFloat(currentNumber);
          }
          break;
        default:
          break;
      }
      display.textContent = result;
      currentNumber = result.toString();
      prevNumber = null;
    } else {
      prevNumber = parseFloat(currentNumber);
      currentNumber = ``;
      display.textContent += ` ` + value;
      operator = value;
    }
  });
});
//for changing themes
const links = document.querySelectorAll("link");
console.log(links);
const ChangeTheme = (i) => {
  if (i === 1) {
    links[2].href = "";
  } else {
    links[2].href = `./css/theme${i}.css`;
  }
};
const ThemeBtns = document.querySelectorAll("input");
ThemeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    ChangeTheme(btn.value);
  });
});
