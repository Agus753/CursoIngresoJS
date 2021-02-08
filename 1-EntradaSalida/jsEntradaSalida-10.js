/*
EJERCICIO 10 BIS

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let nuevoImporte;
	let descuento;
	let porcentaje;

	importe = document.getElementById('txtIdImporte').value;
	importe = parseFloat(importe);

	porcentaje = prompt("Ingrese el porcentaje del descuento");
	//porcentaje = parseFloat(porcentaje);

	descuento = importe * porcentaje / 100;

	nuevoImporte = importe - descuento;

	document.getElementById('txtIdResultado').value = nuevoImporte;

}
