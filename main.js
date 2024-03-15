const form = document.getElementById('form-contatos');
linhas = '';
const nomes = [];
const numeros = [];

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');
    if(numeros.includes(inputNumeroContato.value)){
        alert(`O número "${inputNumeroContato.value}" já foi inserido`);
    }
    else {
        nomes.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);
        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';
        linhas += linha;
        inputNumeroContato.value = '';
        inputNomeContato.value = '';
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}