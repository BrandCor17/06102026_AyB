/* ============================================================
   ETAPA 7 — pastel
============================================================ */
const blowBtn=document.getElementById("blow-btn");
const cakeMessage=document.getElementById("cake-message");
const cakeNext=document.getElementById("cake-next");

blowBtn.addEventListener("click",()=>{
    document.querySelectorAll(".candle").forEach(c=>c.classList.add("off"));
    blowBtn.classList.add("hidden");

    cakeMessage.textContent=
        "Que ese deseo encuentre el camino hasta ti. Y si tarda un poquito, aquí estaré acompañándote.";

    setTimeout(()=>{
        cakeNext.classList.remove("hidden");
    },2200);
});
