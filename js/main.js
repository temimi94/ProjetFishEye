'use strict';
/////////////////////////////////////////

// DATA
import ApiFishEye from './provider/ApiFishEye.js';

// HOMEPAGE
import HomePageBuilder from './home/HomePageBuilder.js';

// PH PAGES
import PhotographerProfil from './photographers/PhotographerProfil.js';
import DropDownMenu from './photographers/DropDownSort.js';
import MediaBuilder from './photographers/MediaBuilder.js';

(function appDispatch() {
    new ApiFishEye().getDataFishEye().then((data) => {
        if (window.location.pathname.includes("/photographers.html")) {
            // EN-TÊTE PROFIL PHOTOGRAPHE
            new PhotographerProfil().displayPhotographerProfil(data);

            // MENU DÉROULANT
            new DropDownMenu().dropDown(data);

            //GALERIE DE PHOTOGRAPHES & LIKES
            new MediaBuilder().photographersMedias(data);
            return
        }
        // HOMEPAGE (PHOTOGRAPHERS, SCROLL, FILTER)
        new HomePageBuilder().displayPhotographers(data);
    }).catch(() => {
        console.error('Impossible de charger ApiFishEye');
    })
})();
