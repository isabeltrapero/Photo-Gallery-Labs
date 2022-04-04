"use strict";

import { galleryRenderer } from "./renderers/gallery";
import { photosRenderer } from "/js/renderers/photos.js";
import { parseHTML } from "/js/utils/parseHTML.js";

function main() {
    /*
    let miP = document.getElementById("miParrafo");
    console.log(miP);
    miP.textContent = "He puesto esto con JS";
    miP.style.backgroundColor = "red";
    miP.style.color = "white";
    miP.style.fontSize = "200%";

    let miDiv = document.createElement("div");
    miDiv.textContent = "He creado este div";
    miDiv.style.border = "1px solid black";

    let container = document.querySelector(".container");
    container.prepend(miDiv); 
    
    let miImagen = document.createElement("img");
    miImagen.src = "/images/example.jpg"
    miImagen.title = "Imagen de ejemplo";
    miImagen.style.width = "100%";
    miP.append(miImagen);
    

    let photosArray = document.querySelectorAll("div.card");

    for(let card of photosArray){
        card.style.backgroundColor ="pink";
    }
    */
    let url ="images/example.jpg";
    let titulo = "Image";
    let descripcion = "This is a new image";

    let html = `<div class="card">
    <img src="${url}" class="card-img-top" alt="${descripcion}">
    <div class="card-body">
      <h5 class="card-title">${titulo}</h5>
      <p class="card-text">${descripcion}</p>
    </div>
  </div>`;
    

    let photo = {
        titulo: "Una imagen",
        descripcion: "Esta es una imagen",
        url: "images/example.jpg",

    };

    let card = photosRenderer.asCard(photo);
    let col = document.querySelector("#columnaJS"); // es igual que hacer document.getElementById("columnaJS")
    col.append(card);
    let gallery = galleryRenderer.asCardGallery(photos, 2);
   



}

document.addEventListener("DOMContentLoaded", main);

