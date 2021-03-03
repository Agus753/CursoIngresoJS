/*
mostrar * en un solo alert * el mensaje "usted es xxxxx y vive en la localidad de xxxxxxxx".
*/
function mostrar()
{
  	let nombre;
  	let localidad;

  	nombre = prompt("Ingrese su nombre");
  	localidad = prompt("Donde vive?");

  	alert("Usted es: " + nombre + " y vive en " + localidad);
}
