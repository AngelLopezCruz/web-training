// Declaramos una lista de imagenes
let listaDeImagenes = [
  { id: 0, url: 'http://cdn2.ticbeat.com/src/uploads/2017/10/RainbowSix-810x455.jpg', titulo: 'Primera imagen'},
  { id: 1, url: 'https://puregaming.es/wp-content/uploads/2018/02/rainbow-six-siege-1021x574.jpg', titulo: 'Segunda imagen'},
  { id: 2, url: 'https://media.redadn.es/imagenes/tom-clancys-rainbow-six-siege-pc-ps4-xbox-one_315158.jpg', titulo: 'Tercera imagen'},
  { id: 3, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt3JiwISskTDhqRGF8kkNELpabBD1NMhIuHgz4iybSUj0dblT7', titulo: 'Cuarta imagen'},
  { id: 4, url: 'http://static.alfabetajuega.com/abj_public_files/multimedia/imagenes/alfabetajuega-rainbow-six-siege-1-120418.jpg', titulo: 'Quinta imagen'}
];

// frontend - HTML + JS - servidor de la aplicacion - accede al backend para obtener la informacion que quiere mostrar
//      -- javascript - bases
//      -- jQuery + Handlebars
//      -- React.js - Diseñado por Facebook 
//      -- Vue.js - Diseñado por la comunidad - Es mas facil

// backend - JS - servidor de datos
//      -- node.js

// Conectar una aplicacion
//     -- frontend + backend

function crearCarousel(imagenes, idContenedor) {
  let opcionesHtml = '';
  let imagenesHtml = '';

  for(let i=0; i < imagenes.length; i++) {
    let imagen = imagenes[i];
    opcionesHtml += `
      <li data-target="#${idContenedor}" data-slide-to="${imagen.id}"${i == 0 ? ' class="active"' : ''}></li>
    `;

    imagenesHtml += `
      <div class="carousel-item${i == 0 ? ' active' : ''}">
        <img class="d-block w-100" src="${imagen.url}" alt="${imagen.titulo}">
      </div>
    `;
  }

  let carouselControllers = `
    <ol class="carousel-indicators">
      ${opcionesHtml}
    </ol>
    
    <div class="carousel-inner">
      ${imagenesHtml}
    </div>
    
    <a class="carousel-control-prev" href="#${idContenedor}" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>

    <a class="carousel-control-next" href="#${idContenedor}" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  `;

  console.log(carouselControllers);

  $(`#${idContenedor}`).append(carouselControllers);
}

$(function() {
  crearCarousel(listaDeImagenes, 'rainbow-carousel');
})