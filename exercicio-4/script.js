function calcularApolice() {
    const nome = document.getElementById('nome').value;
    const sexo = document.getElementById('sexo').value;
    const idade = parseInt(document.getElementById('idade').value);
    const valorAutomovel = parseFloat(document.getElementById('valorAutomovel').value);

    let valorApolice;

    if (sexo === 'masculino') {
        valorApolice = idade <= 25 ? valorAutomovel * 0.15 : valorAutomovel * 0.10;
    } else {
        valorApolice = valorAutomovel * 0.08;
    }

    document.getElementById('resultado').value = `R$ ${valorApolice.toFixed(2)}`;
}
