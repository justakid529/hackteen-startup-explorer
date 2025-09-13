// nov serviço
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

  //Valida
  if (nome.length === 0 || nome.length > 20) {
    alert("O nome deve ter no máximo 20 caracteres.");
    return;
  }

  if (isNaN(nota) || nota <= 0 || nota >= 10) {
    alert("A nota deve ser um número maior que 0 e menor que 10.");
    return;
  }

  if (descricao.length < 30 || descricao.length > 50) {
    alert("A descrição deve ter entre 30 e 50 caracteres.");
    return;
  }

  if (preco.length > 20) {
    alert("O preço deve ter no máximo 20 caracteres.");
    return;
  }

  const urlRegex = /^(https?:\/\/)[^\s$.?#].[^\s]*$/;
  if (!urlRegex.test(link)) {
    alert("O link deve ser uma URL válida (começando com http ou https).");
    return;
  }

  if (!urlRegex.test(logo)) {
    alert("A logo deve ser uma URL válida (começando com http ou https).");
    return;
  }

  //se tem tudo passa
  const novoServico = { nome, descricao, preco, nota, link, logo };

  let lista = JSON.parse(localStorage.getItem(chave)) || [];
  lista.push(novoServico);
  localStorage.setItem(chave, JSON.stringify(lista));

  
  switch (categoria) {
    case "texto":
      window.location.href = "Geraçãotexto.html"; 
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



document.getElementById("resetBtn")?.addEventListener("click", function() {
  const categoria = document.querySelector(".services-title")?.dataset.categoria;
  if (!categoria) return;

  const chave = "services_" + categoria;
  localStorage.removeItem(chave);
  location.reload();
});

// form do contato que vai pro contato term
const form = document.getElementById('form-contato');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    if (!email.includes('@')) {
        alert('Por favor, insira um e-mail válido!');
        return;
    }

    this.reset();

  
    window.location.href = "contato-term.html";
});
