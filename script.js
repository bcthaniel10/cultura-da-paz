// ==========================================
// BOTÃO PARA AMPLIAR O TEXTO
// ==========================================

const botaoFonte = document.querySelector("#botao-fonte");

if (botaoFonte) {

    botaoFonte.addEventListener("click", function () {

        const ampliada =
            document.body.classList.toggle("fonte-ampliada");

        botaoFonte.textContent =
            ampliada ? "Reduzir texto" : "Ampliar texto";

        botaoFonte.setAttribute(
            "aria-pressed",
            String(ampliada)
        );
    });
}


// ==========================================
// FORMULÁRIO DE AVALIAÇÃO
// ==========================================

const formAvaliacao =
    document.querySelector("#form-avaliacao");

if (formAvaliacao) {

    formAvaliacao.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();

            const clareza =
                document.querySelector("#clareza").value;

            const notaTexto =
                document.querySelector("#nota").value;

            const sugestao =
                document.querySelector("#sugestao")
                .value.trim();

            const resposta =
                document.querySelector(
                    "#resultado-avaliacao"
                );

            const nota = Number(notaTexto);


            // Verificação dos dados

            if (
                !clareza ||
                !notaTexto ||
                !Number.isInteger(nota) ||
                nota < 1 ||
                nota > 5
            ) {

                resposta.textContent =
                    "Escolha a clareza e informe uma nota de 1 a 5.";

                document
                    .querySelector(
                        !clareza ? "#clareza" : "#nota"
                    )
                    .focus();

                return;
            }


            // Criação do objeto

            const avaliacao = {
                clareza,
                nota,
                sugestao
            };


            console.log(
                "Avaliação de teste:",
                avaliacao
            );


            resposta.textContent =
                "Avaliação conferida com sucesso! " +
                "O envio ainda não está disponível.";

            formAvaliacao.reset();
        }
    );
}


// ==========================================
// FORMULÁRIO DE RELATO
// ==========================================

const formRelato =
    document.querySelector("#form-relato");

if (formRelato) {

    formRelato.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();

            const categoria =
                document.querySelector("#categoria").value;

            const descricao =
                document.querySelector("#descricao")
                .value.trim();

            const sugestao =
                document.querySelector(
                    "#sugestao-relato"
                ).value.trim();

            const resposta =
                document.querySelector(
                    "#resultado-relato"
                );


            // Verificação dos dados

            if (
                !categoria ||
                descricao.length < 20
            ) {

                resposta.textContent =
                    "Selecione uma categoria e escreva " +
                    "ao menos 20 caracteres.";

                document
                    .querySelector(
                        !categoria
                            ? "#categoria"
                            : "#descricao"
                    )
                    .focus();

                return;
            }


            // Criação do objeto

            const relato = {
                categoria,
                descricao,
                sugestao
            };


            console.log(
                "Relato de teste:",
                relato
            );


            resposta.textContent =
                "Relato de teste conferido. " +
                "Ele não foi enviado nem publicado.";

            formRelato.reset();
        }
    );
}


// ==========================================
// DADO QUANTITATIVO
// ==========================================

const botaoDado =
    document.querySelector("#mostrar-dado");

if (botaoDado) {

    botaoDado.addEventListener(
        "click",
        function () {

            document.querySelector(
                "#dado-destaque"
            ).textContent =
                "INSIRA AQUI UM DADO REAL, " +
                "A INSTITUIÇÃO, O TÍTULO E O ANO DA FONTE.";
        }
    );
}