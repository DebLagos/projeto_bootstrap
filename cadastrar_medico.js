// Vetor do médico
var cadastroMedico = [
    { id: new Date().getTime(), nome: 'Roberto Ribeiro', email: 'exemplo@gmail.com', telefone: '(18)98122-3454', crm: '1234567890', especialidade: 'Pediatra' }
];

function carregaDadosTabela(dados) {
    let tab = document.getElementById('tabela');
    let htmlCorpo = '';

    for (let i = 0; i < dados.length; i++) {
        let medico = dados[i];
        htmlCorpo += `<tr>
                        <td><input type="checkbox" class="selecionar" data-id="${medico.id}"></td>
                        <td>${medico.nome}</td>
                        <td>${medico.email}</td>
                        <td>${medico.telefone}</td>
                        <td>${medico.crm}</td>
                        <td>${medico.especialidade}</td>
                        <td><button class="btn btn-outline-primary" onclick="excluirMedico(${medico.id})">Excluir</button></td>
                      </tr>`;
    }

    tab.innerHTML = `
        <tr>
            <th><input type="checkbox" id="checkAll" onclick="selecionarTodos()"></th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>CRM</th>
            <th>Especialidade</th>
            <th></th>
        </tr>
        ${htmlCorpo}
    `;
}
// Função para cadastrar um novo médico
function cadastrar() {
    let vNome = document.querySelector('#name').value;
    let vEmail = document.querySelector('#email').value;
    let vTelefone = document.querySelector('#phone').value;
    let vCrm = document.querySelector('#crm').value;
    let vEspecialidade = document.querySelector('#specialty').value;

    if (vNome === "" || vEmail === "" || vTelefone === "" || vCrm === "" || vEspecialidade === "") {
        return;
    }

    let novoMedico = { id: new Date().getTime(), nome: vNome, email: vEmail, telefone: vTelefone, crm: vCrm, especialidade: vEspecialidade };

    // Atualizar o vetor de objetos médicos
    cadastroMedico.push(novoMedico);

    // Recarregar a tabela
    carregaDadosTabela(cadastroMedico);

    // Limpar o formulário
    document.getElementById('form-cadastro').reset();
}

// Função para excluir um médico
function excluirMedico(idExcluir) {
    cadastroMedico = cadastroMedico.filter(medico => medico.id !== idExcluir);

    // Recarregar a tabela
    carregaDadosTabela(cadastroMedico);
}

// Função para selecionar todos os médicos
function selecionarTodos() {
    let checkboxes = document.querySelectorAll('.selecionar');
    let checkAll = document.getElementById('checkAll');

    checkboxes.forEach(checkbox => checkbox.checked = checkAll.checked);
}
// Função para excluir todos os médicos
function excluirTodos() {
    cadastroMedico = [];

    // Recarregar a tabela
    carregaDadosTabela(cadastroMedico);
}

// Carregar os dados da tabela ao carregar a página
carregaDadosTabela(cadastroMedico);
