'use strict';
/////////////////////////////////////////

import GalleryFactory from '../Factory/GalleryFactory.js';

export default class DropDownMenu {
    // Événements, ouvrir/fermer la liste déroulanteMenu
    dropDown(data) {
        let arrowOpen = document.getElementsByClassName('sort-btn');
        let arrowClose = document.getElementsByClassName('arrow-up-close');
        let hiddenSort = document.getElementsByClassName('hidden-sort');

        if (arrowOpen) {
            arrowOpen[0].addEventListener('click', () => {
                hiddenSort[0].style.display = 'block';
            });
            this.sortMedias(data);
        }
        if (arrowClose) {
            arrowClose[0].addEventListener('click', () => {
                hiddenSort[0].style.display = "none";
            });
        }
    }

    // TRIER LES MÉDIAS (POPULARITÉ, DONNÉES, TITRE)
    sortMedias(data) {
        let mediaArraySort = [];
        let media = data.media;
        let btnSort = document.querySelector('.sort-btn');
        let hiddenSort = document.getElementsByClassName('hidden-sort');
        let sortBtn = Array.from(document.getElementsByClassName('sort'));

        sortBtn.forEach((btn, index) => btn.addEventListener('click', () => {
            hiddenSort[0].style.display = "none";
            if (index == 0) {
                btnSort.innerHTML = `Popularité`;

                mediaArraySort = media.sort((a, b) => { // TRIER PAR POPULARITÉ  
                    return b.likes - a.likes
                })

            } else if (index == 1) {
                btnSort.innerHTML = `Date`;

                mediaArraySort = media.sort((a, b) => { // TRIER PAR DATE 
                    return new Date(a.date).valueOf() - new Date(b.date).valueOf();
                })

            } else if (index == 2) {
                btnSort.innerHTML = `Titre`;

                mediaArraySort = media.sort((a, b) => { //TRIER PAR TITRE
                    if (a.photoName.toLowerCase() < b.photoName.toLowerCase()) {
                        return -1;
                    } else if (a.photoName.toLowerCase() > b.photoName.toLowerCase()) {
                        return 1;
                    }
                })
            }
            this.displaySortMedia(mediaArraySort);
        }));
    }

    displaySortMedia(mediaArraySort) {
        // DISPLAY PHOTOGRAPHERS FONCTIONNE AVEC LES TRIES
        document.getElementById("ph-works").innerHTML = "";
        new GalleryFactory().builder(mediaArraySort);
    }
}