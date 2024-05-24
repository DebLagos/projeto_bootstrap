
//vetor do medico
var cadastroMedico = [

    { nome: 'Roberto Ribeiro', email: 'exemplo@gmail.com', telefone: '(18)98122-3454', crm: '1234567890', especialidade: 'Pediatra' }

]

function carregaDadosTabela(dados) {
    // vincular a tabela com o tab
    let tab = document.getElementById('tabela');

    // criar a linha com o cabecalho
    let htmlCorpo = `<tr>
                            <th>Nome Completo</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th>CRM</th>
                            <th>Especialidade</th>
                        </tr>`;

    for (let medico of dados) {
        htmlCorpo += `<tr>
                        <td>${medico.nome}</td>
                        <td>${medico.email}</td>
                        <td>${medico.telefone}</td>
                        <td>${medico.crm}</td>
                        <td>${medico.especialidade}</td>
                        
                      </tr>`;
    }

    tab.innerHTML = htmlCorpo;
}

function cadastrar() {
    let vNome = document.querySelector('#name').value;
    let vEmail = document.querySelector('#email').value;
    let vTelefone = document.querySelector('#phone').value;
    let vCrm = document.querySelector('#crm').value;
    let vEspecialidade = document.querySelector('#specialty').value;

    if (vNome == "" || vEmail == "" || vTelefone == "" || vCrm == "" || vEspecialidade == "") {

        return
    }

    // atualizar o vetor de objetos alunos
    cadastroMedico.push({ nome: vNome, email: vEmail, phone: vTelefone, crm: vCrm, specialty: vEspecialidade });

    let htmlLinha = `<tr>
                        <td>${vNome}</td>
                        <td>${vEmail}</td>
                        <td>${vTelefone}</td>
                        <td>${vCrm}</td>
                        <td>${vEspecialidade}</td>
                        
                      </tr>`;

    // vincular a tabela com o tab
    let tab = document.getElementById('tabela');
    tab.innerHTML += htmlLinha;
}

carregaDadosTabela(cadastroMedico);