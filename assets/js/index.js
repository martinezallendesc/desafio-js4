// 1. Creo las variables identificando los elementos del dom


const ventaDiv = document.querySelector("#venta")
const ventaRow = document.querySelector(".row")


// 2. Hago el FOR

for (let venta of propiedades_venta) {
//Qué acción va a suceder con esta variable venta que definí

ventaRow.innerHTML += `

<div class="row">
          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${venta.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">${venta.nombre}</h5>
                <p class="card-text">${venta.descripcion}></p>
                <i class="fas fa-map-marker-alt"></i>${venta.ubicacion}
                <p>
                  <i class="fas fa-bed"></i>${venta.habitaciones}
                  <i class="fas fa-bath"></i>${venta.banios}
                </p>
                <p><i class="fas fa-dollar-sign"></i>${venta.costo}</p>
                <p class="text-${venta.smoke ? "success" : "danger"}"> 
                  ${ venta.smoke ? `<i class="fas fa-smoking"></i>` : `<i class="fas fa-smoking-ban"></i>`}
                </p>
                <p class="text-${venta.pets ? "success" : "danger" }">
                  ${venta.pets ? `<i class="fas fa-paw"></i>` : `<i class="fas fa-ban"></i>`}
                </p>
              </div>
            </div>
          </div>

`}


// 1. Creo las variables identificando los elementos del dom


const arriendoDiv = document.querySelector("#alquiler")
const arriendoRow = document.querySelector(".row")


// 2. Hago el FOR

for (let arriendo of propiedades_arriendo) {
//Qué acción va a suceder con esta variable venta que definí

ventaRow.innerHTML += `

<div class="row">
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="${arriendo.src}" class="card-img-top" alt="Imagen del departamento" />
              <div class="card-body">
                <h5 class="card-title">${arriendo.nombre}></h5>
                <p class="card-text">${arriendo.descripcion}</p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>${arriendo.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i>${arriendo.habitaciones}
                  <i class="fas fa-bath"></i>${arriendo.banios}
                </p>
                <p><i class="fas fa-dollar-sign"></i>${arriendo.costo}</p>
                <p class="text-${arriendoa.smoke ? "success" : "danger"}"> 
                  ${ arriendo.smoke ? `<i class="fas fa-smoking"></i>` : `<i class="fas fa-smoking-ban"></i>`}
                </p>
                <p class="text-${arriendo.pets ? "success" : "danger" }">
                  ${arriendo.pets ? `<i class="fas fa-paw"></i>` : `<i class="fas fa-ban"></i>`}
                </p>
              </div>
            </div>
          </div>

`}