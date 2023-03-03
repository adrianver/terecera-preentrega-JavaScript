let mensajeIngreso = alert ("Beber con Moderación. Prohibido su Venta a menores de 18 años")


const descuento = -1000
             

function filtrarBebida () {

let bebidaSelecionada = prompt ("Ingrese el tipo de bebida seleccionada")
let resultado = bebidas.filter((bebida) => bebida.tipo === bebidaSelecionada)
return console.table (resultado)
}

const mensaje = "Selecciona la bebida por el código"


function comprar() {
    let codigo = prompt (mensaje)
    if (!parseInt(codigo)) {
        alert ("Inexistente el codigo seleccionado")
        return
}


let bebidaElegida = buscarBebida (codigo)
            carrito.push(bebidaElegida)
        let respuesta = confirm("¿Desea llevar otra Bebida?")
        if (respuesta) {
            comprar()
        } else {
            finalizarCompra()
        }
}



function Carrito ()
{
if (carrito.length > 0) {
console.table (carrito)
}
else {
    console.warn ("No hay ninguna bebida en el carrito")
}
}
function finalizarCompra() {
if (carrito.length === 0) {
console.war ("El carrito esta vacio!")
return
}

const shopping = new Compra(carrito)
alert(`El precio total es de $ ${shopping.obtenerSubtotal()}`)
let respuesta = confirm("¿Deseas confirmar tu pago?")
    if (respuesta) {
        alert(shopping.confirmarCompra())
        carrito.length = 0
    }
}



