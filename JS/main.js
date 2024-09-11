// -DOM y Eventos
// -arrays de objetos
// -funciones de orden superior (minimo 2 diferentes)
// -storage (guardar, recuperar, borrar, vaciar)
// -estilos básicos
// -NADA de console, alert ni prompt



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

const sabores = document.getElementById("rellenos")

const ulSabores = document.createElement("ul")

rellenos.forEach((relleno) => {
    const capa = document.createElement("li")
    capa.className = "card"
    capa.textContent = `${relleno.nombre}`
    ulSabores.appendChild(capa)
})

sabores.appendChild(ulSabores)

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



function obtenerSeleccionados(event) {
    event.preventDefault() 

    const selecciones = []
    const idRelleno = document.getElementById("ingresarRelleno").value
    const idSgdoRelleno = document.getElementById("ingresarsgdoRelleno").value
    const idBizcochuelo = document.getElementById("ingresarBizcochuelo").value
    const idPersonalizacion = document.getElementById("ingresarPersonalizacion").value

    const elementos = [
        { id: idRelleno, lista: rellenos },
        { id: idSgdoRelleno, lista: rellenos },
        { id: idBizcochuelo, lista: bizcochuelos },
        { id: idPersonalizacion, lista: personalizaciones }
    ]

    elementos.forEach(({ id, lista }) => {
        if (id) {
            const seleccion = lista.find(item => item.id == id)
            if (seleccion) selecciones.push(seleccion)
        }
    })

    mostrarSelecciones(selecciones)
}


function calcularTotal(selecciones) {
    return selecciones.reduce((total, seleccion) => total + seleccion.precio, 0)}
    
    function mostrarTotal(selecciones) {
        const total = calcularTotal(selecciones)
        const elementoTotal = document.getElementById('total')
        elementoTotal.textContent = `El total es: $${total}`}
        
        function mostrarSelecciones(selecciones) {
            mostrarTotal(selecciones)}
            
            
const formulario = document.getElementById("formulario")
      formulario.addEventListener("submit", obtenerSeleccionados)





localStorage.setItem("relleno", JSON.stringify(rellenos))

localStorage.setItem("bizcochuelo", JSON.stringify(bizcochuelos))

localStorage.setItem("personalizacion", JSON.stringify(personalizaciones))

localStorage.removeItem("personalizacion")

localStorage.removeItem("presupuesto")

JSON.parse(localStorage.getItem("relleno"))



// localStorage.clear()