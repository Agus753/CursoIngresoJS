/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave = prompt("Ingrese la clave");

	while(clave != "utn750")
	{
		clave = prompt("Incorrecto. Ingrese la clave");
	}
	alert("contraseña correcta");
	
}//FIN DE LA FUNCIÓN
