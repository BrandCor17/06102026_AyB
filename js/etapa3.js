/* ============================================================
   ETAPA 3 — CARTA
============================================================ */

const envelopeWrap = document.querySelector(".envelope-wrap");
const letterHint = document.getElementById("letter-hint");
const letterNext = document.getElementById("letter-next");

if (envelopeWrap) {

    /* Abrir / cerrar sobre */
    envelopeWrap.addEventListener("click", (e) => {

        /*
            Si el clic fue en el botón Continuar,
            no hacemos nada aquí.
            El botón tendrá su propio evento.
        */
        if (e.target.closest("#letter-next")) {
            return;
        }

        envelopeWrap.classList.toggle("open");

        if (envelopeWrap.classList.contains("open")) {

            if (letterHint) {
                letterHint.textContent = "la carta es para ti ♡";
            }

            if (letterNext) {
                letterNext.classList.remove("hidden");
            }

        } else {

            if (letterHint) {
                letterHint.textContent = "toca el sobre para abrirlo";
            }

            if (letterNext) {
                letterNext.classList.add("hidden");
            }
        }
    });


    /* ========================================================
       BOTÓN CONTINUAR → ETAPA 4
    ======================================================== */

    if (letterNext) {

        letterNext.addEventListener("click", (e) => {

            /* Evita que el clic vuelva a activar el sobre */
            e.stopPropagation();

            /*
                Buscar la etapa actual y la siguiente
            */

            const currentStage = document.getElementById("stage3");
            const nextStage = document.getElementById("stage4");

            if (currentStage && nextStage) {

                currentStage.classList.remove("active");

                nextStage.classList.add("active");

                /*
                    Llevar la página nuevamente
                    hacia la parte superior
                */

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        });
    }
}

