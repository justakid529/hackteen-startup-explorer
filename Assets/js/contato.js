
 // FORMULÁRIO CONTATO
const formContato = document.getElementById("form-contato");

formContato?.addEventListener("submit", (e) => {
  e.preventDefault(); 

  
  window.location.href = "/pages/contato-term.html";
});
