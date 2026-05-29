// =====================================
// PERGUNTAS
// =====================================

const perguntasIniciais = [

  {

    pergunta: "Qual talher você seria?",

    imagem: "imagens/pergunta1.webp",

    respostas: [

      { texto: "Garfo", valor: 9 },

      { texto: "Faca", valor: 6 },

      { texto: "Colher", valor: 3 }

    ]
  },

  {

    pergunta: "Qual parte do corpo você gosta de treinar?",

    imagem: "imagens/pergunta2.jpg",

    respostas: [
      { texto: "Costas", valor: 9 },
      { texto: "Trapézio", valor: 9 },
      { texto: "Peito", valor: 6 },
      { texto: "Biceps", valor: 6 },
      { texto: "Triceps", valor: 6 },
      { texto: "Abdomen", valor: 3 },
      { texto: "Gluteo", valor: 0 },
      { texto: "Perna", valor: 3 }

    ]
  },

  {

    pergunta: "O que você acha da atuação da Sydney Sweeney",

    imagem: "imagens/pergunta3.avif",

    respostas: [
      { texto: "Não conheço ela", valor: 9 },
      { texto: "Acho bonita", valor: 9 },
      { texto: "Não sei opinar sobre sua atuação", valor: 6 },
      { texto: "Atua bem", valor: 3 },
      { texto: "Atua mal", valor: 0 }

    ]
  },  

  {

    pergunta: "Qual peça de xadrez vc seria?",

    imagem: "imagens/pergunta4.jpg",

    respostas: [
      { texto: "Cavalo", valor: 9 },
      { texto: "Torre", valor: 9 },
      { texto: "Bispo", valor: 6 },
      { texto: "Rei", valor: 6 },
      { texto: "Peão", valor: 0 },
      { texto: "Rainha", valor: 3 }

    ]
  },
  {

    pergunta: "Escolha um ator",

    imagem: "imagens/pergunta5.jpg",

    respostas: [
      { texto: "Timothée Chalamet", valor: 0 },
      { texto: "Brad Pitt", valor: 6 },
      { texto: "Leonardo Dicaprio", valor: 3 },
      { texto: "Johnny Depp", valor: 9 },
      { texto: "Tom Holland", valor: 0 },
      { texto: "Henry Cavill", valor: 9 }

    ]
  },
  {

    pergunta: "Cor preferida",

    imagem: "imagens/pergunta6.jpg",

    respostas: [
      { texto: "Ciano", valor: 0 },
      { texto: "Preto", valor: 9 },
      { texto: "Vermelho", valor: 3 },
      { texto: "Laranja", valor: 6 },
      { texto: "Branco", valor: 9 },
      { texto: "Cores neon", valor: 0 },
      { texto: "Rosa", valor: 0 },
      { texto: "Azul", valor: 9 },
      { texto: "Verde", valor: 9 },
      { texto: "Turqueza", valor: 6 },
      { texto: "Magenta", valor: 0 },
      { texto: "Cinza", valor: 6 },
      { texto: "Vinho", valor: 3 },
      { texto: "Roxo", valor: 3 },
      { texto: "Amarelo", valor: 6 },
      { texto: "Dourado", valor: 3 },
      { texto: "Bege", valor: 9 },
      { texto: "Cores pasteis", valor: 0 },
      { texto: "Marrom", valor: 9 },
      { texto: "Outro", valor: 3 }

    ]
  },
  {

    pergunta: "Sua casa em Harry Potter",

    imagem: "imagens/pergunta7.avif",

    respostas: [
      { texto: "Lufa-Lufa", valor: 0 },
      { texto: "Sonserina", valor: 9 },
      { texto: "Grifinória", valor: 6 },
      { texto: "Corvinal", valor: 3 }
    ]
  },
  {

    pergunta: "Escolha um personagem para RPG",

    imagem: "imagens/pergunta8.jpg",

    respostas: [
      { texto: "Guerreiro", valor: 9 },
      { texto: "Mago", valor: 3 },
      { texto: "Ladino", valor: 9 },
      { texto: "Clerigo", valor: 6 },
      { texto: "Bardo", valor: 6 },
      { texto: "Paladino", valor: 8 },
      { texto: "Druida", valor: 6 },
      { texto: "Ranger", valor: 3 },
      { texto: "Assassino", valor: 6 },
      { texto: "Barbaro", valor: 9 },
      { texto: "Feiticeiro", valor: 3 },
      { texto: "Monge", valor: 3 }

    ]
  },
  {

    pergunta: "Escolha um filme da Barbie",

    imagem: "imagens/pergunta9.jpg",

    respostas: [
      { texto: "Live Action", valor: 3 },
      { texto: "As Sapatilhas Mágicas", valor: 0 },
      { texto: "Escola de Princesas", valor: 0 },
      { texto: "Princesa da ilha", valor: 3 },
      { texto: "Segredo das fadas", valor: 6 },
      { texto: "Butterfly", valor: 3 },
      { texto: "Princesa e a plebeia", valor: 6 },
      { texto: "Moda e Magia", valor: 0 },
      { texto: "Castelo de diamante", valor: 0 },
      { texto: "Quebra Nozes", valor: 9 },
      { texto: "Butterfly e princesa Fairy", valor: 3 },
      { texto: "Fairytopia", valor: 6 },
      { texto: "Vida de sereia", valor: 6 },
      { texto: "Lagos dos cisnes", valor: 3 },
      { texto: "Nunca assisti", valor: 9 },
      { texto: "Outro filme", valor: 0 }

    ]
  },
  {

    pergunta: "Alien preferido do ben 10",

    imagem: "imagens/pergunta10.jpg",

    respostas: [
      { texto: "Chama", valor: 6 },
      { texto: "Besta", valor: 9 },
      { texto: "Diamante", valor: 9 },
      { texto: "XRL8", valor: 3 },
      { texto: "Massa Cinzenta", valor: 9 },
      { texto: "4 Braços", valor: 0 },
      { texto: "Insectoie", valor: 6 },
      { texto: "Aquatico", valor: 6 },
      { texto: "Ultra T", valor: 0 },
      { texto: "Fantasmático", valor: 0 },
      { texto: "Bala de canhão", valor: 9 },
      { texto: "Cipó selvagem", valor: 3 },
      { texto: "Blitzwolfer", valor: 9 },
      { texto: "Snare-oh", valor: 6 },
      { texto: "Frankenstrike", valor: 6 },
      { texto: "Glutão", valor: 3 },
      { texto: "Clone", valor: 3 },
      { texto: "Mega olhos", valor: 9 },
      { texto: "Gigante", valor: 0 },
      { texto: "Alien X", valor: 0 },
      { texto: "Fogo Fatuo", valor: 6 },
      { texto: "Eco Eco", valor: 3 },
      { texto: "Enormossauro", valor: 9 },
      { texto: "Arraia-à-Jato", valor: 6 },
      { texto: "Friagem", valor: 0 },
      { texto: "Cromático", valor: 0 },
      { texto: "Macaco aranha", valor: 3 },
      { texto: "Gosma", valor: 0 },
      { texto: "Outro", valor: 6 }

    ]
  },
  {

    pergunta: "Escolha uma diva pop",

    imagem: "imagens/pergunta11.webp",

    respostas: [
      { texto: "Lana del rey", valor: 6 },
      { texto: "Madonna", valor: 0 },
      { texto: "Mariah Carey", valor: 0 },
      { texto: "Rihanna", valor: 3 },
      { texto: "Taylor Swift", valor: 0 },
      { texto: "Beyonce", valor: 6 },
      { texto: "Lady Gaga", valor: 6 },
      { texto: "Adele", valor: 9 },
      { texto: "Britney Spears", valor: 3 },
      { texto: "Katy Perry", valor: 3 },
      { texto: "Shakira", valor: 6 },
      { texto: "Sabrina Carpinter", valor: 0 },
      { texto: "Olivia Rodrigo", valor: 0 },
      { texto: "Celine Dion", valor: 9 },
      { texto: "Cher", valor: 6 }

    ]
  },

  {

    pergunta: "Conhece a Camila Loures?",

    imagem: "imagens/pergunta12.jpg",

    respostas: [
      { texto: "Sei quem é", valor: 0 },
      { texto: "Já ouvi falar", valor: 5 },
      { texto: "Não Conheço", valor: 9 }

    ]
  },

  {

    pergunta: "Para o auto cuidado vc usa:",

    imagem: "imagens/pergunta13.webp",

    respostas: [
      { texto: "Só sabonete 3 em 1", valor: 9 },
      { texto: "Só Shampoo e sabonete", valor: 6 },
      { texto: "Uso acondicionador", valor: 3 },
      { texto: "Faço skin care", valor: 0 }

    ]
  },

   {

    pergunta: "Você sabe bater leque:",

    imagem: "imagens/pergunta14.jpg",

    respostas: [
      { texto: "O que é bater leque?", valor: 9 },
      { texto: "Não sei não", valor: 6 },
      { texto: "Mais ou menos", valor: 3 },
      { texto: "Sei com certeza", valor: 0 }

    ]
  },

];





