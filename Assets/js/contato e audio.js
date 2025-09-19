document.addEventListener("DOMContentLoaded", () => {
  // ================= VARIÁVEIS =================
  


  // ================= FORMULÁRIO CONTATO =================
  const formContato = document.getElementById("form-contato");
  formContato?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    e.target.reset();
  });

  // ================= AUDIO PLAYER =================
  const playBtn = document.getElementById("playBtn");
  const audio = document.getElementById("myAudio");
  playBtn?.addEventListener("click", () => {
    if (audio.paused) audio.play();
    else audio.pause();
  });



  // ================= CALCULADORA =================
});