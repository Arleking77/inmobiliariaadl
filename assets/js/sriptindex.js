

import { propiedades_alquiler } from "./alquiler.js";
import { propiedades_venta } from "./ventas.js";



function mostrarDataEnCards(propiedades, contenedor) {
  if (!contenedor) {
    return; 
  }
  
  propiedades.forEach((propiedad) => {
    const {
      nombre,
      src,
      descripcion,
      ubicacion,
      habitaciones,
      costo,
      smoke,
      pets,
    } = propiedad;

   
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";
    card.innerHTML = `
      <div class="card">
        <img
            src=${src}
            class="card-img-top"
            alt="Imagen del departamento"/>

            <div class="card-body">

            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">${descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> 4 Baños</p>
            <p><i class="fas fa-dollar-sign"></i> ${costo}</p>

        ${
          smoke
            ? '<p class="text-success"> <i class="fas fa-smoking"></i> Permitido fumar</p>'
            : '<p class="text-danger"> <i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
        }

        ${
          pets
            ? '<p class="text-success"> <i class="fas fa-paw"></i> Mascotas permitidas</p>'
            : '<p class="text-danger"> <i class="fas fa-ban"></i> No se permiten mascotas</p>'
        }
      </div>
    `;


    contenedor.appendChild(card);
  });
}

// Llamadas a la función para mostrar propiedades en cada página
const propiedadesAlquilerIndex = document.querySelector("#propiedadesAlquilerIndex");
mostrarDataEnCards(propiedades_alquiler.slice(0, 3), propiedadesAlquilerIndex); 

const propiedadesVentaIndex = document.querySelector("#propiedadesVentaIndex");
mostrarDataEnCards(propiedades_venta.slice(0, 3), propiedadesVentaIndex); 

const propiedadesAlquiler = document.querySelector("#propiedadesAlquiler");
mostrarDataEnCards(propiedades_alquiler, propiedadesAlquiler);

const propiedadesVenta = document.querySelector("#propiedadesVenta");
mostrarDataEnCards(propiedades_venta, propiedadesVenta);