// =====================================
// SEGUNDA FASE
// =====================================

const perguntasBem = [

  {

    pergunta: "Escolha uma artista",

    imagem: "imagens/perguntaA1.jpg",

    respostas: [

      { texto: "Megan Fox", valor: 10 },
      { texto: "Sydney Sweeney", valor: 10 },
      { texto: "Anne Hathaway", valor: 5 },
      { texto: "Selena Gomes", valor: 3 },
      { texto: "Sem Preferência", valor: 0 },
      { texto: "Margot Robbie", valor: 7 }

    ]
  },
  {

    pergunta: "Escolha um artista",

    imagem: "imagens/perguntaA2.webp",

    respostas: [

      { texto: "Picasso", valor: 7 },
      { texto: "Monnet", valor: 10 },
      { texto: "Vangog", valor: 10 },
      { texto: "Goia", valor: 5 },
      { texto: "Caravaggio", valor: 5 },
      { texto: "Leonardo", valor: 5 },
      { texto: "Michelangelo", valor: 3 },
      { texto: "Klimt", valor: 3 },
      { texto: "Frida Kahlo", valor: 3 },
      { texto: "Não sei opinar", valor: 0 }

    ]
  },
  {

    pergunta: "Ferramenta Preferida",

    imagem: "imagens/perguntaA3.png",

    respostas: [

      { texto: "Estilete", valor: 7 },
      { texto: "Parafuso/rosca", valor: 7 },
      { texto: "Tesoura", valor: 7 },
      { texto: "Machado", valor: 10 },
      { texto: "Enxada", valor: 40 },
      { texto: "Picareta", valor: 10 },
      { texto: "Serra", valor: 10 },
      { texto: "Britadeira", valor: 5 },
      { texto: "Martelo", valor: 5 },
      { texto: "Chave Allen", valor: 0 },
      { texto: "Voltimetro", valor: 0 },
      { texto: "Barômetro", valor: 0 },
      { texto: "Não tenho preferência", valor: 3 }

    ]
  },
  {

    pergunta: "Escolha um cachorro",

    imagem: "imagens/perguntaA4.jpg",

    respostas: [

      { texto: "Pitbull", valor: 7 },
      { texto: "Rottweiler", valor: 7 },
      { texto: "Dobermann", valor: 7 },
      { texto: "Pastor Alemão", valor: 10 },
      { texto: "Beagle", valor: 10 },
      { texto: "Border Collie", valor: 10 },
      { texto: "São Bernardo", valor: 10 },
      { texto: "Schnauzer", valor: 10 },
      { texto: "Golden retriever", valor: 5 },
      { texto: "Siberiano", valor: 5 },
      { texto: "Lulu da Pomerania", valor: 3 },
      { texto: "Shih Tzu", valor: 3 },
      { texto: "Maltes", valor: 3 },
      { texto: "Chihuahua", valor: 3 },
      { texto: "Caramelo", valor: 10 },
      { texto: "Spitz", valor: 3 },
      { texto: "Não gosto", valor: 0 }

    ]
  },
  {

    pergunta: "Escolha um super poder",

    imagem: "imagens/perguntaA5.webp",

    respostas: [

      { texto: "Visão raio x", valor: 7 },
      { texto: "Invisibilidade", valor: 7 },
      { texto: "Super força", valor: 10 },
      { texto: "Super velocidade", valor: 10 },
      { texto: "Ser um Transmorfo", valor: 10 },
      { texto: "Voar", valor: 5 },
      { texto: "Fazer clones", valor: 5 },
      { texto: "Falar com os animais", valor: 3 },
      { texto: "Telepatia", valor: 0 },
      { texto: "Teletransporte", valor: 0 },
      { texto: "Ser Herdeiro com pais mortos", valor: 0 }

    ]
  }

];



