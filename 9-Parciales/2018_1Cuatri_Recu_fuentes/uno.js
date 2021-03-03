/*
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.
*/
function mostrar()
{
	let ancho;
	let largo;
	let perimetro;

	ancho = prompt("Ancho");
	ancho = parseInt(ancho);

	largo = prompt("largo");
	largo = parseInt(largo);

	perimetro = ancho * 2 + largo * 2;
	alert("perimetro :" + perimetro);
}
