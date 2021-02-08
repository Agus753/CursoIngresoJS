/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/


// Las variables globales no son recomendables porque sirven para pasar el valor de una función a otra.
// Ya lo vamos a ver después, nomás no la uses xd.

// var es para variable global (también). En una función da igual si se hace let o var.
function Sumar () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;

	precioUno = parseInt(document.getElementById('txtIdPrecioUno').value);
	precioDos = parseInt(document.getElementById('txtIdPrecioDos').value);
	precioTres = parseInt(document.getElementById('txtIdPrecioTres').value);

	suma = precioUno + precioDos + precioTres;

	alert("La suma es igual a $" + suma);
}

function Promedio ()
{
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
	let promedio;

	precioUno = parseInt(document.getElementById('txtIdPrecioUno').value);
	precioDos = parseInt(document.getElementById('txtIdPrecioDos').value);
	precioTres = parseInt(document.getElementById('txtIdPrecioTres').value);

	suma = (precioUno + precioDos + precioTres);

	promedio = suma / 3;
	promedio = promedio.toFixed(2);

	alert("El promedio es $" + promedio);
	
}

function PrecioFinal () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let suma;
	let promedio;
	let iva;
	let resultadoFinal;

	precioUno = parseInt(document.getElementById('txtIdPrecioUno').value);
	precioDos = parseInt(document.getElementById('txtIdPrecioDos').value);
	precioTres = parseInt(document.getElementById('txtIdPrecioTres').value);

	suma = precioUno + precioDos + precioTres;

	iva = suma * 21 / 100;

	resultadoFinal = suma + iva;
	resultadoFinal = resultadoFinal.toFixed(2);

	alert("El resultado final es $: " + resultadoFinal);


}