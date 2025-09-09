// ------- Salvar novo serviço --------
document.getElementById("serviceForm")?.addEventListener("submit", function(event) {
  event.preventDefault();

  const categoria = document.getElementById("categoria").value;
  const chave = "services_" + categoria;

  const novoServico = {
    nome: document.getElementById("nome").value,
    descricao: document.getElementById("descricao").value,
    preco: document.getElementById("preco").value,
    nota: document.getElementById("nota").value,
    link: document.getElementById("link").value,
    logo: document.getElementById("logo").value
  };

  let lista = JSON.parse(localStorage.getItem(chave)) || [];
  lista.push(novoServico);
  localStorage.setItem(chave, JSON.stringify(lista));

  // 🔥 redireciona para a página correta
  switch (categoria) {
    case "texto":
      window.location.href = "Geraçãotexto.html"; // Produção de Texto
      break;
    case "imagem":
      window.location.href = "Imagens.html";
      break;
    case "org":
      window.location.href = "Organização.html";
      break;
    case "format":
      window.location.href = "Formatação.html";
      break;
    case "estudo":
      window.location.href = "Estudar.html";
      break;
  }
});

// ------- Carregar serviços salvos --------
function carregarServicos(categoria) {
  const chave = "services_" + categoria;
  const lista = JSON.parse(localStorage.getItem(chave)) || [];
  const container = document.querySelector(".services-list");

  if (!container) return;

  lista.forEach(servico => {
    const a = document.createElement("a");
    a.href = servico.link;

    const div = document.createElement("div");
    div.className = "service-line";

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

    a.appendChild(div);
    container.appendChild(a);
  });
}

// ------- Resetar lista --------
document.getElementById("resetBtn")?.addEventListener("click", function() {
  const categoria = document.querySelector(".services-title")?.dataset.categoria;
  if (!categoria) return;

  const chave = "services_" + categoria;
  localStorage.removeItem(chave);
  location.reload();
});
