const lista = [1,3,5,7,9];
const num = parseInt(prompt('Escribe un numero: '));
const arr = [];
let x = 1;
lista.forEach(elemento =>{
    let res = ` #${x} - ${elemento + num}`;
    arr.push(res)
    x++
})
alert(arr)

let str = prompt('Escribe una palabra, cuando te canses escribe ESC')

let i = 0;

while(str.toLowerCase() !== 'esc'){
    console.log(str+i);
    i++;
    str = prompt('Escribe una palabra, cuando te canses escribe ESC')
}

let num2 = parseInt(prompt('Ingresa el numero de repeticiones'));

while(isNaN(num2) ){
    num2 = parseInt(prompt('Ingresa un numero valido'));
}
    
for(let u = 1; u <= num2; u++ ){
    console.log(`${u} - hola`)
}
