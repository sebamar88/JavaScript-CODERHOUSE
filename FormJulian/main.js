/**
 * Tomar 4 datos por promt NOMBRE, APELLIDO EMAIL TELEFONO
 * 
 * LOS GUARDO EN LOCAL STORAGE
 * 
 * IMPRIMO SOLAMENTE EL NOMBRE Y EL TELEFONO
 * 
 * UNA VEZ QUE SE IMPRIMA, por mas que recargue la pagina no debe volver a aparecer los prompts 
 * 
 */

let json = JSON.parse(localStorage.getItem('datosCliente'));
if(json == null || json.telefono === null || json.nombre == '' || json.nombre == null)
{
  let nombre = prompt('nombre')
let apellido = prompt('apellido')
let email = prompt('email')
let telefono = parseInt(prompt('telefono'))

let objeto = {
  nombre: nombre,
  apellido: apellido,
  email: email,
  telefono:telefono
}
localStorage.setItem('datosCliente', JSON.stringify(objeto))
}

console.log(localStorage.getItem('datosCliente'))


let objLocal = JSON.parse(localStorage.getItem('datosCliente'));

const List = document.querySelector('#lista');

List.innerHTML = '';


const item = `
<li>Nombre : ${objLocal.nombre}</li>
<li>Telefono : ${objLocal.telefono}</li>
`;
List.innerHTML += item;
