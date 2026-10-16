// ============================================================
// 1. BANCO DE DADOS DOS POKÉMONS (com ID para sprites)
// ============================================================
console.log("Script carregado!");
const pokedex = {
    "Fogo": [
        { id: 4,   nome: "Charmander", gen: "1ª Geração", evolucao: "Charizard", vantagem: "Planta, Inseto, Gelo", fraqueza: "Água, Terra, Pedra" },
        { id: 155, nome: "Cyndaquil",  gen: "2ª Geração", evolucao: "Typhlosion", vantagem: "Planta, Inseto, Gelo", fraqueza: "Água, Terra, Pedra" },
        { id: 255, nome: "Torchic",    gen: "3ª Geração", evolucao: "Blaziken", vantagem: "Planta, Inseto, Gelo", fraqueza: "Água, Terra, Pedra" },
        { id: 390, nome: "Chimchar",   gen: "4ª Geração", evolucao: "Infernape", vantagem: "Planta, Inseto, Gelo", fraqueza: "Água, Terra, Pedra" },
        { id: 498, nome: "Tepig",      gen: "5ª Geração", evolucao: "Emboar", vantagem: "Planta, Inseto, Gelo", fraqueza: "Água, Terra, Pedra" }
    ],
    "Água": [
        { id: 7,   nome: "Squirtle", gen: "1ª Geração", evolucao: "Blastoise", vantagem: "Fogo, Terra, Pedra", fraqueza: "Elétrico, Planta" },
        { id: 158, nome: "Totodile", gen: "2ª Geração", evolucao: "Feraligatr", vantagem: "Fogo, Terra, Pedra", fraqueza: "Elétrico, Planta" },
        { id: 258, nome: "Mudkip",   gen: "3ª Geração", evolucao: "Swampert", vantagem: "Fogo, Terra, Pedra", fraqueza: "Elétrico, Planta" },
        { id: 393, nome: "Piplup",   gen: "4ª Geração", evolucao: "Empoleon", vantagem: "Fogo, Terra, Pedra", fraqueza: "Elétrico, Planta" },
        { id: 501, nome: "Oshawott", gen: "5ª Geração", evolucao: "Samurott", vantagem: "Fogo, Terra, Pedra", fraqueza: "Elétrico, Planta" }
    ],
    "Planta": [
        { id: 1,   nome: "Bulbasaur", gen: "1ª Geração", evolucao: "Venusaur", vantagem: "Água, Terra, Pedra", fraqueza: "Fogo, Gelo, Voador" },
        { id: 152, nome: "Chikorita", gen: "2ª Geração", evolucao: "Meganium", vantagem: "Água, Terra, Pedra", fraqueza: "Fogo, Gelo, Voador" },
        { id: 252, nome: "Treecko",   gen: "3ª Geração", evolucao: "Sceptile", vantagem: "Água, Terra, Pedra", fraqueza: "Fogo, Gelo, Voador" },
        { id: 387, nome: "Turtwig",   gen: "4ª Geração", evolucao: "Torterra", vantagem: "Água, Terra, Pedra", fraqueza: "Fogo, Gelo, Voador" },
        { id: 495, nome: "Snivy",     gen: "5ª Geração", evolucao: "Serperior", vantagem: "Água, Terra, Pedra", fraqueza: "Fogo, Gelo, Voador" }
    ],
    "Elétrico": [
        { id: 25,  nome: "Pikachu",   gen: "1ª Geração", evolucao: "Raichu", vantagem: "Água, Voador", fraqueza: "Terra" },
        { id: 179, nome: "Mareep",    gen: "2ª Geração", evolucao: "Ampharos", vantagem: "Água, Voador", fraqueza: "Terra" },
        { id: 309, nome: "Electrike", gen: "3ª Geração", evolucao: "Manectric", vantagem: "Água, Voador", fraqueza: "Terra" },
        { id: 403, nome: "Shinx",     gen: "4ª Geração", evolucao: "Luxray", vantagem: "Água, Voador", fraqueza: "Terra" },
        { id: 522, nome: "Blitzle",   gen: "5ª Geração", evolucao: "Zebstrika", vantagem: "Água, Voador", fraqueza: "Terra" }
    ],
    "Psíquico": [
        { id: 63,  nome: "Abra",      gen: "1ª Geração", evolucao: "Alakazam", vantagem: "Lutador, Venenoso", fraqueza: "Inseto, Fantasma, Sombrio" },
        { id: 196, nome: "Espeon",    gen: "2ª Geração", evolucao: "Espeon", vantagem: "Lutador, Venenoso", fraqueza: "Inseto, Fantasma, Sombrio" },
        { id: 280, nome: "Ralts",     gen: "3ª Geração", evolucao: "Gardevoir", vantagem: "Lutador, Venenoso", fraqueza: "Inseto, Fantasma, Sombrio" },
        { id: 433, nome: "Chingling", gen: "4ª Geração", evolucao: "Chimecho", vantagem: "Lutador, Venenoso", fraqueza: "Inseto, Fantasma, Sombrio" },
        { id: 577, nome: "Solosis",   gen: "5ª Geração", evolucao: "Reuniclus", vantagem: "Lutador, Venenoso", fraqueza: "Inseto, Fantasma, Sombrio" }
    ],
    "Sombrio": [
    { id: 228, nome: "Houndour",  gen: "2ª Geração", evolucao: "Houndoom",  vantagem: "Psíquico, Fantasma", fraqueza: "Lutador, Inseto, Fada" },
    { id: 197, nome: "Umbreon",   gen: "2ª Geração", evolucao: "Umbreon",   vantagem: "Psíquico, Fantasma", fraqueza: "Lutador, Inseto, Fada" },
    { id: 261, nome: "Poochyena", gen: "3ª Geração", evolucao: "Mightyena", vantagem: "Psíquico, Fantasma", fraqueza: "Lutador, Inseto, Fada" },
    { id: 434, nome: "Stunky",    gen: "4ª Geração", evolucao: "Skuntank",  vantagem: "Psíquico, Fantasma", fraqueza: "Lutador, Inseto, Fada" },
    { id: 570, nome: "Zorua",     gen: "5ª Geração", evolucao: "Zoroark",   vantagem: "Psíquico, Fantasma", fraqueza: "Lutador, Inseto, Fada" }
    ],
    "Fada": [
    { id: 35,  nome: "Clefairy", gen: "1ª Geração", evolucao: "Clefable", vantagem: "Dragão, Sombrio, Lutador", fraqueza: "Venenoso, Aço" },
    { id: 209, nome: "Snubbull", gen: "2ª Geração", evolucao: "Granbull", vantagem: "Dragão, Sombrio, Lutador", fraqueza: "Venenoso, Aço" },
    { id: 303, nome: "Mawile",   gen: "3ª Geração", evolucao: "Mawile",   vantagem: "Dragão, Sombrio, Lutador", fraqueza: "Venenoso, Aço" },
    { id: 439, nome: "Mime Jr.", gen: "4ª Geração", evolucao: "Mr. Mime", vantagem: "Dragão, Sombrio, Lutador", fraqueza: "Venenoso, Aço" },
    { id: 546, nome: "Cottonee", gen: "5ª Geração", evolucao: "Whimsicott", vantagem: "Dragão, Sombrio, Lutador", fraqueza: "Venenoso, Aço" }
    ],
    "Dragão": [
        { id: 147, nome: "Dratini", gen: "1ª Geração", evolucao: "Dragonite", vantagem: "Dragão", fraqueza: "Gelo, Fada, Dragão" },
        { id: 230, nome: "Kingdra", gen: "2ª Geração", evolucao: "Kingdra", vantagem: "Dragão", fraqueza: "Gelo, Fada, Dragão" },
        { id: 371, nome: "Bagon",   gen: "3ª Geração", evolucao: "Salamence", vantagem: "Dragão", fraqueza: "Gelo, Fada, Dragão" },
        { id: 443, nome: "Gible",   gen: "4ª Geração", evolucao: "Garchomp", vantagem: "Dragão", fraqueza: "Gelo, Fada, Dragão" },
        { id: 610, nome: "Axew",    gen: "5ª Geração", evolucao: "Haxorus", vantagem: "Dragão", fraqueza: "Gelo, Fada, Dragão" }
    ]
};

