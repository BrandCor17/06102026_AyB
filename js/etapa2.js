/* ============================================================
   ETAPA 2 — nombre
============================================================ */
const giantName = document.querySelector(".giant-name");
if(giantName){
    giantName.addEventListener("mouseenter",()=>giantName.classList.add("name-glow"));
    giantName.addEventListener("mouseleave",()=>giantName.classList.remove("name-glow"));
}