const perguntasMedio = [

  {

    pergunta: "Escolha uma artista",

    imagem: "imagens/perguntaA1.jpg",

    respostas: [

      { texto: "Megan Fox", valor: 10 },
      { texto: "Sydney Sweeney", valor: 10 },
      { texto: "Anne Hathaway", valor: 0 },
      { texto: "Selena Gomes", valor: 0 },
      { texto: "Sem Preferência", valor: 0 },
      { texto: "Margot Robbie", valor: 10 }

    ]
  },
  {

    pergunta: "Escolha um artista",

    imagem: "imagens/perguntaA2.webp",

    respostas: [

      { texto: "Picasso", valor: 0 },
      { texto: "Monnet", valor: 0 },
      { texto: "Vangog", valor: 0 },
      { texto: "Goia", valor: 10 },
      { texto: "Caravaggio", valor: 10 },
      { texto: "Leonardo", valor: 10 },
      { texto: "Michelangelo", valor: 0 },
      { texto: "Klimt", valor: 0 },
      { texto: "Frida Kahlo", valor: 0 },
      { texto: "Não sei opinar", valor: 10 }

    ]
  },
  {

    pergunta: "Ferramenta Preferida",

    imagem: "imagens/perguntaA3.png",

    respostas: [

      { texto: "Parafuso/rosca", valor: 10 },
      { texto: "Tesoura", valor: 0 },
      { texto: "Machado", valor: 0 },
      { texto: "Enxada", valor: 0 },
      { texto: "Picareta", valor: 0 },
      { texto: "Serra", valor: 0 },
      { texto: "Britadeira", valor: 10 },
      { texto: "Martelo", valor: 10 },
      { texto: "Chave Allen", valor: 10 },
      { texto: "Voltimetro", valor: 10 },
      { texto: "Barômetro", valor: 10 },
      { texto: "Não tenho preferência", valor: 10 }

    ]
  },
  {

    pergunta: "Escolha um cachorro",

    imagem: "imagens/perguntaA4.jpg",

    respostas: [

      { texto: "Pitbull", valor: 10 },
      { texto: "Rottweiler", valor: 10 },
      { texto: "Dobermann", valor: 10 },
      { texto: "Pastor Alemão", valor: 10 },
      { texto: "Beagle", valor: 10 },
      { texto: "Border Collie", valor: 10 },
      { texto: "São Bernardo", valor: 10 },
      { texto: "Schnauzer", valor: 10 },
      { texto: "Golden retriever", valor: 0 },
      { texto: "Siberiano", valor: 0 },
      { texto: "Lulu da Pomerania", valor: 0 },
      { texto: "Shih Tzu", valor: 0 },
      { texto: "Maltes", valor: 0 },
      { texto: "Chihuahua", valor: 0 },
      { texto: "Caramelo", valor: 0 },
      { texto: "Spitz", valor: 0 },
      { texto: "Não gosto", valor: 10 }

    ]
  },
  {

    pergunta: "Escolha um super poder",

    imagem: "imagens/perguntaA5.webp",

    respostas: [

      { texto: "Visão raio x", valor: 0 },
      { texto: "Invisibilidade", valor: 0 },
      { texto: "Super força", valor: 10 },
      { texto: "Super velocidade", valor: 10 },
      { texto: "Ser um Transmorfo", valor: 0 },
      { texto: "Voar", valor: 10 },
      { texto: "Fazer clones", valor: 0 },
      { texto: "Falar com os animais", valor: 0 },
      { texto: "Telepatia", valor: 0 },
      { texto: "Teletransporte", valor: 10 },
      { texto: "Ser Herdeiro com pais mortos", valor: 10 }

    ]
  }

];



