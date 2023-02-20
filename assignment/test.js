function clearScreen() {
  document.getElementById('result').value = '';
}

function backspace() {
  let value = document.getElementById('result').value;
  document.getElementById('result').value = value.substr(0, value.length - 1);
}

function insert(char) {
  document.getElementById('result').value += char;
}

function calculate() {
  let expression = document.getElementById('result').value;
  let result = eval(expression);
  document.getElementById('result').value = result;
}


  