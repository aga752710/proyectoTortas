try {
    if (localStorage.getItem("usuario")) {
        localStorage.removeItem("usuario");
        console.log("localStorage borrado.");
    }
} catch (error) {
    console.error("Error al intentar borrar localStorage:", error);
} finally {
    console.log("Intento de borrar localStorage finalizado.");
}


document.getElementById("miFormulario").addEventListener("submit", function(eventoEnviar) {
    eventoEnviar.preventDefault()

    
    const nombreUsuario = document.getElementById("nombre").value
    const correoUsuario = document.getElementById("email").value
    const telefonoUsuario = document.getElementById("telefono").value
    const direccionUsuario = document.getElementById("direccion").value
    const comentarioUsuario = document.getElementById("textUsuario").value

    
    const datos = [nombreUsuario, correoUsuario, telefonoUsuario, direccionUsuario, comentarioUsuario]

    localStorage.setItem("usuario", JSON.stringify(datos))
    
   
    
    mostrarResumen()
    
    setTimeout(() => {
        confirmarPedido();
    }, 5000)
})


function mostrarResumen() {
    const mensaje = document.getElementById("mensaje")
    mensaje.innerHTML = ''
    const usuario = JSON.parse(localStorage.getItem("usuario"))
    const pedido = JSON.parse(localStorage.getItem("pedido"))
    const totalPedido = JSON.parse(localStorage.getItem("totalPedido"))


    if (usuario) {
        const resumen = document.createElement("h3")
        resumen.textContent = "Resumen de tu pedido:"

        const ulResumen = document.createElement("ul")

        const liNombre = document.createElement("li")
        liNombre.textContent = `Nombre: ${usuario[0]}`

        const liEmail = document.createElement("li")
        liEmail.textContent = `Correo: ${usuario[1]}`

        const liTelefono = document.createElement("li")
        liTelefono.textContent = `Teléfono: ${usuario[2]}`

        const liDireccion = document.createElement("li");
        liDireccion.textContent = `Dirección: ${usuario[3]}`

        const liComentario = document.createElement("li")
        liComentario.textContent = `Comentarios: ${usuario[4]}`

        ulResumen.appendChild(liNombre)
        ulResumen.appendChild(liEmail)
        ulResumen.appendChild(liTelefono)
        ulResumen.appendChild(liDireccion)
        ulResumen.appendChild(liComentario)

        mensaje.appendChild(resumen)
        mensaje.appendChild(ulResumen)

        
        
    } 

      
    if (pedido) {
        const torta = document.createElement("h3")
        torta.textContent = "Detalle de tu torta:"
        
        const ulSeleccionPedido = document.createElement("ul")
        pedido.forEach((seleccion) => {
            const elegidoPedido = document.createElement("li")
            elegidoPedido.textContent = `${seleccion.nombre} - Precio: $${seleccion.precio}`
            ulSeleccionPedido.appendChild(elegidoPedido)
            mensaje.appendChild(torta)
        })
        
        mensaje.appendChild(ulSeleccionPedido)
    }
   
    if(totalPedido){
                  
        const totalPagar = document.createElement("p")
        totalPagar.textContent = `Costo total: $${totalPedido}`
        mensaje.appendChild(totalPagar)
            
     }
     else {
        mensaje.textContent = "No se ha seleccionado el pedido."
    }
 
        
    }
 
    function confirmarPedido() {
        Swal.fire({
            title: "Confirmación del pedido",
            text: "¿Desea confirmar su elección?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "¡Confirmado!",
                    text: "Su pedido ha sido enviado con éxito.",
                    icon: "success"
                })
            }
        })
    }



