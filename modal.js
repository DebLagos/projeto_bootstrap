
//------------------------------Modal----------------------------------------

var modal_de_agendamento = document.getElementById("modal_de_agendamento");
var modal_ver_detalhes = document.getElementById("modal_ver_detalhe");
var modal_cancelar = document.getElementById("modal_cancelar");
var modal_enviar = document.getElementById("modal_enviar");
var modal_saiba_mais = document.getElementById("modal_saiba_mais");
var modal_senha = document.getElementById("modal_senha");

//------------------------------Fechar-------------------------------------------

var btn_fechar = document.getElementsByClassName("js-fechar");

if (btn_fechar.length > 0) {
    for (i = 0; i < btn_fechar.length; i++) {
        btn_fechar[i].addEventListener("click", function (evento) {
            //previni o evento padrao
            evento.preventDefault();

            const modal = evento.target.closest('dialog');
            modal.close();
        })
    }
}







//--------------------------------------------------------------Abrir Modal--------------------------------------------------------------

//pegando elemento html pelo id (um unico elemento)
var form_de_agendamento = document.getElementById("form-de-agendamento");

if (form_de_agendamento) {
    form_de_agendamento.addEventListener("submit", function (evento) {
        //previni o evento padrao
        evento.preventDefault();
        modal_de_agendamento.showModal();
    })
}

var form_contato = document.getElementById("form-contato");

if (form_contato) {
    form_contato.addEventListener("submit", function (evento) {
        //previni o evento padrao
        evento.preventDefault();
        modal_enviar.showModal();
    })
}



var form_redefinir_senha = document.getElementById("form-redefinir-senha");

if (form_redefinir_senha) {
    form_redefinir_senha.addEventListener("submit", function (evento) {
        //previni o evento padrao
        evento.preventDefault();
        modal_senha.showModal();
    })
}


//pegado todos elementos da classe js-ver-detalhes(mais de um elemento)
var btn_ver_detalhes = document.getElementsByClassName("js-ver-detalhes");
//se encontrar pelo menos um elemento
if (btn_ver_detalhes.length > 0) {


    //entra na repetição pegando elementos da lista 
    for (i = 0; i < btn_ver_detalhes.length; i++) {

        //adiciona o evento para cada elemento da lista com captura de click
        btn_ver_detalhes[i].addEventListener("click", function (evento) {
            //previni o evento padrao
            evento.preventDefault();
            modal_ver_detalhe.showModal();
        })
    }

}



//pegado todos elementos da classe js-ver-detalhes(mais de um elemento)
var btn_cancelar = document.getElementsByClassName("js-cancelar");
//se encontrar pelo menos um elemento
if (btn_cancelar.length > 0) {


    //entra na repetição pegando elementos da lista 
    for (i = 0; i < btn_cancelar.length; i++) {

        //adiciona o evento para cada elemento da lista com captura de click
        btn_cancelar[i].addEventListener("click", function (evento) {
            //previni o evento padrao
            evento.preventDefault();
            modal_cancelar.showModal();
        })
    }

}


