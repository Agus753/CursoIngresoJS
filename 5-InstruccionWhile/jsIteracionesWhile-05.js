/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	//let veces = 1;
	sexoIngresado = prompt("Ingrese su sexo");

	while(sexoIngresado != 'f' && sexoIngresado != 'm' /*&& veces != 0*/)
	{
		sexoIngresado = prompt("Error. Ingrese su sexo");
		//veces--;
	}

}//FIN DE LA FUNCIÓN