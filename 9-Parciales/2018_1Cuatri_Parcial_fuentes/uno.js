
function mostrar()
{
	let ancho;
	let largo;
	let perimetro;

	ancho = prompt("Ingrese un ancho");
	ancho = parseInt(ancho);

	largo = prompt("Ingrese un largo");
	largo = parseInt(largo);

	perimetro = ancho * 2 + largo * 2;

	alert("El perimetro es: " + perimetro);

}
