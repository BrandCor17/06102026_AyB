/* ============================================================
   ETAPA 8 — final
============================================================ */
const finalStage=document.getElementById("stage8");
if(finalStage){
    finalStage.addEventListener("click",()=>{
        const heart=document.querySelector(".heart-big");
        if(heart){
            heart.animate(
                [
                    {transform:"scale(1)"},
                    {transform:"scale(1.18)"},
                    {transform:"scale(1)"}
                ],
                {duration:600,easing:"ease-out"}
            );
        }
    });
}