const perguntasMal = [

  {

    pergunta: "Qual é o teu preferido?",

    imagem: "imagens/perguntaC1.webp",

    respostas: [

      { texto: "Supino", valor: 10 },
      { texto: "Agachamento", valor: 2 },
      { texto: "Abdutora", valor: 0 },
      { texto: "Adutora", valor: 0 },
      { texto: "Scot", valor: 8 },
      { texto: "Crucifixo", valor: 6 },
      { texto: "Remada", valor: 6 },
      { texto: "Leg press", valor: 4 },
      { texto: "Bulgaro", valor: 2 },
      { texto: "Triceps na polia", valor: 8 },
      { texto: "Elevação pelvica", valor: 0 }

    ]
  },
  {

    pergunta: "Escolha um artista",

    imagem: "imagens/perguntaA2.webp",

    respostas: [

      { texto: "Picasso", valor: 10 },
      { texto: "Monnet", valor: 2 },
      { texto: "Vangog", valor: 0 },
      { texto: "Goia", valor: 10 },
      { texto: "Caravaggio", valor: 6 },
      { texto: "Leonardo", valor: 8 },
      { texto: "Michelangelo", valor: 4 },
      { texto: "Klimt", valor: 2 },
      { texto: "Frida Kahlo", valor: 0 },
      { texto: "Não sei opinar", valor: 0 }

    ]
  },
  {

    pergunta: "Um esporte",

    imagem: "imagens/perguntaC3.jpg",

    respostas: [

      { texto: "Volei", valor: 2 },
      { texto: "Volei de Praia", valor: 0 },
      { texto: "Tennis", valor: 2 },
      { texto: "Beach Tennis", valor: 0 },
      { texto: "Remo", valor: 2 },
      { texto: "Handebol", valor: 6 },
      { texto: "natação", valor: 4 },
      { texto: "Dança", valor: 0 },
      { texto: "Ginastica", valor: 0 },
      { texto: "basquete", valor: 8 },
      { texto: "calistenia", valor: 10 },
      { texto: "arte marcial", valor: 10 }

    ]
  },
  {

    pergunta: "Escolha um cachorro",

    imagem: "imagens/perguntaA4.jpg",

    respostas: [

      { texto: "Pitbull", valor: 10 },
      { texto: "Rottweiler", valor: 6 },
      { texto: "Dobermann", valor: 8 },
      { texto: "Pastor Alemão", valor: 10 },
      { texto: "Beagle", valor: 4 },
      { texto: "Border Collie", valor: 6 },
      { texto: "São Bernardo", valor: 10 },
      { texto: "Schnauzer", valor: 6 },
      { texto: "Golden retriever", valor: 4 },
      { texto: "Sasicha", valor: 2 },
      { texto: "Lulu da Pomerania", valor: 0 },
      { texto: "Shih Tzu", valor: 0 },
      { texto: "Maltes", valor: 2 },
      { texto: "Chihuahua", valor: 0 },
      { texto: "Caramelo", valor: 6 },
      { texto: "Spitz", valor: 0 }

    ]
  },
  {

    pergunta: "Como você se vê na sua futura estrutura familiar?",

    imagem: "imagens/perguntaC5.png",

    respostas: [

      { texto: "Você domina a casa e banca com tudo", valor: 10 },
      { texto: "Você banca a maior parte dos gastos ", valor: 8 },
      { texto: "Vocês dividem igualmente os gastos e tarefas", valor: 6 },
      { texto: "Você divide igualmente os gastos, já as tarefas não", valor: 4 },
      { texto: "Você paga menos", valor: 2 },
      { texto: "Você é bancado", valor: 0 }

    ]
  },
  {

    pergunta: "Escolha um",

    imagem: "imagens/perguntaC6.jpg",

    respostas: [

      { texto: "Luisa Sonza", valor: 0 },
      { texto: "Marina Sena ", valor: 4 },
      { texto: "Annita", valor: 0 },
      { texto: "Gloria Groove", valor: 2 },
      { texto: "Ebony", valor: 6 },
      { texto: "Iza", valor: 6 },
      { texto: "Jão", valor: 10 },
      { texto: "Pedro Sampaio", valor: 8 },
      { texto: "Pabllo", valor: 0 }

    ]
  }

];



