/* ============================================================
   ETAPA 4 — RECUERDOS + VISOR DE FOTOS
============================================================ */

const photoModal = document.getElementById("photo-modal");
const modalImage = document.getElementById("modal-image");
const modalCaption = document.getElementById("modal-caption");
const photoClose = document.getElementById("photo-close");


/* ============================================================
   TARJETAS DE RECUERDOS
============================================================ */

document.querySelectorAll(".memory-card").forEach(card => {

    card.addEventListener("click", () => {

        const img = card.querySelector("img");

        if (!img || !photoModal || !modalImage) {
            return;
        }

        /* Colocar la imagen seleccionada */
        modalImage.src = img.src;

        /* Colocar el texto */
        if (modalCaption) {

            modalCaption.textContent =
                card.dataset.caption || "";
        }

        /* Abrir visor */
        photoModal.classList.add("open");

        /*
         * Evitamos que el navegador mueva
         * la página mientras el visor está abierto.
         */
        document.body.classList.add("photo-modal-open");
    });

});


/* ============================================================
   CERRAR VISOR
============================================================ */

function closePhoto() {

    if (photoModal) {
        photoModal.classList.remove("open");
    }

    if (modalImage) {
        modalImage.src = "";
    }

    if (modalCaption) {
        modalCaption.textContent = "";
    }

    document.body.classList.remove("photo-modal-open");
}


/* ============================================================
   BOTÓN X
============================================================ */

if (photoClose) {

    photoClose.addEventListener("click", event => {

        event.stopPropagation();

        closePhoto();
    });
}


/* ============================================================
   TOCAR FUERA DE LA FOTO
============================================================ */

if (photoModal) {

    photoModal.addEventListener("click", event => {

        if (event.target === photoModal) {

            closePhoto();
        }
    });
}


/* ============================================================
   BOTÓN ATRÁS DEL TELÉFONO / ESC
============================================================ */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closePhoto();
    }
});