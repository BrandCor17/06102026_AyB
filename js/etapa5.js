/* ============================================================
   ETAPA 5 — regalos
============================================================ */
const giftMessage=document.getElementById("gift-message");
const giftText=giftMessage.querySelector("p");
const closeGift=giftMessage.querySelector(".close-message");

document.querySelectorAll(".gift-card").forEach(card=>{
    card.addEventListener("click",()=>{
        document.querySelectorAll(".gift-card").forEach(c=>{
            if(c!==card)c.classList.remove("open");
        });
        card.classList.toggle("open");
        if(card.classList.contains("open")){
            giftText.textContent=card.dataset.message;
            giftMessage.classList.add("open");
        }
    });
});

closeGift.addEventListener("click",()=>{
    giftMessage.classList.remove("open");
    document.querySelectorAll(".gift-card").forEach(c=>c.classList.remove("open"));
});
