document.addEventListener("DOMContentLoaded", () => {
  
  


  // FORMULÁRIO CONTATO 
  const formContato = document.getElementById("form-contato");
  formContato?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    e.target.reset();
  });

  // AUDIO PLAYER 
  const playBtn1 = document.getElementById("playBtn1");
  const audio1 = document.getElementById("myAudio1");
  playBtn1?.addEventListener("click", () => {
    if (audio1.paused) audio1.play();
    else audio1.pause();
  });
  const playBtn2 = document.getElementById("playBtn2");
    const audio2 = document.getElementById("myAudio2");
    playBtn2?.addEventListener("click", () => {
      if (audio2.paused) audio2.play();
      else audio2.pause();
    });
    const playBtn3 = document.getElementById("playBtn3");
    const audio3 = document.getElementById("myAudio3");
    playBtn3?.addEventListener("click", () => {
      if (audio3.paused) audio3.play();
      else audio3.pause();
    });


  
});
