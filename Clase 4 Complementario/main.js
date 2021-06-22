// Primera funcion
let precioBase = parseInt(prompt('ingresa el precio al que deseas agregar el IVA'));

while(isNaN(precioBase) && precioBase != ''){
    precioBase = parseInt(prompt('ingresa un numero'));
}

const calcularIva = (precio) =>{
    return `Precio original: ${precio} // Precio con IVA(+21%):${precio*1.21}`;
}

console.log(calcularIva(precioBase))

// segunda funcion
let pedirPrecios = parseInt(prompt('ingresa precios, al termina escribe una letra'))

const sumarPrecios = (p) =>{
    const precios = [p]
    while(!isNaN(p)){
        p = parseInt(prompt('ingresa precios, al termina escribe una letra'))
        
        if(isNaN(p)){
            console.log(`con ${p} terminaste la funcion`)
        }else{
            precios.push(p);
        }
        //console.log(precios)
    }

    let suma = precios.reduce((a,b) => a+b,0)

    
    return suma;
}

console.log(sumarPrecios(pedirPrecios))

// tercera funcion
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