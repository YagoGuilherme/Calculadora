//script.js

function appendToDisplay(value){
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Usar eval para avaliar a expressão
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}