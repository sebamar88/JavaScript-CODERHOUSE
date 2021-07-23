//----ENTIEDAD -------------------------------------------------
class Usuario {
    constructor(nombre, apellido, email, tel) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.tel = tel
    }
}
//--Variables---------------------------------------------------
//--Funciones --------------------------------------------------
//funcion inicializar
function iniciarS(valor) {
    let value = valor;

    let testing = descargar(value);    
    if (testing == null || testing.nombre == '' || testing.tel == '') {
      //inicializo y declaro propiedades
      let nombre = prompt(`diga su nombre`);
      let apellido = prompt(`apellido`);
      let email = prompt(`email`);
      let tel = prompt(`tel`);
      //declaramos el usuario
      let usuario = new Usuario(nombre, apellido, email, tel)
      let objetoAJson = JSON.stringify(usuario)
      //guardarlo
      guardar(value, objetoAJson)
      //descargo
      let nuevoUsuario = descargar(value)
      console.log(`${nuevoUsuario.nombre} - ${nuevoUsuario.tel}`);
    } else {

      let nuevoUsuario = descargar(value)
      console.log(`${nuevoUsuario.nombre} - ${nuevoUsuario.tel}`);
      
    }
}
//funcion guardar
function guardar(a, b) {
    localStorage.setItem(a, b)
}
//funcion descargar
function descargar(a) {
    let descarga = JSON.parse(localStorage.getItem(a))
    return descarga
}
//--Eventos -----------------------------------------------------
//--Logica------


iniciarS("usuario")