document.addEventListener("DOMContentLoaded", () => {
  // ================= FORMULÁRIO GERAL =================
  document.getElementById("serviceForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceName = document.getElementById("serviceName").value;
    const serviceLink = document.getElementById("serviceLink").value;

    if (serviceName && serviceLink) {
      const serviceCard = `
        <div class="service-card">
          <h3>${serviceName}</h3>
          <a href="${serviceLink}" target="_blank">Acessar</a>
        </div>
      `;
      document.getElementById("servicesList").innerHTML += serviceCard;

      this.reset();
    }
  });

  // ================= FORMULÁRIO YOUTUBE =================
  document.getElementById("youtubeForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const videoName = document.getElementById("videoName").value;
    const videoLink = document.getElementById("videoLink").value;

    if (videoName && videoLink) {
      const videoCard = `
        <div class="video-card">
          <h3>${videoName}</h3>
          <iframe src="${converterParaEmbed(videoLink)}" frameborder="0" allowfullscreen></iframe>
        </div>
      `;
      document.getElementById("youtubeList").innerHTML += videoCard;

      this.reset();
    }
  });

  // ================= FUNÇÃO CARREGAR SERVIÇOS =================
  function carregarServicos(categoria) {
    const servicesList = document.getElementById("servicesList");
    servicesList.innerHTML = "";

    const servicos = {
      estudo: [
        { nome: "Khan Academy", link: "https://pt.khanacademy.org" },
        { nome: "Coursera", link: "https://www.coursera.org" },
      ],
      entretenimento: [
        { nome: "Netflix", link: "https://www.netflix.com" },
        { nome: "YouTube", link: "https://www.youtube.com" },
      ],
    };

    servicos[categoria]?.forEach((s) => {
      servicesList.innerHTML += `
        <div class="service-card">
          <h3>${s.nome}</h3>
          <a href="${s.link}" target="_blank">Acessar</a>
        </div>
      `;
    });
  }

  // ================= FUNÇÃO YOUTUBE EMBED =================
  function converterParaEmbed(link) {
    return link.replace("watch?v=", "embed/");
  }

  // ================= RESET =================
  document.getElementById("resetBtn")?.addEventListener("click", function () {
    document.getElementById("servicesList").innerHTML = "";
    document.getElementById("youtubeList").innerHTML = "";
  });

  // ================= CARREGAR AUTOMÁTICO =================
  const categoria = document.querySelector(".services-title")?.dataset.categoria;
  if (categoria) carregarServicos(categoria);

  // ================= FORMULÁRIO CONTATO =================
  document.getElementById("form-contato")?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    this.reset();
  });

  // ================= AUDIO PLAYER =================
  const playBtn = document.getElementById("playBtn");
  const audio = document.getElementById("myAudio");
  playBtn?.addEventListener("click", () => {
    if (audio.paused) audio.play();
    else audio.pause();
  });

  // ================= POPUP DE ESTUDO =================
  const studyPopup = document.getElementById("studyPopup");
  const resultadoPopup = document.getElementById("resultadoPopup");

  window.toggleStudyPopup = function () {
    studyPopup.classList.toggle("show");
  };

  const recomendacoesPopup = {
    matematica: {
      basico: "📐 Estude Frações e Porcentagem.",
      intermediario: "📊 Explore Equações e Funções.",
      avancado: "📈 Aprenda Logaritmos e Trigonometria."
    },
    portugues: {
      basico: "📖 Revise Ortografia e Pontuação.",
      intermediario: "📝 Pratique Interpretação de Texto.",
      avancado: "📚 Estude Figuras de Linguagem e Redação."
    },
    historia: {
      basico: "🏰 Conheça Civilizações Antigas.",
      intermediario: "⚔️ Estude Idade Média e Moderna.",
      avancado: "🕊️ Guerras Mundiais e Brasil Contemporâneo."
    },
    geografia: {
      basico: "🗺️ Aprenda sobre Relevo e Clima.",
      intermediario: "🌍 Estude População e Economia.",
      avancado: "🌐 Explore Geopolítica e Globalização."
    },
    ciencias: {
      basico: "🔬 Conheça os Estados da Matéria.",
      intermediario: "🌡️ Energia e Transformações.",
      avancado: "🧪 Genética e Ecossistemas."
    },
    fisica: {
      basico: "⚙️ Estude Movimento e Força.",
      intermediario: "🔋 Energia e Trabalho.",
      avancado: "🌌 Eletromagnetismo e Relatividade."
    },
    quimica: {
      basico: "🧫 Tabela Periódica e Substâncias.",
      intermediario: "⚗️ Ligações Químicas.",
      avancado: "🧪 Reações Orgânicas e Equilíbrio."
    },
    biologia: {
      basico: "🌱 Estude Células e Seres Vivos.",
      intermediario: "🧬 Genética e Reprodução.",
      avancado: "🌍 Evolução e Biotecnologia."
    },
    sociologia: {
      basico: "👥 Cultura e Sociedade.",
      intermediario: "📊 Estratificação Social.",
      avancado: "🧠 Teorias Sociológicas."
    },
    filosofia: {
      basico: "💭 Ética e Moral.",
      intermediario: "📚 Pensadores Clássicos.",
      avancado: "🧠 Epistemologia e Existencialismo."
    },
    ingles: {
      basico: "🔤 Vocabulário Básico.",
      intermediario: "🗣️ Gramática e Conversação.",
      avancado: "📘 Textos Literários e Tradução."
    },
    educacao: {
      basico: "🏃‍♂️ Benefícios da Atividade Física.",
      intermediario: "🤸‍♀️ Esportes e Condicionamento.",
      avancado: "💪 Fisiologia e Treinamento."
    },
    artes: {
      basico: "🎨 Cores e Formas.",
      intermediario: "🖌️ História da Arte.",
      avancado: "🎭 Estilos e Expressões Artísticas."
    }
  };

  window.gerarRecomendacaoPopup = function () {
    const materia = document.getElementById("materiaPopup").value;
    const nivel = document.getElementById("nivelPopup").value;

    if (!materia || !nivel) {
      resultadoPopup.innerHTML = "⚠️ Por favor, selecione a matéria e o nível.";
      resultadoPopup.style.display = "block";
      return;
    }

    resultadoPopup.innerHTML = recomendacoesPopup[materia][nivel];
    resultadoPopup.style.display = "block";
  };
});
