// -Se entrega si o si con GitHub 
// -Tiene que estar todo estilado
// -Minimo 2 archivos JS
// -Si o si fetch (a json y/o api)
// -Ordenar archivos en carpetas
// -TODO con dom, nada de prompt, console ni alert de js
// -Circuito completo de la info
// -Librerias JS (sweetalert/toasify, etc)
// -try-catch-finally


Swal.fire({
  title: "Página de pedidos",
  text: "Gracias por elegirnos. Llene los campos para proceder con su pedido",
  icon: "info"
})

const rellenos = [
    {
        id: 1,nombre: "Dulce de leche",precio: 1000
    },
    {
        id: 2,nombre: "Crema chantilly",precio: 1500
    },
    {
        id: 3,nombre: "Crema pastelera",precio: 900
    },
    {
        id: 4,nombre: "Crema de chocolate",precio: 1600
    }
]

// Uso de fetch

let sabores = document.getElementById("rellenos")

fetch("./DB/data.json")
.then(response => response.json())
.then(data => {

const ulSabores = document.createElement("ul")

data.forEach((relleno) => {
    const capa = document.createElement("li")
    capa.className = "card"
    capa.textContent = `${relleno.nombre}`
    ulSabores.appendChild(capa)
})

sabores.appendChild(ulSabores)
}

)


const bizcochuelos = [
    {
        id: 1,nombre: "Vainilla",precio: 1500
    },
    {
        id: 2,nombre: "Chocolate",precio: 1800
    },
    {
        id: 3,nombre: "Combinado",precio: 2000
    }
]

const bizcocho = document.getElementById("bizcochuelos")

const ulBizcocho = document.createElement("ul")

bizcochuelos.forEach((bizcochuelo) => {
    const bizco = document.createElement("li")
    bizco.className = "card"
    bizco.textContent = `${bizcochuelo.nombre}`
    ulBizcocho.appendChild(bizco)
})

bizcocho.appendChild(ulBizcocho)
    

const personalizaciones = [
    {
        id:1,nombre: "Comestible",precio: 15000
    },

    {
        id:2,nombre: "Porcelana",precio: 20000

    }
]

const personal = document.getElementById("personalizaciones")

const ulPersonal = document.createElement("ul")

personalizaciones.forEach((personalizacion) => {
    const trabajo = document.createElement("li")
    trabajo.className = "card"
    trabajo.textContent = `${personalizacion.nombre}`
    ulPersonal.appendChild(trabajo)
})

personal.appendChild(ulPersonal)

const porciones = [
    {
        id: 1,nombre: "15 porciones",precio: 5000
    },
    {
        id: 2,nombre: "30 porciones",precio: 7000
    },
    {
        id: 3,nombre: "35 porciones",precio: 9000
    },
    {
        id: 4,nombre: "45 porciones",precio: 12000
    }
]

const eleccionPorcion = document.getElementById("porciones")

const ulPorcion = document.createElement("ul")

porciones.forEach((porcion) => {
    const porcionElegida = document.createElement("li")
    porcionElegida.className = "card"
    porcionElegida.textContent = `${porcion.nombre}`
    ulPorcion.appendChild(porcionElegida)
})

eleccionPorcion.appendChild(ulPorcion)



const selectRelleno = document.getElementById("ingresarRelleno")

rellenos.forEach((relleno) => {
    const opcion = document.createElement("option")
    opcion.value = relleno.id
    opcion.textContent = `${relleno.nombre}`
    selectRelleno.appendChild(opcion)
})
const selectsgdoRelleno = document.getElementById("ingresarsgdoRelleno")

rellenos.forEach((relleno) => {
    const opcion = document.createElement("option")
    opcion.value = relleno.id
    opcion.textContent = `${relleno.nombre}`
    selectsgdoRelleno.appendChild(opcion)
})

const selectBizcochuelo = document.getElementById("ingresarBizcochuelo")

bizcochuelos.forEach((bizcochuelo) => {
    const opcion = document.createElement("option")
    opcion.value = bizcochuelo.id
    opcion.textContent = `${bizcochuelo.nombre}`
    selectBizcochuelo.appendChild(opcion)
})
const selectPersonalizacion = document.getElementById("ingresarPersonalizacion")

personalizaciones.forEach((personalizacion) => {
    const opcion = document.createElement("option")
    opcion.value = personalizacion.id
    opcion.textContent = `${personalizacion.nombre}`
    selectPersonalizacion.appendChild(opcion)
})

const selectPorcion = document.getElementById("ingresarPorciones")

porciones.forEach((porcion) => {
    const opcion = document.createElement("option")
    opcion.value = porcion.id
    opcion.textContent = `${porcion.nombre}`
    selectPorcion.appendChild(opcion)
})



function obtenerSeleccionados(event) {
    event.preventDefault() 

    const selecciones = []
    const idRelleno = document.getElementById("ingresarRelleno").value
    const idSgdoRelleno = document.getElementById("ingresarsgdoRelleno").value
    const idBizcochuelo = document.getElementById("ingresarBizcochuelo").value
    const idPersonalizacion = document.getElementById("ingresarPersonalizacion").value
    const idPorcion = document.getElementById("ingresarPorciones").value


    const elementos = [
        { id: idRelleno, lista: rellenos },
        { id: idSgdoRelleno, lista: rellenos },
        { id: idBizcochuelo, lista: bizcochuelos },
        { id: idPersonalizacion, lista: personalizaciones },
        { id: idPorcion, lista: porciones}
    ]

    elementos.forEach(({ id, lista }) => {
        if (id) {
            const seleccion = lista.find(item => item.id == id)
            if (seleccion) selecciones.push(seleccion)

    
        }

})
const total = selecciones.reduce((presupuesto, item) => presupuesto + item.precio, 0)


mostrarTotal(total)
mostrarSelecciones(selecciones)

localStorage.setItem("pedido", JSON.stringify(selecciones))
localStorage.setItem("totalPedido", JSON.stringify(total))

}
   
   
     function mostrarSelecciones(selecciones) {

               
         const seleccionado = document.getElementById("selecciones")
         seleccionado.innerHTML = ''

         const presentaSeleccion = document.createElement("h3")
        presentaSeleccion.textContent = "Esta es su elección:"

         const ulSeleccion = document.createElement("ul")
         
         selecciones.forEach((seleccion) => {
             const elegido = document.createElement("li")
             elegido.className = "card"
             elegido.textContent = `${seleccion.nombre} - Precio: $${seleccion.precio}`

                    
                     ulSeleccion.appendChild(elegido)
                     seleccionado.appendChild(presentaSeleccion)
                     
                    })
                     
                    
                 seleccionado.appendChild(ulSeleccion)
                 
     } 
     
     function mostrarTotal(total) {
        const mostrarSel = document.getElementById("total")
        mostrarSel.innerHTML = ''
          
        const totalSel = document.createElement("p")
        
        totalSel.className = "card"
        totalSel.textContent = `Costo total: $${total}`
    
        mostrarSel.appendChild(totalSel)
       
     }


const formulario = document.getElementById("formulario")
      formulario.addEventListener("submit", obtenerSeleccionados)

      

    






localStorage.setItem("relleno", JSON.stringify(rellenos))

localStorage.setItem("bizcochuelo", JSON.stringify(bizcochuelos))

localStorage.setItem("personalizacion", JSON.stringify(personalizaciones))

localStorage.removeItem("personalizacion")

localStorage.removeItem("presupuesto")

JSON.parse(localStorage.getItem("relleno"))



// localStorage.clear()