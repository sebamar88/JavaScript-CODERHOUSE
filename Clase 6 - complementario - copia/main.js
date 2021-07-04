class Compra{
    constructor(product, quantity, shop){
        return {
            product : product,
            quantity : parseInt(quantity),
            shop : shop,
            Items: () => {
                return `Deseas comprar ${quantity} ${product} de la tienda ${shop}. Su pedido ha sido tomado`
            }
        }
    }

}

let cantidadProductos = parseInt(prompt('Cuantos productos diferentes desea comprar?'))

let counter = 0;
const listadoPedidos = [];

while(isNaN(cantidadProductos)){
    cantidadProductos = parseInt(prompt('Debe ingresar un valor numerico. Cuantos productos diferentes desea comprar?'))
}

while(counter < cantidadProductos){
    const prod = prompt('Ingrese un producto que desee comprar:')
    const qt = parseInt(prompt('Cuanto de ese producto desea comprar?'))
    const store = prompt('Donde quiere que vayamos a conseguirlo?')

    const producto = new Compra(prod, qt, store);  
    
    listadoPedidos.push(producto)
    console.log(producto.Items())
    counter++;
}

listadoPedidos.sort((a, b) => (a.quantity > b.quantity) ? 1 : -1)

console.log(listadoPedidos)

