function calcular() {
    // Obter os valores dos inputs
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const operacao = document.getElementById('operacao').value;

    let resultado;

    // Realizar a operação matemática com base na seleção
    switch (operacao) {
        case 'soma':
            resultado = numero1 + numero2;
            break;
        case 'subtracao':
            resultado = numero1 - numero2;
            break;
        case 'multiplicacao':
            resultado = numero1 * numero2;
            break;
        case 'divisao':
            if (numero2 === 0) {
                resultado = 'Não é possível dividir por zero';
            } else {
                resultado = numero1 / numero2;
            }
            break;
        default:
            resultado = 'Operação inválida';
    }

    // Exibir o resultado no input
    document.getElementById('resultado').value = resultado;
}
