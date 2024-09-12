// Função para limpar o visor
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Função para adicionar caracteres ao visor
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Função para calcular a expressão e exibir o resultado
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}