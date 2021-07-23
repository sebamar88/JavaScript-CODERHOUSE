class Compra{
    constructor(id, product, quantity, shop){
        return {
            id: id,
            product : product || 'algo',
            quantity : parseInt(quantity) || 1,
            shop : shop || 'super',
            OrdenLista: () => {
                return `Deseas comprar ${quantity || 1} ${product || 'algo'} de la tienda ${shop || 'super'}. Su pedido ha sido tomado`
            }
        }
    }
}

let counter;

let jsonData = JSON.parse(localStorage.getItem('producto'));

const listadoPedidos = [];
const List = document.querySelector('#lista');

console.log(jsonData)
if(jsonData != null){
    listadoPedidos.push(JSON.stringify(jsonData));
    counter = jsonData.length;
    jsonData.map(obj =>{
        const item = `
            <div class="col-md-3 text-center">
                <p>ID : ${obj.id}</p>
                <h3>Producto : ${obj.product}</h3>
                <p>Cantidad : ${obj.quantity}</p>
                <h4>Tienda : ${obj.shop}</h4>
            </div>
            
            
        `;
        List.innerHTML += item;
    })
}else{
    counter = 0
}


listadoPedidos.sort((a, b) => (a.quantity > b.quantity) ? 1 : -1)

let objLocal = JSON.parse(localStorage.getItem('producto'));

const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const product = document.querySelector('#product').value
    const quantity = document.querySelector('#quantity').value

    const shop = document.querySelector('#shop')

    let optionSelected = shop.options[shop.selectedIndex].value
    
    if(product.trim() != '' && quantity != 0){
    const producto = new Compra(counter, product, quantity, optionSelected);  
    
    listadoPedidos.push(producto)
    localStorage.setItem('producto', JSON.stringify(listadoPedidos))
        const item = `
        <div class="col-md-3 text-center">
            <div class="card" style="width: 100%;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product}</h5>
                    <p class="card-text">Cantidad : ${quantity}</p>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <li>ID : ${counter}</li>
            <li>Producto : ${product}</li>
            <li>Cantidad : ${quantity}</li>
            <li>Tienda : ${optionSelected}</li>
        </div>
        `;
        List.innerHTML += item;
    counter++;
    form.reset();   
    }else{
        alert('Hay campos incompletos')
    }
})

const borrarCarrito = document.querySelector('#clearCart')

borrarCarrito.addEventListener('click', (e)=>{
    e.preventDefault()
    localStorage.clear();
    List.innerHTML = '';
    counter = 0
})