// =====================================
// VARIÁVEIS
// =====================================

let indicePergunta = 0;

let pontuacaoFase1 = 0;

let pontuacaoFase2 = 0;

let pontuacaoTotal = 0;

let fase = 1;

let nivel = "";

let classificacaoFinal = "";

let perguntasAtuais = perguntasIniciais;



// =====================================
// COMEÇAR QUIZ
// =====================================

function startQuiz() {

  const nome = document.getElementById("name").value;

  const genero = document.getElementById("gender").value;

  if (nome.trim() === "") {

    alert("Digite seu nome.");

    return;
  }

  if (genero === "") {

    alert("Selecione seu gênero.");

    return;
  }
  

  

  document
    .getElementById("start-screen")
    .classList.add("hidden");

  document
    .getElementById("quiz-screen")
    .classList.remove("hidden");

  carregarPergunta();
}



// =====================================
// CARREGAR PERGUNTA
// =====================================

function carregarPergunta() {

  const perguntaAtual =
    perguntasAtuais[indicePergunta];

  document.getElementById("question").innerText =
    perguntaAtual.pergunta;

  document.getElementById("question-image").src =
    perguntaAtual.imagem;

  const answersDiv =
    document.getElementById("answers");

  answersDiv.innerHTML = "";

  perguntaAtual.respostas.forEach(resposta => {

    const botao =
      document.createElement("button");

    botao.innerText = resposta.texto;

    botao.onclick = function () {

      responder(resposta.valor);

    };

    answersDiv.appendChild(botao);

  });

  atualizarBarra();
}

