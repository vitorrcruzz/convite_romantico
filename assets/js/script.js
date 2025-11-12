/* assets/js/script.js
   Última versão: botão "Remarcar data" leva direto ao WhatsApp com mensagem personalizada.
*/

const NUMERO_WHATSAPP = "5511949901099";

document.addEventListener("DOMContentLoaded", () => {
  const heartContainer = document.getElementById("heart-container");
  const conviteCard = document.getElementById("convite-card");
  const btnSim = document.getElementById("btnSim");
  const btnRemarcar = document.getElementById("btnRemarcar");

  // Animação: coração → dissolve → mostra o convite
  if (heartContainer && conviteCard) {
    setTimeout(() => {
      heartContainer.style.transition = "opacity 1.8s ease";
      heartContainer.style.opacity = "0";
      setTimeout(() => {
        if (heartContainer.parentNode) heartContainer.parentNode.removeChild(heartContainer);
        conviteCard.classList.remove("hidden");
        conviteCard.classList.add("visible");
      }, 1800);
    }, 2800);
  }

  // Botão "Sim, aceito"
  if (btnSim) {
    btnSim.addEventListener("click", (e) => {
      e.preventDefault();
      const mensagem = encodeURIComponent("Sim, quero sair com você! ❤️");
      window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${mensagem}`, "_blank");
    });
  }

  // Botão "Remarcar data"
  if (btnRemarcar) {
    btnRemarcar.addEventListener("click", (e) => {
      e.preventDefault();
      const texto =
        "Nesse dia não consigo, podemos remarcar para o dia (insira uma data que você esteja disponível)?";
      const mensagem = encodeURIComponent(texto);
      window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${mensagem}`, "_blank");
    });
  }
});
