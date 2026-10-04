/* ============================================================
   GENERAL — navegación, partículas y efectos compartidos
============================================================ */

const stages = document.querySelectorAll(".stage");

function showStage(number){
    const current = document.querySelector(".stage.active");
    const next = document.getElementById("stage" + number);
    if(!next || current === next) return;

    if(current) current.classList.remove("active");
    next.classList.add("active");

    window.scrollTo({top:0,behavior:"instant"});

    document.getElementById("flash").classList.remove("flash-on");
    void document.getElementById("flash").offsetWidth;
    document.getElementById("flash").classList.add("flash-on");
}

document.addEventListener("click", e=>{
    const button = e.target.closest("[data-next]");
    if(button){
        showStage(Number(button.dataset.next));
    }
});

/* Partículas */
const particleBox = document.getElementById("particles");
for(let i=0;i<70;i++){
    const p=document.createElement("span");
    p.className="particle";
    p.style.left=Math.random()*100+"%";
    p.style.animationDuration=(7+Math.random()*12)+"s";
    p.style.animationDelay=(-Math.random()*15)+"s";
    p.style.opacity=(.15+Math.random()*.65);
    particleBox.appendChild(p);
}

/* Tecla Escape para cerrar overlays */
document.addEventListener("keydown",e=>{
    if(e.key==="Escape"){
        document.getElementById("photo-modal")?.classList.remove("open");
        document.getElementById("gift-message")?.classList.remove("open");
    }
});
