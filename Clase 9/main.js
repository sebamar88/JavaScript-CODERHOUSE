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

const itemCard = (obj) =>{
    return(`
    <div class="col-md-3 text-center">
        <div class="card" style="width: 100%;">
            <img src="https://via.placeholder.com/300/000000/FFFFFF/?text=${obj.product}" class="card-img-top" alt="...">
            <div class="card-body">
                <span class="bardge">ID : ${obj.id}</span>
                <h5 class="card-title">${obj.product}</h5>
                <p class="card-text">Cantidad : ${obj.quantity}</p>
                <p class="card-text">${obj.shop}</p>
                <button data-index="${obj.id}" class="btn btn-danger d-block w-100 delete">Borrar Producto</button>
            </div>
        </div>
    </div>
    `)
}

let counter;

let jsonData = JSON.parse(localStorage.getItem('producto'));
const listadoPedidos = [];
const newListado = []

const List = document.querySelector('#lista');
if(jsonData != null){
    listadoPedidos.push(jsonData);    
    counter = jsonData.length;
    listadoPedidos.map(obj =>{
        obj.map(elem => {
            List.innerHTML += itemCard(elem);
        })
        
    })
}else{
    counter = 0
}

const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const product = document.querySelector('#product').value
    const quantity = document.querySelector('#quantity').value

    const shop = document.querySelector('#shop')

    let optionSelected = shop.options[shop.selectedIndex].value
    
    if(product.trim() != '' && quantity != 0){
    const producto = new Compra(counter, product, quantity, optionSelected);  
    console.log(listadoPedidos.length)
        if(listadoPedidos.length != 0){

            newListado.push(...listadoPedidos[0], producto)
        }else{
            newListado.push(producto)
        }

    localStorage.setItem('producto', JSON.stringify(newListado))

        List.innerHTML += itemCard(producto);
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

const borrarElemento = document.querySelectorAll('.delete')

for (let i = 0; i < borrarElemento.length; i++) {
    borrarElemento[i].addEventListener("click", (e) => {
        const jsonNewData = JSON.parse(localStorage.getItem('producto'))
        console.log(jsonNewData)
        jsonNewData.splice(borrarElemento[i].dataset.index, 1)
        console.log(jsonNewData)
        localStorage.setItem('producto', JSON.stringify(jsonNewData))
        location.reload();
    });
}

