
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
console.log(calculadorIVA(numero, iva))

console.log('---------Separador---------')

let precioConIva = Number(prompt('Ingrese un precio con IVA:'))
let porcentajeRestar = Number(prompt('Ingrese el porcentaje de IVA que desee quitar'))
const quitarIVA = (precio, porcentaje) => {
    let precioSinIva;
    if(porcentaje < 10){
        precioSinIva =  precio / Number(`1.0${porcentaje}`)
    }else{
        precioSinIva =  precio / Number(`1.${porcentaje}`)
    }
    console.log(`El precio sin el ${porcentaje}% de IVA, de $${precio} es igual a $${precioSinIva}`)
}
quitarIVA(precioConIva, porcentajeRestar)

