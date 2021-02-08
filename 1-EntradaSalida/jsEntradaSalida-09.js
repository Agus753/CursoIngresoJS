/*

Ejercicio 9 bis

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let sueldo;
	let nuevoSueldo;
	let aumento;
	let porcentaje;
	// sueldo + aumento = nuevoSueldo.
	// al porcentaje lo consigo dividiendo el valor del sueldo por el porcentaje y luego lo multiplico por 100.

	sueldo = document.getElementById('txtIdSueldo').value;
	sueldo = parseFloat(sueldo);

	porcentaje = prompt("Ingrese el porcentaje");
	porcentaje = parseFloat(porcentaje);

	aumento = sueldo * porcentaje / 100;
	//aumento = sueldo * 10 / 100;

	nuevoSueldo = sueldo + aumento;

	document.getElementById('txtIdResultado').value = nuevoSueldo;
}