// Cores dos tipos (para as bolinhas coloridas)
const coresTipos = {
    "Fogo": "#e74c3c",
    "Água": "#3498db",
    "Planta": "#2ecc71",
    "Elétrico": "#f1c40f",
    "Psíquico": "#9b59b6",
    "Sombrio": "#34495e",
    "Fada": "#ff69b4",
    "Dragão": "#8e44ad"
};

// ============================================================
// 2. PERGUNTAS
// ============================================================
const perguntas = [
    {
        texto: "Como você se sente em um dia chuvoso?",
        opcoes: [
            { texto: " Renovado, adoro o cheiro da chuva.", pontos: { "Água": 2, "Planta": 1 } },
            { texto: " Inquieto, a chuva me dá energia.", pontos: { "Elétrico": 2, "Sombrio": 1 } },
            { texto: " Fico impaciente, quero o sol de volta.", pontos: { "Fogo": 2, "Dragão": 2 } },
            { texto: " Calmo, é um convite para ficar em casa.", pontos: { "Psíquico": 2, "Sombrio": 1 } }
        ]
    },
    {
        texto: "O que você observa primeiro em um lugar novo?",
        opcoes: [
            { texto: " As árvores e as plantas ao redor.", pontos: { "Planta": 2, "Fada": 2 } },
            { texto: " Rios, lagos ou o mar.", pontos: { "Água": 2, "Dragão": 2 } },
            { texto: " A luz e a energia do ambiente.", pontos: { "Elétrico": 2, "Fogo": 1 } },
            { texto: " As pessoas e suas intenções.", pontos: { "Psíquico": 2, "Sombrio": 1 } }
        ]
    },
    {
        texto: "Qual desses animais você mais se identifica?",
        opcoes: [
            { texto: " Dragão.", pontos: { "Dragão": 2, "Fogo": 1 } },
            { texto: " Raposa.", pontos: { "Sombrio": 2, "Fada": 2 } },
            { texto: " Tartaruga.", pontos: { "Planta": 2, "Água": 1 } },
            { texto: " Guepardo.", pontos: { "Elétrico": 2, "Fogo": 1 } }
        ]
    },
    {
        texto: "Qual dessas comidas te agrada mais?",
        opcoes: [
            { texto: " Um prato quente e picante.", pontos: { "Fogo": 2, "Dragão": 2 } },
            { texto: " Algo fresco e leve, como sushi.", pontos: { "Água": 2, "Psíquico": 1 } },
            { texto: " Uma salada colorida e natural.", pontos: { "Planta": 2, "Fada": 2 } },
            { texto: " Um doce intenso e marcante.", pontos: { "Sombrio": 2, "Elétrico": 1 } }
        ]
    },
    {
        texto: "Qual atividade física você preferiria praticar?",
        opcoes: [
            { texto: " Corrida ao ar livre.", pontos: { "Elétrico": 2, "Fogo": 1 } },
            { texto: " Natação.", pontos: { "Água": 2, "Dragão": 1 } },
            { texto: " Yoga e alongamento.", pontos: { "Psíquico": 2, "Fada": 2 } },
            { texto: " Trilha em meio à natureza.", pontos: { "Planta": 2, "Sombrio": 1 } }
        ]
    }
];

