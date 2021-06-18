let string1 = prompt('Saludame: ');


if(string1 == 'Hola' || string1 == 'hola'){
    alert('como estas?')
}else{
    alert('no seas mala onda, saludame bien :)')
}

const calculadora = (a, b) => {
    alert('mira en tu consola :D ====>')
    console.log(`La suma de tus números es ${a+b}`);
    console.log(`La resta de tus números es ${a-b}`);
    console.log(`La multiplicación de tus números es ${a*b}`);
    if(b == 0){
        console.log('No se puede dividir por 0')
    }else{
        console.log(`La división de tus números es ${a/b}`)
    }
}
let num1 = parseInt(prompt('Ingresa un numero: '));
let num2 = parseInt(prompt('Ingresa otro numero: '));
calculadora(num1,num2);

let edad = parseInt(prompt('Ingresa tu edad: '));

if(edad < 18){
    alert('Eres menor de edad')
}else if(edad >= 18 && edad <= 65){
    alert('Ya eres adulto')
}else{
    alert('Ya pasaste por el ANSES a cobrar la jubilación?')
}

