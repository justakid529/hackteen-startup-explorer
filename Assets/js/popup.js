
// POPUP DE ESTUDO
const studyPopup = document.getElementById("studyPopup");
const resultadoPopup = document.getElementById("resultadoPopup");

window.toggleStudyPopup = function () {
  studyPopup?.classList.toggle("show");
};

const recomendacoesPopup = {
  matematica: {
    fundamental1: "📐 Aprenda Frações e Porcentagem.",
    fundamental2: "📊 Explore Equações e Funções.",
    ensinoMedio: "📈 Estude Logaritmos e Trigonometria.",
    faculdade: "📊 Matemática Avançada e Cálculo.",
  },
  portugues: {
    fundamental1: "📖 Revise Ortografia e Pontuação.",
    fundamental2: "📝 Pratique Interpretação de Texto.",
    ensinoMedio: "📚 Figuras de Linguagem e Redação.",
    faculdade: "📖 Literatura e Análise Crítica.",
  },
  historia: {
    fundamental1: "🏰 Conheça Civilizações Antigas.",
    fundamental2: "⚔️ Idade Média e Moderna.",
    ensinoMedio: "🕊️ Guerras Mundiais e Brasil Contemporâneo.",
    faculdade: "📜 História Mundial e Estudos Avançados.",
  },
  geografia: {
    fundamental1: "🗺️ Aprenda sobre Relevo e Clima.",
    fundamental2: "🌍 População e Economia.",
    ensinoMedio: "🌐 Geopolítica e Globalização.",
    faculdade: "🌎 Geografia Física e Humana Avançada.",
  },
  ciencias: {
    fundamental1: "🔬 Conheça os Estados da Matéria.",
    fundamental2: "🌡️ Energia e Transformações.",
    ensinoMedio: "🧪 Genética e Ecossistemas.",
    faculdade: "🧬 Ciências Avançadas e Pesquisa Científica.",
  },
  fisica: {
    fundamental1: "⚙️ Movimento e Força.",
    fundamental2: "🔋 Energia e Trabalho.",
    ensinoMedio: "🌌 Eletromagnetismo e Relatividade.",
    faculdade: "🛸 Física Teórica e Aplicada.",
  },
  quimica: {
    fundamental1: "🧫 Tabela Periódica e Substâncias.",
    fundamental2: "⚗️ Ligações Químicas.",
    ensinoMedio: "🧪 Reações Orgânicas e Equilíbrio.",
    faculdade: "🧬 Química Avançada e Laboratório.",
  },
  biologia: {
    fundamental1: "🌱 Células e Seres Vivos.",
    fundamental2: "🧬 Genética e Reprodução.",
    ensinoMedio: "🌍 Evolução e Biotecnologia.",
    faculdade: "🧪 Biologia Molecular e Pesquisa.",
  },
  sociologia: {
    fundamental1: "👥 Cultura e Sociedade.",
    fundamental2: "📊 Estratificação Social.",
    ensinoMedio: "🧠 Teorias Sociológicas.",
    faculdade: "📚 Sociologia Aplicada e Pesquisa.",
  },
  filosofia: {
    fundamental1: "💭 Ética e Moral.",
    fundamental2: "📚 Pensadores Clássicos.",
    ensinoMedio: "🧠 Epistemologia e Existencialismo.",
    faculdade: "📖 Filosofia Avançada e Debates Contemporâneos.",
  },
  ingles: {
    fundamental1: "🔤 Vocabulário Básico.",
    fundamental2: "🗣️ Gramática e Conversação.",
    ensinoMedio: "📘 Textos Literários e Tradução.",
    faculdade: "📚 Inglês Avançado e Literatura.",
  },
  educacao: {
    fundamental1: "🏃‍♂️ Benefícios da Atividade Física.",
    fundamental2: "🤸‍♀️ Esportes e Condicionamento.",
    ensinoMedio: "💪 Fisiologia e Treinamento.",
    faculdade: "🧠 Educação Física e Pesquisa Científica.",
  },
  artes: {
    fundamental1: "🎨 Cores e Formas.",
    fundamental2: "🖌️ História da Arte.",
    ensinoMedio: "🎭 Estilos e Expressões Artísticas.",
    faculdade: "🎨 Artes Avançadas e Crítica de Arte.",
  },
};

window.gerarRecomendacaoPopup = function () {
  const materia = document.getElementById("materiaPopup")?.value;
  const nivel = document.getElementById("nivelPopup")?.value;
  if (!materia || !nivel) {
    if (resultadoPopup) {
      resultadoPopup.innerHTML = "⚠️ Por favor, selecione a matéria e o nível.";
      resultadoPopup.style.display = "block";
    }
    return;
  }
  if (resultadoPopup && recomendacoesPopup[materia]) {
    resultadoPopup.innerHTML = recomendacoesPopup[materia][nivel];
    resultadoPopup.style.display = "block";
  }
};
