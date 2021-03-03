/*
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/
function mostrar()
{
	let precioIngresado;
	let  porcentajeIngresado;
	let precioFinal;

	precioIngresado = prompt("Ingrese un precio");
	precioIngresado = parseInt(precioIngresado);

	porcentajeIngresado = prompt("Ingrese un descuento");
	porcentajeIngresado = parseInt(porcentajeIngresado);

	precioFinal = precioIngresado - precioIngresado * porcentajeIngresado / 100;

	document.getElementById('elPrecioFinal').value = "El precio final es: " + precioFinal;
}
