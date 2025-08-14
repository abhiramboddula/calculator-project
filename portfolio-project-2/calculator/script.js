const result = document.getElementById('result');

function display(value) {
    result.value += value;
}

function clearScreen() {
    result.value = '';
}

function clearLastChar() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}
