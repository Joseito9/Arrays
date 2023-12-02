import propiedadesAlquiler from "./data/propiedades_alquiler.js";
import propiedadesVenta from "./data/propiedades_venta.js";

const listaPropiedades = (propiedades, idContainer) => {
  const container = document.getElementById(idContainer);

  const listaLimitada = propiedades.slice(0, 3);

  listaLimitada.forEach((propiedad) => {
    const card = document.createElement("div");
    card.className = "row";

    const cardContent = `
    <div class="col-md-4 mb-4">
    <div class="card">
    <img src=" ${propiedad.src} " class="card-img-top" alt="${
      propiedad.nombre
    }" />
    <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text"></p>
    <p><i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion}</p>
    <p><i class="fas fa-bed"></i>${
      propiedad.habitaciones
    } |<i class="fas fa-bath"></i>{" "}${propiedad.baños}</p>
    <p><i class="fas fa-dollar-sign"></i>${propiedad.costo.toLocaleString(
      "CLP"
    )}</p>
    <p class="${propiedad.smoke ? "text-success" : "text-danger"}"> 
    <i class="fas ${propiedad.smoke ? "fa-smoking" : "fa-smoking-ban"}"></i>
    ${propiedad.smoke ? "Permitido Fumar" : "No se permite fumar"}
    </p>
    <p class="${propiedad.pets ? "text-success" : "text-danger"}"> 
    <i class="fas ${propiedad.pets ? "fa-paw" : "fa-ban"}"></i>
    ${propiedad.pets ? "Mascotas Permitidas " : "No se permiten mascotas"}
    </p>
    </div>
    </div>
    `;

    card.innerHTML = cardContent;

    container.appendChild(card);
  });
};

listaPropiedades(propiedadesAlquiler, "alquiler");
listaPropiedades(propiedadesVenta, "venta");