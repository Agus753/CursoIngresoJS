/*
3- validación :
pedir el ingreso de 10 mascotas 
 validar 
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza , si es perro (pastor, toy, callejero) y si gato (siamés, turco, Peterbald , generico) y  si es de tipo "otros" o pájaro , pedir solo un texto
edad entre 1 y 20 para gatos y perros ,  para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
mostrar que raza  de gatos tiene mas animales y el promedio de edad de esta raza
*/
function mostrar()
{
	let cantidadMascotas;
	let tipoIngresado;
	let razaIngresada;
	let edadIngresada;
	let nombreIngresado;
	let banderaPerroMasViejo;
	let banderaGatoMasViejo;
	let banderaPajaroMasViejo;
	let banderaOtrosMasViejo;
	let edadGatoMasViejo;
	let edadPerroMasViejo;
	let edadPajaroMasViejo;
	let edadOtrosMasViejo;
	let nombrePerroMasViejo;
	let nombreGatoMasViejo;
	let nombrePajaroMasViejo;
	let nombreOtrosMasViejo;
	let contadorSiames;
	let contadorPeterbald;
	let contadorTurco;
	let contadorGenerico;
	let acumuladorEdadSiames;
	let acumuladorEdadTurco;
	let acumuladorEdadPeterbald;
	let acumuladorEdadGenerico;
	let promedioEdad;


	banderaPerroMasViejo = 0;
	banderaGatoMasViejo = 0;
	banderaPajaroMasViejo = 0;
	banderaOtrosMasViejo = 0;
	contadorSiames = 0;
	contadorPeterbald = 0;
	contadorTurco = 0;
	contadorGenerico = 0;
	acumuladorEdadSiames = 0;
	acumuladorEdadTurco = 0;
	acumuladorEdadPeterbald = 0;
	acumuladorEdadGenerico = 0;

	for(cantidadMascotas = 0; cantidadMascotas < 3; cantidadMascotas++)
	{
		tipoIngresado = prompt("Ingrese un tipo de mascota");
		while(isNaN(tipoIngresado) == false || tipoIngresado != "gato" && tipoIngresado != "perro" && tipoIngresado != "pajaro" && tipoIngresado != "otros")
		{
			tipoIngresado = prompt("Error. Ingrese un tipo de mascota");
		}

		razaIngresada = prompt("Ingrese una raza");
		while(isNaN(razaIngresada) == false || tipoIngresado == "perro" && (razaIngresada != "pastor" && razaIngresada != "toy" && razaIngresada != "callejero") || tipoIngresado == "gato" && (razaIngresada != "siames" && razaIngresada != "turco" && razaIngresada != "peterbald" && razaIngresada != "generico"))
		{
			razaIngresada = prompt("Error. Ingrese una raza");
		}

		edadIngresada = prompt("Ingrese una edad");
		edadIngresada = parseInt(edadIngresada);
		while(isNaN(edadIngresada) == true ||tipoIngresado == "perro" && (edadIngresada < 1 || edadIngresada > 20)|| tipoIngresado == "gato" && (edadIngresada < 1 || edadIngresada > 20) || tipoIngresado == "pajaro" && (edadIngresada < 1 || edadIngresada > 50) || tipoIngresado == "otros" && (edadIngresada < 1 || edadIngresada > 100))
		{
			edadIngresada = prompt("Error. Ingrese una edad");
			edadIngresada = parseInt(edadIngresada);
		}

		nombreIngresado = prompt("Ingrese un nombre");
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("Error. Ingrese un nombre");
		}

		//mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
		switch(tipoIngresado)
		{
			case "perro":
		 	if(banderaPerroMasViejo == 0 || edadIngresada > edadPerroMasViejo)
		 	{
		 		edadPerroMasViejo = edadIngresada;
		 		nombrePerroMasViejo = nombreIngresado;
		 		banderaPerroMasViejo = 1;
		 	}
			break;
			case "gato":
			if(banderaGatoMasViejo == 0 || edadIngresada > edadGatoMasViejo)
		 	{
		 		edadGatoMasViejo = edadIngresada;
		 		nombreGatoMasViejo = nombreIngresado;
		 		banderaGatoMasViejo = 1;
		 	}
		 	//mostrar que raza  de gatos tiene mas animales y el promedio de edad de esta raza
		 	if(razaIngresada == "siames")
		 	{
		 		contadorSiames++;
		 		acumuladorEdadSiames = acumuladorEdadSiames + edadIngresada;
		 	}
		 	else
		 	{
		 		if(razaIngresada == "turco")
		 		{
		 			contadorTurco++;
		 			acumuladorEdadTurco = acumuladorEdadTurco + edadIngresada;
		 		}
		 		else
		 		{
				 	if(razaIngresada == "peterbald")
				 	{
				 		contadorPeterbald++;
				 		acumuladorEdadPeterbald = acumuladorEdadPeterbald + edadIngresada;
				 	}
				 	else
				 	{
				 		contadorGenerico++;
				 		acumuladorEdadGenerico = acumuladorEdadGenerico + edadIngresada;
				 	}
		 		}
		 	}
			break;
			case "pajaro":
			if(banderaPajaroMasViejo == 0 || edadIngresada > edadPajaroMasViejo)
		 	{
		 		edadPajaroMasViejo = edadIngresada;
		 		nombrePajaroMasViejo = nombreIngresado;
		 		banderaPajaroMasViejo = 1;
		 	}
			break;
			case "otros":
			if(banderaOtrosMasViejo == 0 || edadIngresada > edadOtrosMasViejo)
		 	{
		 		edadOtrosMasViejo = edadIngresada;
		 		nombreOtrosMasViejo = nombreIngresado;
		 		banderaOtrosMasViejo = 1;
		 	}
			break;
		}



	}
	if(banderaPerroMasViejo == 1)
	{
		alert("El perro mas viejo es: " + nombrePerroMasViejo);
	}

	if(banderaGatoMasViejo == 1)
	{
		alert("El Gato mas viejo es: " + nombreGatoMasViejo);

		//B:
		if(contadorSiames > contadorTurco && contadorSiames > contadorGenerico && contadorSiames > contadorPeterbald)
		{
			promedioEdad = acumuladorEdadSiames / contadorSiames;
			alert("La raza con mas gatos es siames y el promedio de edad es: " + promedioEdad);
		}
		else
		{
			if(contadorTurco > contadorPeterbald && contadorTurco > contadorGenerico)
			{
				promedioEdad = acumuladorEdadTurco / contadorTurco;
				alert("La raza con mas gatos es turca y el promedio de edad es: " + promedioEdad);
			}
			else
			{
				if( contadorPeterbald > contadorGenerico)
				{
					promedioEdad = acumuladorEdadPeterbald / contadorPeterbald;
					alert("La raza con mas gatos es peterbald y el promedio de edad es: " + promedioEdad);
				}
				else
				{
					promedioEdad = acumuladorEdadGenerico / contadorGenerico;
					alert("La raza con mas gatos es generico y el promedio de edad es: " + promedioEdad);
				}
			}
		}
	}

	if(banderaPajaroMasViejo == 1)
	{
		alert("El Pajaro mas viejo es: " + nombrePajaroMasViejo);
	}

	if(banderaOtrosMasViejo == 1)
	{
		alert("El Otros mas viejo es: " + nombreOtrosMasViejo);
	}

	
	/*let contador;

	for(contador = 10; contador > 0; contador--)
	{
		console.log(contador);
	}*/
}