// =====================================
// RESPONDER
// =====================================

function responder(valor) {

  pontuacaoTotal += valor;

  if (fase === 1) {

    pontuacaoFase1 += valor;
  }

  if (fase === 2) {

    pontuacaoFase2 += valor;
  }

  indicePergunta++;

  if (indicePergunta < perguntasAtuais.length) {

    carregarPergunta();

  }

  else {

    if (fase === 1) {

      definirNivel();

    }

    else {

      mostrarResultado();

    }
  }
}

// =====================================
// DEFINIR NÍVEL
// =====================================

function definirNivel() {

  if (pontuacaoFase1 > 7*14) {

    nivel = "Hétero";

    perguntasAtuais = perguntasBem;
  }

  else if (pontuacaoFase1 <7*14) {

    nivel = "Gay";

    perguntasAtuais = perguntasMal;
  }

  else {

    nivel = "Bi";

    perguntasAtuais = perguntasMedio;
  }

  fase = 2;

  indicePergunta = 0;

  carregarPergunta();
}



// =====================================
// CLASSIFICAÇÃO FINAL
// =====================================

function definirClassificacaoFinal() {

  if (nivel === "Hétero") {

    if (pontuacaoFase2 >= (8*5)) {

      classificacaoFinal = "Agroboy";
    }

    else if (pontuacaoFase2 >= (6*5)) {

      classificacaoFinal = "Heterotop";
    }

    else if (pontuacaoFase2 >= (4*5)) {

      classificacaoFinal = "Normal";
    }

    else if (pontuacaoFase2 >= (2*5)) {

      classificacaoFinal = "Afeminado";
    }

    else {

      classificacaoFinal = "Incel";
    }
  }

  else if (nivel === "Bi") {

    if (pontuacaoFase2 >= (5*5)) {

      classificacaoFinal = "Bi";
    }


    else {

      classificacaoFinal = "BiFestinha";
    }
  }

  else {

    if (pontuacaoFase2 >= (9*6)) {

      classificacaoFinal = "Ativo";
    }

    else if (pontuacaoFase2 >= (7*6)) {

      classificacaoFinal = "Versátil+Ativo";
    }

    else if (pontuacaoFase2 >= (5*6)) {

      classificacaoFinal = "Versátil";
    }

    else if (pontuacaoFase2 >= (3*6)) {

      classificacaoFinal = "Versátil+Passivo";
    }

    else if (pontuacaoFase2 >= (1*6)) {

      classificacaoFinal = "Passivo";
    }

    else {

      classificacaoFinal = "Passiva Tóxica";
    }
  }
}

// =====================================
// RESULTADO
// =====================================

function mostrarResultado() {

  definirClassificacaoFinal();

  document
    .getElementById("quiz-screen")
    .classList.add("hidden");

  document
    .getElementById("result-screen")
    .classList.remove("hidden");

  const nome =
    document.getElementById("name").value;

  document.getElementById("final-name").innerHTML =
    "<strong>Nome:</strong> " + nome;

  document.getElementById("final-level").innerHTML =
    "<strong>Nível:</strong> " + nivel;

  document.getElementById("final-score").innerHTML =
    "<strong>Pontos Fase 1:</strong> " + pontuacaoFase1;

  document.getElementById("final-total").innerHTML =
    "<strong>Classificação Final:</strong> " +
    classificacaoFinal;

  desenharGraficos();

  const link =
    document.getElementById("resultado-link");

  link.href =
    "resultado.html?classe=" +
    classificacaoFinal;
}