//pegado todos elementos da classe js-ver-detalhes(mais de um elemento)
var btn_saiba_mais = document.getElementsByClassName("js-saiba-mais");
//se encontrar pelo menos um elemento
if (btn_saiba_mais.length > 0) {


    // entra na repetição pegando elementos da lista//
    for (i = 0; i < btn_saiba_mais.length; i++) {

        //adiciona o evento para cada elemento da lista com captura de click//
        btn_saiba_mais[i].addEventListener("click", function (evento) {


            const especialidade = evento.currentTarget.dataset.especialidade;
            const exames = evento.currentTarget.dataset.exames;

            if (especialidade == "ginecologista") {

                document.querySelector(".js-titulo-saiba-mais").innerHTML = `Medico: Dermatologista`;
                document.querySelector(".js-servico-saiba-mais").innerHTML = `Especialidade: Dermatologia`;
                document.querySelector(".js-texto-saiba-mais").innerHTML = `
                
                <span>Especialista no diagnóstico, <br>
                      tratamento e prevenção de doenças e  <br>
                      condições da pele, cabelo e unhas. <br>
                      Nossos dermatologistas tratam uma ampla <br>
                      variedade de problemas dermatológicos,  <br>
                      incluindo acne, eczema, psoríase, <br>
                      infecções de pele e câncer de pele. <br>
                      Além disso, realizam procedimentos estéticos <br>
                      como a remoção de manchas,cicatrizes <br>
                      e rejuvenescimento da pele. <br>
                      Também são habilitados a realizar biópsias de <br>
                      pele e outras cirurgias menores para <br>
                      diagnosticar e tratar doenças cutâneas.<br>
                 </span>
                
                
                
                `;

            }
            if (especialidade == "cardiologista") {

                document.querySelector(".js-titulo-saiba-mais").innerHTML = `Medico: Cardiologista`;
                document.querySelector(".js-servico-saiba-mais").innerHTML = `Especialidade: Cardiologista`;
                document.querySelector(".js-texto-saiba-mais").innerHTML = `
                
                <span>Especialista no diagnóstico, tratamento  <br>
                      e prevenção de doenças e condições do coração <br>
                      e sistema cardiovascular.<br> 
                      Nossos cardiologistas tratam uma ampla variedade <br>
                      de problemas cardíacos, incluindo hipertensão,  <br>
                      insuficiência cardíaca, doenças das válvulas  <br>
                      cardíacas, arritmias e doenças coronarianas.  <br>
                      Além disso, realizam exames diagnósticos como  <br>
                      eletrocardiogramas (ECG), ecocardiogramas,<br>
                      testes de esforço e cateterismos cardíacos.  <br>
                      Também oferecem orientações sobre prevenção  <br>
                      de doenças cardíacas e manejo de <br>
                      fatores de risco como colesterol elevado e hipertensão. <br>
                 </span>
                
                
                
                `;

            }

            if (especialidade == "clinico-geral") {

                document.querySelector(".js-titulo-saiba-mais").innerHTML = `Medico: Clínico Geral`;
                document.querySelector(".js-servico-saiba-mais").innerHTML = `Especialidade: Clínica Geral`;
                document.querySelector(".js-texto-saiba-mais").innerHTML = `
                
                <span> Especialista no diagnóstico, tratamento <br>
                       e prevenção de uma ampla gama de doenças <br>
                       e condições de saúde.<br>
                       Nossos clínicos gerais oferecem cuidados <br>
                       abrangentes para pacientes de todas as idades, <br>
                       tratando desde problemas de saúde comuns, <br>
                       como gripes e resfriados, até doenças crônicas, <br>
                       como diabetes e hipertensão. <br> 
                       Realizam exames físicos completos, diagnósticos, <br>
                       prescrevem tratamentos e encaminham para  <br>
                       especialistas quando necessário. Além disso,  <br>
                       fornecem orientações sobre prevenção de doenças, <br>
                        promoção de saúde e bem-estar geral. <br>
                 </span>
                
                `;

            }
            if (especialidade == "neurologista") {

                document.querySelector(".js-titulo-saiba-mais").innerHTML = `Medico: Neurologista`;
                document.querySelector(".js-servico-saiba-mais").innerHTML = `Especialidade: Neurologia`;
                document.querySelector(".js-texto-saiba-mais").innerHTML = `
                
                <span> Especialista no diagnóstico, tratamento  <br>
                       e prevenção de doenças e condições do  <br>
                       sistema nervoso.<br>
                       Nossos neurologistas tratam uma ampla <br>
                       variedade de problemas neurológicos,  <br>
                       incluindo dores de cabeça, epilepsia,  <br>
                       esclerose múltipla, doenças de Parkinson, <br>
                       acidentes vasculares cerebrais(AVC) e neuropatias. <br>
                       Além disso, realizam exames diagnósticos como <br>
                       eletroencefalograma, ressonâncias magnéticas <br>
                       e tomografias computadorizadas.<br> 
                       Também oferecem orientação e manejo de condições <br>
                       crônicas e complexas, assegurando uma abordagem  <br>
                       personalizada para cada paciente.<br>

                </span>
                
                `;

            }
            if (especialidade == "ortopedista") {

                document.querySelector(".js-titulo-saiba-mais").innerHTML = `Medico: Ortopedista`;
                document.querySelector(".js-servico-saiba-mais").innerHTML = `Especialidade: Ortopedia`;
                document.querySelector(".js-texto-saiba-mais").innerHTML = `
                
                <span> Especialista no diagnóstico, tratamento  <br>
                       e prevenção de doenças e condições <br>
                       do sistema músculo-esquelético. <br>
                       Nossos ortopedistas tratam uma ampla  <br>
                       variedade de problemas ortopédicos,  <br>
                       incluindo fraturas, lesões esportivas,  <br>
                       artrite, problemas na coluna, e dores  <br>
                       nas articulações.  <br>
                       Além disso, realizam cirurgias ortopédicas, <br>
                       como reparação de ligamentos e substituição <br>
                       de articulações, e utilizam técnicas avançadas <br>
                       de imagem para diagnóstico, como radiografias,  <br>
                       ressonâncias magnéticas e tomografias computadorizadas.  <br>
                       Também oferecem programas de reabilitação e  <br>
                       fisioterapia para recuperação e manutenção da saúde <br>
                       músculo-esquelética. <br>
                </span>
                `;
            }


            if (exames == "eletrocardiograma") {

                document.querySelector(".js-especialidade").innerHTML = `Medico: Cardiologista`;
                document.querySelector(".js-exame").innerHTML = `Exame: Eletrocardiograma`;
                document.querySelector(".js-informacao").innerHTML = `
                
                <span> O eletrocardiograma (ECG) é um exame <br>
                       não invasivo que registra a atividade <br>
                       elétrica do coração, essencial para diagnosticar <br>
                       e monitorar problemas cardíacos. Este procedimento <br>
                       simples e rápido pode detectar arritmias, infartos <br>
                       do miocárdio, e outras condições cardíacas. <br>
                       Nossos profissionais altamente qualificados <br>
                       garantem um exame preciso e confortável, <br>
                       utilizando equipamentos de última geração. <br>
                       O eletrocardiograma é uma ferramenta fundamental <br>
                       na avaliação da saúde cardíaca e no planejamento <br>
                       de tratamentos adequados. <br>
                </span>
                
                `;

            }

            if (exames == "endoscopia") {

                document.querySelector(".js-especialidade").innerHTML = `Medico: Gastroenterologista `;
                document.querySelector(".js-exame").innerHTML = `Exame: Endoscopia`;
                document.querySelector(".js-informacao").innerHTML = `
                
                <span> A endoscopia é um procedimento diagnóstico <br>
                       minimamente invasivo que permite a visualização  <br>
                       direta do trato gastrointestinal utilizando <br>
                       um endoscópio, um tubo flexível com uma câmera <br>
                       na ponta. Este exame é essencial para detectar <br>
                       e avaliar condições como úlceras, refluxo <br>
                       gastroesofágico, inflamações, pólipos e cânceres <br>
                       do esôfago, estômago e intestinos.  <br>
                       Nossos profissionais experientes garantem <br>
                       um procedimento seguro e confortável, <br>
                       com orientações claras antes e após o exame. <br>
                       A endoscopia é uma ferramenta crucial para <br>
                       o diagnóstico preciso e o tratamento eficaz <br>
                       de problemas gastrointestinais. <br>
                    </span>
                
                `;

            }
            if (exames == "colonoscopia") {

                document.querySelector(".js-especialidade").innerHTML = `Medico: Colonoscopista`;
                document.querySelector(".js-exame").innerHTML = `Exame: Colonoscopia`;
                document.querySelector(".js-informacao").innerHTML = `
                
                <span> A colonoscopia é um procedimento diagnóstico <br>
                       que permite a visualização direta do interior <br>
                       do cólon e do reto, utilizando um colonoscópio, <br>
                       um tubo flexível com uma câmera na ponta. <br>
                       Este exame é essencial para detectar e avaliar <br>
                       condições como pólipos, inflamações, úlceras  <br>
                       e câncer colorretal. Nossos profissionais <br>
                       altamente qualificados garantem um procedimento <br>
                       seguro e confortável, com orientações detalhadas <br>
                       sobre a preparação e cuidados pós-exame. <br>
                       A colonoscopia é uma ferramenta vital para <br>
                       o diagnóstico precoce e tratamento eficaz de <br>
                       problemas no trato gastrointestinal inferior. <br>

                </span>
                `;

            }
            if (exames == "ultrassom") {

                document.querySelector(".js-especialidade").innerHTML = `Medico: Radiologista`;
                document.querySelector(".js-exame").innerHTML = `Exame: Ultrassom`;
                document.querySelector(".js-informacao").innerHTML = `
                
                <span> O ultrassom, ou ultrassonografia, <br>
                       é um exame de imagem não invasivo que utiliza <br>
                       ondas sonoras de alta frequência para criar <br>
                       imagens detalhadas de órgãos e estruturas internas <br>
                       do corpo. Este procedimento é essencial para <br>
                       avaliar e diagnosticar diversas condições, <br>
                       monitorar gestações, e guiar procedimentos médicos. <br>
                       Nossos profissionais experientes garantem um <br>
                       exame seguro, preciso e confortável, utilizando <br>
                       equipamentos de última geração. <br>
                       O ultrassom é uma ferramenta fundamental <br>
                       para a avaliação de saúde e diagnóstico <br> 
                       preciso em várias especialidades médicas. <br>
                </span>
                `;
            }
            if (exames == "radiografia") {

                document.querySelector(".js-especialidade").innerHTML = `Medico: Radiologista`;
                document.querySelector(".js-exame").innerHTML = `Exame: Radiografia`;
                document.querySelector(".js-informacao").innerHTML = `
                
                <span> A radiografia, também conhecida <br>
                       como raio-X, é um exame de imagem <br>
                       não invasivo que utiliza radiação <br>
                       para capturar imagens detalhadas <br>
                       dos ossos e outras estruturas internas <br>
                       do corpo. Este procedimento é essencial <br>
                       para diagnosticar fraturas, infecções, <br>
                       problemas articulares e diversas outras <br>
                       condições médicas. Nossos profissionais <br>
                       qualificados garantem um exame seguro e <br>
                       preciso, utilizando equipamentos avançados <br>
                       para proporcionar diagnósticos rápidos e confiáveis. <br>
                       A radiografia é uma ferramenta indispensável <br>
                       para a avaliação e tratamento eficaz de uma <br>
                       ampla gama de problemas de saúde. <br>
                </span>
                `;

            }



            //previni o evento padrao//
            evento.preventDefault();
            modal_saiba_mais.showModal();
        })
    }



}
