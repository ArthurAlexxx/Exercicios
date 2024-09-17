function calcularMedia() {
    // Obter os valores das notas
    const ac1 = parseFloat(document.getElementById('ac1').value);
    const ac2 = parseFloat(document.getElementById('ac2').value);
    const ag = parseFloat(document.getElementById('ag').value);
    const af = parseFloat(document.getElementById('af').value);

    // Calcular a média final
    const mediaFinal = (ac1 * 0.15) + (ac2 * 0.30) + (ag * 0.10) + (af * 0.45);

    // Determinar se o aluno está aprovado ou reprovado
    const resultado = mediaFinal >= 5 ? 'Aprovado' : 'Reprovado';

    // Exibir o resultado
    document.getElementById('resultado').innerHTML = `
        <h4>Média Final: ${mediaFinal.toFixed(2)}</h4>
        <h4>Status: ${resultado}</h4>
    `;
}
