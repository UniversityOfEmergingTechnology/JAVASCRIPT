function addContent(buttonvalue){
    // here value property allowed me to set the text inside that input tag
    result.value = result.value + buttonvalue
}

function clearResult(){
    result.value = ''
}

function evaluateResult(){
    // here value property gives me the current value of text inside that input tag
    let num =eval(result.value)
    result.value = num
}
let result = document.getElementById('result')
let clearButton = document.getElementById('clearButton')

clearButton.addEventListener('click',clearResult)