// ============================================================
// 3. ESTADO DO JOGO
// ============================================================
let respostasUsuario = {};
let tiposVencedores = [];
let pokemonsEscolhidos = [];
let tipoAtualEscolha = 0;
let indiceSelecionado = null;

// ============================================================
// 4. FUNÇÕES
// ============================================================

// Gera URL do sprite oficial
function spriteUrl(id) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

// ---- TELA 1: PERGUNTAS ----
function renderizarPerguntas() {
    const container = document.getElementById('container-perguntas');
    container.innerHTML = '';

    perguntas.forEach((pergunta, index) => {
        const card = document.createElement('div');
        card.className = 'card-pergunta';

        const titulo = document.createElement('h3');
        titulo.textContent = `Pergunta ${index + 1}/5: ${pergunta.texto}`;
        card.appendChild(titulo);

        const opcoesDiv = document.createElement('div');
        opcoesDiv.className = 'opcoes';

        pergunta.opcoes.forEach((opcao, opIndex) => {
            const btn = document.createElement('button');
            btn.className = 'opcao';
            btn.textContent = opcao.texto;
            btn.onclick = () => selecionarOpcao(index, opIndex, opcoesDiv);
            opcoesDiv.appendChild(btn);
        });

        card.appendChild(opcoesDiv);
        container.appendChild(card);
    });
}

function selecionarOpcao(indexPergunta, indexOpcao, opcoesDiv) {
    opcoesDiv.querySelectorAll('.opcao').forEach(btn => btn.classList.remove('selecionada'));
    opcoesDiv.querySelectorAll('.opcao')[indexOpcao].classList.add('selecionada');
    respostasUsuario[indexPergunta] = indexOpcao;

    const todas = Object.keys(respostasUsuario).length === perguntas.length;
    document.getElementById('btn-finalizar').disabled = !todas;
}

// ---- CALCULAR TIPOS ----
function calcularTipos() {
    const pontos = {};
    Object.keys(pokedex).forEach(tipo => pontos[tipo] = 0);

    Object.entries(respostasUsuario).forEach(([iPerg, iOp]) => {
        const opcao = perguntas[iPerg].opcoes[iOp];
        Object.entries(opcao.pontos).forEach(([tipo, valor]) => {
            pontos[tipo] += valor;
        });
    });

    const ordenados = Object.entries(pontos).sort((a, b) => b[1] - a[1]);
    return [ordenados[0][0], ordenados[1][0]];
}

