const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".numpad");
const display = document.querySelector(".display");

// add event listener to keys
keys.addEventListener('click', function (e) {
  e.preventDefault();
  const key = e.target;
  // console.log(key.textContent);
  // regex to check if key is a number
  const isNumber = /[0-9]/.test(key.textContent);
  // regex to check if key is an operator
  const isOperator = /[x+÷-]/.test(key.textContent);
  // regex to check if key is equals
  const isEquals = /[=]/.test(key.textContent);
  // clear the display back to 0
  if (key.textContent === 'AC') {
    display.textContent = '0';
  }
  // display can only go up to 9 digits
  if (isNumber) {
    display.textContent = display.textContent === '0' ? key.textContent : display.textContent + key.textContent;
    if (display.textContent.length > 8) {
      display.textContent = '😪'.repeat(8);
    }
  }
  if (isOperator) {
    console.log('operator clicked!');
  }
});