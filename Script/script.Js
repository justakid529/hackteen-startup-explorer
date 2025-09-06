document.addEventListener("DOMContentLoaded", () => {
 
  const form = document.getElementById("serviceForm");
  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const nota = document.getElementById("nota").value.trim();
      const descricao = document.getElementById("descricao").value.trim();
      const logo = document.getElementById("logo").value.trim();
      const preco = document.getElementById("preco").value.trim();
      const categoria = document.querySelector(".Select1").value;
      const link = document.getElementById("link").value.trim();

      const novoServico = { nome, nota, descricao, logo, preco, categoria, link };

      let servicos = JSON.parse(localStorage.getItem("servicos")) || [];
      servicos.push(novoServico);
      localStorage.setItem("servicos", JSON.stringify(servicos));

      alert("✅ Serviço adicionado com sucesso!");
      window.location.href = "geraçãotexto.html";
    });
  }

  //lista
  const lista = document.querySelector(".services-list");
  if (lista) {
    let servicos = JSON.parse(localStorage.getItem("servicos")) || [];

    servicos.forEach(s => {
      if (s.categoria === "Produção de Texto") {
        const item = document.createElement("a");
        item.href = s.link;
        item.target = "_blank";

        item.innerHTML = `
          <div class="service-line">
            <div class="service-info">
              <h3 class="service-name">${s.nome} | ${s.nota}/10</h3>
              <p class="service-desc">${s.descricao}</p>
            </div>
            <div class="service-side">
              <img src="${s.logo}" class="service-logo" alt="${s.nome}">
              <span class="service-price">${s.preco}</span>
            </div>
          </div>
        `;

        lista.appendChild(item);
      }
    });
  }

  //reset
  const resetBtn = document.getElementById("resetBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("⚠️ Isso vai apagar os serviços adicionados. Deseja continuar?")) {
        localStorage.removeItem("servicos");
        location.reload(); // recarrega a página só com os 5 iniciais
      }
    });
  }
});