// ---- TELA 2: RESULTADO DO TESTE ----
function mostrarTiposVencedores(tipos) {
    tiposVencedores = tipos;
    const container = document.getElementById('tipos-vencedores');
    container.innerHTML = '';

    tipos.forEach(tipo => {
        const card = document.createElement('div');
        card.className = 'tipo-card';
        card.innerHTML = `
            <div class="bolinha" style="background: ${coresTipos[tipo]};"></div>
            <div class="nome-tipo">${tipo}</div>
        `;
        container.appendChild(card);
    });
}

// ---- TELA 3: ESCOLHA DOS POKÉMONS ----
function renderizarEscolhaPokemon() {
    const container = document.getElementById('container-pokemons');
    const instrucao = document.getElementById('instrucao-escolha');
    const btnConfirmar = document.getElementById('btn-confirmar-pokemons');

    container.innerHTML = '';
    indiceSelecionado = null;

    instrucao.textContent = `Escolha um Pokémon do tipo ${tiposVencedores[tipoAtualEscolha]}:`;

    const opcoes = pokedex[tiposVencedores[tipoAtualEscolha]];
    opcoes.forEach((poke, index) => {
        const card = document.createElement('div');
        card.className = 'card-pokemon';
        card.innerHTML = `
            <img class="imagem" src="${spriteUrl(poke.id)}" alt="${poke.nome}">
            <div class="nome">${poke.nome}</div>
            <div class="geracao">${poke.gen}</div>
        `;
        card.onclick = () => selecionarPokemon(index, card);
        container.appendChild(card);
    });

    btnConfirmar.disabled = true;
}

function selecionarPokemon(index, cardClicado) {
    document.querySelectorAll('#container-pokemons .card-pokemon').forEach(c => c.classList.remove('selecionado'));
    cardClicado.classList.add('selecionado');
    indiceSelecionado = index;
    document.getElementById('btn-confirmar-pokemons').disabled = false;
}

function confirmarEscolhaPokemon() {
    const pokeEscolhido = pokedex[tiposVencedores[tipoAtualEscolha]][indiceSelecionado];
    pokemonsEscolhidos.push({ ...pokeEscolhido, tipo: tiposVencedores[tipoAtualEscolha] });

    tipoAtualEscolha++;

    if (tipoAtualEscolha < 2) {
        renderizarEscolhaPokemon();
    } else {
        mostrarResultadoFinal();
    }
}

// ---- TELA 4: RESULTADO FINAL ----
function mostrarResultadoFinal() {
    const container = document.getElementById('resultado-final');
    container.innerHTML = '';

    pokemonsEscolhidos.forEach(poke => {
        const card = document.createElement('div');
        card.className = 'card-resultado';
        card.innerHTML = `
            <img class="imagem-final" src="${spriteUrl(poke.id)}" alt="${poke.nome}">
            <div class="nome-final">${poke.nome}</div>
            <div class="detalhe"><span>Tipo:</span><span>${poke.tipo}</span></div>
            <div class="detalhe"><span>Geração:</span><span>${poke.gen}</span></div>
            <div class="detalhe"><span>Evolução:</span><span>${poke.evolucao}</span></div>
            <div class="detalhe"><span>Vantagem:</span><span>${poke.vantagem}</span></div>
            <div class="detalhe"><span>Fraqueza:</span><span>${poke.fraqueza}</span></div>
        `;
        container.appendChild(card);
    });

    document.getElementById('tela-escolha-pokemon').classList.add('escondido');
    document.getElementById('tela-resultado-final').classList.remove('escondido');
}

// ============================================================
// 5. NAVEGAÇÃO ENTRE TELAS
// ============================================================
document.getElementById('btn-finalizar').onclick = () => {
    const tipos = calcularTipos();
    mostrarTiposVencedores(tipos);
    document.getElementById('tela-perguntas').classList.add('escondido');
    document.getElementById('tela-resultado-teste').classList.remove('escondido');
};

document.getElementById('btn-ir-escolher').onclick = () => {
    tipoAtualEscolha = 0;
    pokemonsEscolhidos = [];
    renderizarEscolhaPokemon();
    document.getElementById('tela-resultado-teste').classList.add('escondido');
    document.getElementById('tela-escolha-pokemon').classList.remove('escondido');
};

document.getElementById('btn-confirmar-pokemons').onclick = confirmarEscolhaPokemon;

// ============================================================
// 6. INICIALIZAÇÃO
// ============================================================
renderizarPerguntas();