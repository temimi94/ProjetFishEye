'use strict';
/////////////////////////////////////////


import Scroll from './Scroll.js';

// AFFICHER TOUS LES PHOTOGRAPHES PAR DÉFAUT
export default class HomePageBuilder {
    // Construisez la section photographes, appelez la fonction le bouton 'passer au contenu'
    displayPhotographers(data) {
        let photographers = data.photographers;
        photographers.map(photographe => {
            let sectionPhotographers = document.getElementById('photographers');
            let articlePhotographers = document.createElement('article');
            articlePhotographers.className = photographe.tags.join(' ') + ' articlePh';
            let templatePhotographer = `
            <a href="photographers.html?id=${photographe.id}" title="${photographe.name}">
                <img src="${photographe.portrait}" alt="${photographe.alt}">
                <h2 class="name">${photographe.name}</h2>
            </a>
            <p class="location">${photographe.city}, ${photographe.country}</p>
            <p class="tagline">${photographe.tagline}</p>
            <p class="price">${photographe.price}€/jour</p>
            `

            sectionPhotographers.appendChild(articlePhotographers);
            articlePhotographers.innerHTML = templatePhotographer;
        })
        new Scroll().scrollButton();
    }
}
