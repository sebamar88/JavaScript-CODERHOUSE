// Primera funcion
let pedirPrecios = parseInt(prompt('ingresa precios, al termina escribe una letra'))

const sumarPrecios = (p) =>{
    const precios = [p]
    while(!isNaN(p)){
        p = parseInt(prompt('ingresa precios, al termina escribe una letra'))
        
        if(isNaN(p)){
            console.log(`Terminaste la funcion`)
        }else{
            precios.push(p);
        }
        //console.log(precios)
    }

    let suma = precios.reduce((a,b) => a+b,0)

    
    return suma;
}

console.log(sumarPrecios(pedirPrecios))

// segunda funcion
let divisor = parseInt(prompt('ingresa un número'))
let dividendo = parseInt(prompt('ingresa un segundo número'))

while(isNaN(divisor)){
    divisor = parseInt(prompt('ingresa un número valido'))
}
while(isNaN(dividendo)){
    dividendo = parseInt(prompt('ingresa un número valido'))
}

const esMultiplo = (num1, num2) =>{
    if(num1%num2 == 0){
        return 'Es multiplo';
    }else{
        return 'No es multiplo';
    } 
}

console.log(esMultiplo(divisor, dividendo))

// Tercera Funcion

let numero = Number(prompt('Ingrese un precio para añadirle IVA:'))
let iva = Number(prompt('Ingrese el porcentaje de IVA que desee agregar'))

const calculadorIVA = (precio, porcentaje) => {
    let precioConIva;
    if(porcentaje < 10){
        precioConIva =  precio * Number(`1.0${porcentaje}`)
    }else{
        precioConIva =  precio * Number(`1.${porcentaje}`)
    }        
    return `El precio con el ${porcentaje}% de IVA, de $${precio} es igual a $${precioConIva}`;
}


let precioConIva = Number(prompt('Ingrese un precio con IVA:'))
let porcentajeRestar = Number(prompt('Ingrese el porcentaje de IVA que desee quitar'))
const quitarIVA = (precio, porcentaje) => {
    let precioSinIva;
    if(porcentaje < 10){
        precioSinIva =  precio / Number(`1.0${porcentaje}`)
    }else{
        precioSinIva =  precio / Number(`1.${porcentaje}`)
    }
    return `El precio sin el ${porcentaje}% de IVA, de $${precio} es igual a $${precioSinIva}`
}

const agregarYQuitarIVA = (sinIVA,conIVA) => {
    let html = '';
    html += sinIVA;
    html += `<br><hr><br>`
    html += conIVA
    return html;
}

console.log(agregarYQuitarIVA(calculadorIVA(numero, iva),quitarIVA(precioConIva, porcentajeRestar)))

