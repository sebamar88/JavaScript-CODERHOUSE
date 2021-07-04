class Compra{
    constructor(product, quantity, shop){
        this.product = product,
        this.quantity = parseInt(quantity),
        this.shop = shop
    }
    Items(){
        return `Deseas comprar ${this.quantity} ${this.product} de la tienda ${this.shop}. Su pedido ha sido tomado`
    }

}

const prod = prompt('Ingrese un producto que desee comprar:')
const qt = parseInt(prompt('Cuanto de ese producto desa comprar?'))
const store = prompt('Donde quiere que vayamos a conseguirlo?')

const pedido1 = new Compra(prod, qt, store);

console.log(pedido1.Items());

setTimeout(()=>{
    const prod = prompt('Ingrese un producto que desee comprar:')
const qt = parseInt(prompt('Cuanto de ese producto desa comprar?'))
const store = prompt('Donde quiere que vayamos a conseguirlo?')

const pedido2 = new Compra(prod, qt, store);

console.log(pedido2.Items());
}, 750)