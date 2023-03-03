//VINCULACION CON EL HTML (DOM)


const lista = document.querySelector ("ol")
const tbody = document.querySelector ("tbody")


const pedido = ["Seleccione en el carrito las bebidas que desea comprar", "Detalle del precio total de su pedido", "Finalizar Compra"]
pedido.forEach (item => {
const li = document.createElement ("li")
li.innerText = item
lista.append (li)

} )

function armarTablaHTML(bebida) {
    return `<tbody>
                    <tr>
                        <td>${bebida.codigo}</td>
                        <td>${bebida.tipo}</td>
                        <td>${bebida.marca}</td>
                        <td>${bebida.precio}</td>
                        <td><button id= ${bebida.codigo} 
                        class="btn btn-dark" title="agregar al carrito" >🛒</button></td>                
                    </tr>
                    </tbody>`
        }  
//CARGAS LAS BEBIDAS EN UNA TABLA HTML

const cargarBebidas = (array)=> {
    let tablaHTML =""
    
    if (array.length > 0) {
    array.forEach (bebida => {
    tablaHTML += armarTablaHTML(bebida)
    })
    
    } else {
        tablaHTML = "<h1>Error al cargar el producto.</h1>"
    }
    tbody.innerHTML= tablaHTML
    }
    

//GUARDAR Y RECUPERAR LOCALSTORAGE

const carrito = []
const guardarCarrito = () => {
if (carrito.length > 0) { localStorage.setItem ("CarritoBebidas", JSON.stringify (carrito))}}

const recuperarCarrito = () => {return JSON.parse (localStorage.getItem ("CarritoBebidas")) || [] }

const carritoTemporal = recuperarCarrito ()

carritoTemporal.forEach (beb => carrito.push (beb) )

//EVENTO CLICK

const buscarBebida =(codigo) => bebidas.find(bebida => bebida.codigo === parseInt(codigo))

function activarClickBotones () {

const activarClick = document.querySelectorAll ("button.btn.btn-dark")
activarClick.forEach (btn => {
btn.addEventListener("click", (e) => {
let resultado = buscarBebida (e.target.id)
carrito.push (resultado)
guardarCarrito ()
})})
}
cargarBebidas(bebidas)
activarClickBotones ()

//FUNCIONES
            
    
function detalleCarrito ()
{
if (carrito.length > 0) {
    const shopping = new Compra(carrito)
    alert(`El precio total es de $ ${shopping.obtenerSubtotal()}`)
}
else {
    alert ("No hay ninguna bebida en el carrito")
}
}
const btnverCarrito = document.querySelector ("button#verCarrito")
btnverCarrito.addEventListener ("click",detalleCarrito)

const btncompra = document.querySelector ("button#compra")
btncompra.addEventListener ("click",finalizarCompra)





