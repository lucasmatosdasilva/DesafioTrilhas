const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Array com os jogadores
const jogadores = [
    { nome: "Lucas", pontuacao: 2500 },
    { nome: "Luana", pontuacao: 1800 },
    { nome: "Luiz", pontuacao: 2200 }
];


// MENU PRINCIPAL
function mostrarMenu() {
    console.log("\n==============================");
    console.log("      GAMERTEAM MANAGER");
    console.log("==============================");
    console.log("1 - Cadastrar jogador");
    console.log("2 - Listar jogadores");
    console.log("3 - Buscar jogador");
    console.log("4 - Sair");
    console.log("5 - Atualizar Pontos");
    console.log("==============================");

    rl.question("Escolha uma opção do menu: ", function (opcao) {

        if (opcao === "1") {
            cadastrarJogador();

        } else if (opcao === "2") {
            listarJogadores();

        } else if (opcao === "3") {
            buscarJogador();

        } else if (opcao === "4") {
            console.log("\nPrograma encerrado.");
            rl.close();

        } else if (opcao === "5") {
            atualizarPontuacao();

        } else {
            console.log("\nOpção inválida!");
            mostrarMenu();
        }
    });
}


// CADASTRAR JOGADOR
function cadastrarJogador() {
    console.log("\n--- CADASTRO DE JOGADOR ---");

    rl.question("Digite o nome do jogador: ", function (nome) {

        rl.question("Digite a pontuação inicial: ", function (pontuacao) {

            const novoJogador = {
                nome: nome,
                pontuacao: Number(pontuacao)
            };

            jogadores.push(novoJogador);

            console.log("\nJogador cadastrado com sucesso!");

            mostrarMenu();
        });
    });
}


// LISTAR JOGADORES
function listarJogadores() {
    console.log("\n--- LISTA DE JOGADORES ---");

    for (let i = 0; i < jogadores.length; i++) {

        const jogadorAtual = jogadores[i];

        console.log(
            jogadorAtual.nome +
            " - " +
            jogadorAtual.pontuacao +
            " pontos"
        );
    }

    mostrarMenu();
}


// BUSCAR JOGADOR
function buscarJogador() {
    console.log("\n--- SISTEMA DE BUSCA ---");

    rl.question("Qual jogador deseja buscar? ", function (nomeBuscado) {

        let encontrado = false;

        for (let i = 0; i < jogadores.length; i++) {

            const jogadorAtual = jogadores[i];

            if (
                jogadorAtual.nome.toLowerCase() ===
                nomeBuscado.toLowerCase()
            ) {

                console.log(
                    "\nJogador encontrado: " +
                    jogadorAtual.nome +
                    " - " +
                    jogadorAtual.pontuacao +
                    " pontos"
                );

                encontrado = true;

                break;
            }
        }

        if (encontrado === false) {
            console.log("\nERRO! Jogador não encontrado.");
        }

        mostrarMenu();
    });
}


// ATUALIZAR PONTUAÇÃO
function atualizarPontuacao() {

    console.log("\n--- ATUALIZAÇÃO DE RANKING ---");

    rl.question(
        "Qual jogador deseja atualizar? ",
        function (nomeBuscado) {

            let encontrado = false;

            for (let i = 0; i < jogadores.length; i++) {

                const jogadorAtual = jogadores[i];

                if (
                    jogadorAtual.nome.toLowerCase() ===
                    nomeBuscado.toLowerCase()
                ) {

                    encontrado = true;

                    rl.question(
                        "Quantos pontos ele ganhou hoje? ",
                        function (pontos) {

                            const pontosNovos = Number(pontos);

                            // Soma os pontos novos à pontuação atual
                            jogadorAtual.pontuacao += pontosNovos;

                            console.log(
                                "\nSUCESSO! A pontuação de " +
                                jogadorAtual.nome +
                                " subiu para " +
                                jogadorAtual.pontuacao +
                                " pontos!"
                            );

                            mostrarMenu();
                        }
                    );

                    return;
                }
            }

            // Se terminar o loop e não encontrar
            if (encontrado === false) {

                console.log(
                    "\nERRO! Jogador não encontrado."
                );

                mostrarMenu();
            }
        }
    );
}


// INICIA O PROGRAMA
mostrarMenu();