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
const newListado = []

const List = document.querySelector('#lista');
console.log(jsonData)
if(jsonData != null){
    listadoPedidos.push(jsonData);
    
    counter = jsonData.length;
    listadoPedidos.map(obj =>{
        obj.map(elem => {
            const item = `
            <div class="col-md-3 text-center">
                <div class="card" style="width: 100%;">
                    <img src="https://via.placeholder.com/300/000000/FFFFFF/?text=${elem.product}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <span class="bardge">ID : ${elem.id}</span>
                        <h5 class="card-title">${elem.product}</h5>
                        <p class="card-text">Cantidad : ${elem.quantity}</p>
                        <p class="card-text">${elem.shop}</p>
                        <button data-index="${elem.id}" class="btn btn-danger d-block w-100 delete">Borrar Producto</button>
                    </div>
                </div>
            </div>
            `;
            List.innerHTML += item;
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

    newListado.push(...listadoPedidos[0], producto)

    localStorage.setItem('producto', JSON.stringify(newListado))
        const item = `
        <div class="col-md-3 text-center">
            <div class="card" style="width: 100%;">
                <img src="https://via.placeholder.com/300/000000/FFFFFF/?text=${product}" class="card-img-top" alt="...">
                <div class="card-body">
                    <span class="bardge">ID : ${counter}</span>
                    <h5 class="card-title">${product}</h5>
                    <p class="card-text">Cantidad : ${quantity}</p>
                    <p class="card-text">${optionSelected}</p>
                    <button class="btn btn-danger d-block w-100 delete">Borrar Producto</button>
                </div>
            </div>
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

