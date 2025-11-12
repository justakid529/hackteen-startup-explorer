const FOLHAS_POR_HORA = 20;
const FOLHAS_POR_CADERNO = 100;
const FOLHAS_POR_ARVORE = 10000;
function animarNumero(
  elemento,
  valorFinal,
  prefixo = "",
  sufixo = "",
  duracao = 800
) {
  let inicio = 0;
  const passo = valorFinal / (duracao / 16); // taxa de incremento
  const intervalo = setInterval(() => {
    inicio += passo;
    if (inicio >= valorFinal) {
      inicio = valorFinal;
      clearInterval(intervalo);
    }
    elemento.innerHTML =
      prefixo + Math.floor(inicio).toLocaleString("pt-BR") + sufixo;
  }, 16);
}

function calcularCalc() {
  const horas = parseInt(document.getElementById("horas-calc")?.value) || 0;
  const dias = parseInt(document.getElementById("dias-calc")?.value) || 0;
  const folhas = horas * dias * FOLHAS_POR_HORA;
  const horasprda = horas * dias;
  const cadernos = Math.ceil(folhas / FOLHAS_POR_CADERNO);
  const arvores = (folhas / FOLHAS_POR_ARVORE).toFixed(3);
  const resultado = document.getElementById("resultado-calc");

  if (resultado && horas && dias) {
    resultado.classList.remove("show"); // reseta animação
    resultado.innerHTML = `
       <span id = "hourspan"><b id="rHoras"></b> Horas estudadas!</span><br>
       <b id="rFolhas"></b> folhas economizadas<br>
       Equivalente a <b id="rCadernos"></b> cadernos<br>
       Aproximadamente <b id="rArvores"></b> árvores preservadas
    `;
    setTimeout(() => resultado.classList.add("show"), 50);

    // Anima os números
    animarNumero(document.getElementById("rHoras"), horasprda);
    animarNumero(document.getElementById("rFolhas"), folhas);
    animarNumero(document.getElementById("rCadernos"), cadernos);
    document.getElementById("rArvores").innerText = arvores; // valor fixo com casas decimais
  }
}
