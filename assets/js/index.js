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
                <pclass="card-text">${venta.descripcion}"</pclass=>
                <p>
                  <i class="fas fa-map-marker-alt"></i>${venta.ubicacion}
                </p>
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