"use strict";

import { parseHTML } from "/js/utils/parseHTML.js";


const photosRenderer = {
    asCard: function(photo){
        let html = `<div class="card">
    <img src="${photo.url}" class="card-img-top" alt="${photo.descripcion}">
    <div class="card-body">
      <h5 class="card-title">${photo.titulo}</h5>
      <p class="card-text">${photo.descripcion}</p>
    </div>
  </div>`;


        let card = parseHTML(html);
        return card;
    },

    asDetails: function(photo){
        let html `<div></div>`;
        let details = parseHTML(html);
        return details;
    }
};

export { photosRenderer };