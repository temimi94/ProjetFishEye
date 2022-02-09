'use strict';
/////////////////////////////////////////

export default class Modal {
    // Événements, lancez/fermez le modal en cliquant sur le bouton « Contactez-moi »
    modal(data) {
        let modalBtn = document.getElementById("ph-contact");
        let closeBtn = document.getElementsByClassName('close-form-icon');

        if (modalBtn) {
            modalBtn.addEventListener('click', this.launchModal);
            this.formPhName(data);
        }
        if (closeBtn) {
            closeBtn[0].addEventListener('click', this.closeModal);
        }
    }

    // LANCER MODAL
    launchModal() {
        let modalbg = document.getElementById("form-dialog");

        modalbg.style.display = 'block';
    }

    // FERMER MODAL
    closeModal() {
        let modalbg = document.getElementById("form-dialog");

        modalbg.style.display = 'none';
    }

    // DISPLAY NOM DU PHOTOGRAPHE DANS LE FORM
    formPhName(data) {
        let id = window.location.search.split('id=')[1];
        let photographers = !id ? data : data.filter(photographer => photographer.id == id);
        let phName = document.getElementById('ph-form-name');
        let phNameTemplate = `${photographers[0].name}`
        phName.innerHTML = phNameTemplate;
    }
}
