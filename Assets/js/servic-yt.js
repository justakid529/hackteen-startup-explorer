// ================= FORMULÁRIO GERAL =================
document.getElementById("serviceForm")?.addEventListener("submit", function(event) {
  event.preventDefault();

  const categoria = document.getElementById("categoria").value;
  const chave = "services_" + categoria;

  const nome = document.getElementById("nome").value.trim();
  const descricao = document.getElementById("descricao").value.trim();
  const preco = document.getElementById("preco").value.trim();
  const nota = parseFloat(document.getElementById("nota").value);
  const link = document.getElementById("link").value.trim();
  const logo = document.getElementById("logo").value.trim();

  // === Validação ===
  if (nome.length === 0 || nome.length > 20) { alert("O nome deve ter no máximo 20 caracteres."); return; }
  if (isNaN(nota) || nota < 0 || nota > 10) { alert("A nota deve ser entre 0 e 10."); return; }
  if (descricao.length < 30 || descricao.length > 80) { alert("A descrição deve ter entre 30 e 80 caracteres."); return; }
  if (preco.length > 30) { alert("O preço deve ter no máximo 30 caracteres."); return; }

  const urlRegex = /^(https?:\/\/)[^\s$.?#].[^\s]*$/;
  if (!urlRegex.test(link)) { alert("O link deve ser uma URL válida."); return; }
  if (!urlRegex.test(logo)) { alert("A logo deve ser uma URL válida."); return; }

  const novoServico = { nome, descricao, preco, nota, link, logo };
  let lista = JSON.parse(localStorage.getItem(chave)) || [];
  lista.push(novoServico);
  localStorage.setItem(chave, JSON.stringify(lista));

  // Redireciona conforme categoria
  switch(categoria){
    case "texto": window.location.href="Geraçãotexto.html"; break;
    case "imagem": window.location.href="Imagens.html"; break;
    case "org": window.location.href="Organização.html"; break;
    case "format": window.location.href="Formatação.html"; break;
  }
});

// ================= FORMULÁRIO YOUTUBE =================
document.getElementById("youtubeForm")?.addEventListener("submit", function(event) {
  event.preventDefault();

  const titulo = document.getElementById("titulo").value.trim();
  const nota = parseFloat(document.getElementById("nota").value);
  const descricao = document.getElementById("descricao").value.trim();
  const link = document.getElementById("link").value.trim();
  

  // === Validação ===
  if (titulo.length === 0 || titulo.length > 50) { alert("O título deve ter no máximo 50 caracteres."); return; }
  if (isNaN(nota) || nota < 0 || nota > 10) { alert("A nota deve ser entre 0 e 10."); return; }
  if (descricao.length < 20 || descricao.length > 80) { alert("A descrição deve ter entre 20 e 80 caracteres."); return; }
  const urlRegex = /^(https?:\/\/)[^\s$.?#].[^\s]*$/;
  if (!urlRegex.test(link)) { alert("O link deve ser uma URL válida."); return; }

  const novoVideo = { titulo, nota, descricao, link };
  let listaVideos = JSON.parse(localStorage.getItem("youtube")) || [];
  listaVideos.push(novoVideo);
  localStorage.setItem("youtube", JSON.stringify(listaVideos));

  // Redireciona automaticamente para a página de vídeos
  window.location.href = "Youtube.html";
});

// ================= FUNÇÃO CARREGAR SERVIÇOS/VIDEOS =================
function carregarServicos(categoria) {
  let chave = categoria === "youtube" ? "youtube" : "services_" + categoria;
  const lista = JSON.parse(localStorage.getItem(chave)) || [];
  const container = document.querySelector(".services-list");
  if (!container) return;

  // Não limpar o container para manter os exemplos hardcoded
  lista.forEach(servico => {
    const a = document.createElement("a");
    a.href = servico.link;
    a.target = "_blank";
    const div = document.createElement("div");
    div.className = "service-line";

    if(categoria === "youtube"){
      div.innerHTML = `
        <div class="service-info">
          <h3 class="service-name">${servico.titulo} | ${servico.nota}/10</h3>
          <p class="service-desc">${servico.descricao}</p>
        </div>
        <div class="service-side">
          <iframe width="200" height="113" src="${converterParaEmbed(servico.link)}" frameborder="0" allowfullscreen></iframe>
        </div>
      `;
    } else {
      div.innerHTML = `
        <div class="service-info">
          <h3 class="service-name">${servico.nome} | ${servico.nota}/10</h3>
          <p class="service-desc">${servico.descricao}</p>
        </div>
        <div class="service-side">
          <img src="${servico.logo}" class="service-logo" alt="${servico.nome}">
          <span class="service-price">${servico.preco}</span>
        </div>
      `;
    }

    a.appendChild(div);
    container.appendChild(a);
  });
}

// ================= FUNÇÃO YOUTUBE EMBED =================
function converterParaEmbed(link) {
  let videoId = "";
  if(link.includes("watch?v=")) videoId = link.split("watch?v=")[1].split("&")[0];
  else if(link.includes("youtu.be/")) videoId = link.split("youtu.be/")[1].split("?")[0];
  return `https://www.youtube.com/embed/${videoId}`;
}

// ================= RESET =================
document.getElementById("resetBtn")?.addEventListener("click", function(){
  const categoria = document.querySelector(".services-title")?.dataset.categoria;
  if(!categoria) return;
  const chave = categoria === "youtube" ? "youtube" : "services_" + categoria;
  localStorage.removeItem(chave);
  location.reload();
});

// ================= CARREGAR AUTOMÁTICO =================
document.addEventListener("DOMContentLoaded", () => {
  const categoria = document.querySelector(".services-title")?.dataset.categoria;
  if(categoria) carregarServicos(categoria);
});

