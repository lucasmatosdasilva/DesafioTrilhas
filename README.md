# 🎮 GamerTeam Manager

Projeto desenvolvido em **JavaScript** como atividade final para praticar conceitos fundamentais de programação.

O sistema permite cadastrar jogadores, listar jogadores, buscar jogadores pelo nome e atualizar suas pontuações diretamente pelo terminal.

---

## 📚 Objetivo

Aplicar na prática os conhecimentos de:

- Arrays
- Objetos
- Loops
- Funções
- Condicionais
- Entrada de dados pelo terminal

---

## ⚙️ Funcionalidades

O sistema possui as seguintes opções:

- ✅ Cadastrar jogador
- 📋 Listar jogadores
- 🔍 Buscar jogador
- 🏆 Atualizar pontuação
- 🚪 Encerrar o programa

---

## 🏆 Atualização de Pontuação

A principal funcionalidade desenvolvida nesta atividade foi a função:

```javascript
atualizarPontuacao()

💻 Tecnologias Utilizadas
- JavaScript
- Node.js
- Visual Studio Code

▶️ Como Executar
É necessário ter o Node.js instalado no computador.
Abra o terminal na pasta do projeto e execute:
node desafio.js

O menu será exibido no terminal:
==============================
      GAMERTEAM MANAGER
==============================
1 - Cadastrar jogador
2 - Listar jogadores
3 - Buscar jogador
4 - Sair
5 - Atualizar Pontos
==============================

📁 Estrutura do Projeto
GamerTeamManager/
│
├── desafio.js
└── README.md

🧠 Conceitos Aplicados
Os jogadores são armazenados em um array de objetos:
const jogadores = [
    { nome: "Fallen", pontuacao: 2500 },
    { nome: "Gaules", pontuacao: 1800 },
    { nome: "Coldzera", pontuacao: 2200 }
];

O loop for é utilizado para percorrer a lista de jogadores:
for (let i = 0; i < jogadores.length; i++) {
    const jogadorAtual = jogadores[i];
}

A busca por um jogador compara o nome digitado com o nome armazenado no objeto:
if (
    jogadorAtual.nome.toLowerCase() ===
    nomeBuscado.toLowerCase()
) {
    encontrado = true;
}

A atualização da pontuação é realizada com:
jogadorAtual.pontuacao += pontosNovos;

Essa linha soma os novos pontos à pontuação que o jogador já possui.
Por exemplo:
Pontuação atual: 2500
Pontos ganhos: 150

2500 + 150 = 2650

🎯 Fluxo do Sistema
Menu Principal
      ↓
Usuário escolhe uma opção
      ↓
Cadastro / Listagem / Busca / Atualização
      ↓
Sistema executa a função escolhida
      ↓
Retorna ao menu principal

Na opção de atualização de pontuação:
Opção 5
   ↓
Pergunta o nome do jogador
   ↓
Percorre o array com um loop for
   ↓
Compara o nome digitado
   ↓
Jogador encontrado?
   ↓
Sim → Pergunta quantos pontos ele ganhou
   ↓
Soma os novos pontos
   ↓
Exibe a nova pontuação

Caso o jogador não seja encontrado:
ERRO! Jogador não encontrado.

👨‍💻 Autor
Desenvolvido por Lucas Matos da Silva.
📌 Sobre o Projeto
Atividade final desenvolvida para praticar os fundamentos de JavaScript por meio de um sistema simples de gerenciamento de jogadores e pontuações.
O projeto utiliza Arrays, Objetos, Loops e Funções para armazenar, consultar e alterar dados em memória.
