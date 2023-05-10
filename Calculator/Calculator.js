let result = document.getElementById('result');

function addContent(num) {
  result.value += num;
}

function clearResult() {
  result.value = '';
}

function calculateResult() {
  result.value = eval(result.value);
}
