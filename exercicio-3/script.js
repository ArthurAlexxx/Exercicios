
const clientes = [];


function adicionarCliente() {

    const id = parseInt(document.getElementById('id').value);
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const idade = parseInt(document.getElementById('idade').value);

    if (isNaN(id) || !nome || !email || isNaN(idade)) {
        alert('Todos os campos são obrigatórios!');
        return;
    }

    const cliente = { id, nome, email, idade };

    clientes.push(cliente);

    console.log(cliente);

    atualizarListaClientes();

    document.getElementById('formCliente').reset();
}

function atualizarListaClientes() {
    const listaClientes = document.getElementById('listaClientes');
    listaClientes.innerHTML = '';

    clientes.forEach(cliente => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = cliente.nome;
        listaClientes.appendChild(listItem);
    });
}