// =====================================
// GRÁFICO
// =====================================

function desenharGraficos() {

  // =========================
  // GRÁFICO 1
  // =========================

  const canvasNivel =
    document.getElementById("graficoNivel");

  const ctxNivel =
    canvasNivel.getContext("2d");

  canvasNivel.width = 300;
  canvasNivel.height = 300;

  const porcentagemNivel =
  Math.max(
    0,
    Math.min(
      100,
      Math.round(
        100 - ((pontuacaoFase1 / 140)*83 )
      )
    )
  );

  const anguloNivel =
    (porcentagemNivel / 100) *
    Math.PI *
    2;

  // FUNDO

  ctxNivel.beginPath();

  ctxNivel.moveTo(150, 150);

  ctxNivel.arc(
    150,
    150,
    100,
    0,
    Math.PI * 2
  );

  ctxNivel.fillStyle = "#334155";
  ctxNivel.shadowColor =
  "rgba(0,0,0,0.4)";

  ctxNivel.shadowBlur = 15;
  ctxNivel.fill();

  // PARTE PREENCHIDA

  ctxNivel.beginPath();

  ctxNivel.moveTo(150, 150);

  ctxNivel.arc(
    150,
    150,
    100,
    0,
    anguloNivel
  );

  const gradienteNivel =
    ctxNivel.createLinearGradient(
    0,
    0,
    300,
    300
  );

  gradienteNivel.addColorStop(0, "#3b82f6");

  gradienteNivel.addColorStop(1, "#ec4899");

  ctxNivel.fillStyle =
    gradienteNivel;

  ctxNivel.fill();

  // TEXTO

  ctxNivel.fillStyle = "white";

  ctxNivel.font = "20px Arial";

  ctxNivel.textAlign = "center";

  ctxNivel.fillText(

    porcentagemNivel + "%",

    150,

    145

  );

  ctxNivel.fillText(

    "HOMOSEXUAL",

    150,

    175

  );

  // =========================
  // GRÁFICO 2
  // =========================

  const canvasClasse =
    document.getElementById("graficoClasse");

  const ctxClasse =
    canvasClasse.getContext("2d");

  canvasClasse.width = 300;
  canvasClasse.height = 300;

  const porcentagemClasse =
    (Math.round(pontuacaoFase2 / 50)*20)+80;

  const anguloClasse =
    (porcentagemClasse / 100) *
    Math.PI *
    2;

  // FUNDO

  ctxClasse.beginPath();

  ctxClasse.moveTo(150, 150);

  ctxClasse.arc(
    150,
    150,
    100,
    0,
    Math.PI * 2
  );

  ctxClasse.fillStyle = "#334155";

  ctxClasse.fill();

  // PARTE PREENCHIDA

  ctxClasse.beginPath();

  ctxClasse.moveTo(150, 150);

  ctxClasse.arc(
    150,
    150,
    100,
    0,
    anguloClasse
  );

  ctxClasse.fillStyle = "#22c55e";

  ctxClasse.fill();

  // TEXTO

  ctxClasse.fillStyle = "white";

  ctxClasse.font = "20px Arial";

  ctxClasse.fillText(

    porcentagemClasse + "%",

    120,

    145

  );

  ctxClasse.fillText(

    classificacaoFinal,

    135,

    175

  );
}

// =====================================
// BARRA DE PROGRESSO
// =====================================

function atualizarBarra() {

  let progresso;

  if (fase === 1) {

    progresso =
      (indicePergunta / 20) * 100;
  }

  else {

    progresso =
      ((14 + indicePergunta) / 20) * 100;
  }

  document
    .getElementById("progress-bar")
    .style.width =
    progresso + "%";
}

function copiarResultado() {

  const texto =

    "Eu tirei '" +

    document.getElementById("titulo").innerText +

    "' no quiz 😭\n\n" +

    window.location.href;

  navigator.clipboard.writeText(texto);

  alert("Resultado copiado!");
}