/*
For 10 (a 5 personas nombre , sexo ,edad(validar que solo sean hombres 
no mayores a 12 y que las mujeres sean mayores de edad), altura(rangos que quiera))
*/
function mostrar()
{
	let contadorPersonas;
	let nombreIngresado;
	let sexoIngresado;
	let edadIngresada;
	let alturaIngresada; 
	let banderaMasAlto;
	let personaMasAlta;
	let sexoPersonaMasAlta;
	let mayorAltura;
	let banderaChicaMasJoven;
	let edadChicaMasJoven;
	let nombreChicaMasJoven;
	let banderaChicoMasBajito;
	let nombreChicoMasBajito;
	let alturaChicoMasBajito;
	let contadorEdadChicas;
	let contadorEdadChicos;
	let acumuladorEdadChicas;
	let acumuladorEdadChicos;
	let promedioEdadChicas;
	let promedioEdadChicos;
	let mayoresAUnoSesenta;
	let mujeresMayoresAUnoSesenta;
	let porcentajeMujeresSobreUnoSesenta;

	banderaMasAlto = 0;
	banderaChicaMasJoven = 0;
	banderaChicoMasBajito = 0;
	contadorEdadChicas = 0;
	contadorEdadChicos = 0;
	acumuladorEdadChicas = 0;
	acumuladorEdadChicos = 0;
	mayoresAUnoSesenta = 0;
	mujeresMayoresAUnoSesenta = 0;


	for(contadorPersonas = 0; contadorPersonas < 3; contadorPersonas++)
	{
		nombreIngresado = prompt("Ingrese su nombre");
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("Error. Ingrese su nombre");
		}

		sexoIngresado = prompt("Ingrese su sexo");
		while(isNaN(sexoIngresado) == false || sexoIngresado != "M" && sexoIngresado != "F")
		{
			sexoIngresado = prompt("Error. Ingrese su sexo");
		}

		edadIngresada = prompt("Ingrese su edad");
		edadIngresada = parseInt(edadIngresada);
		while(isNaN(edadIngresada) == true || edadIngresada > 12 && sexoIngresado == "M" || (edadIngresada > 17 || edadIngresada < 13 && sexoIngresado == "F"))
		{
			edadIngresada = prompt("Error. Ingrese su edad");
		}

		alturaIngresada = prompt("Ingrese su altura");
		alturaIngresada = parseFloat(alturaIngresada);
		while(isNaN(alturaIngresada) == true || alturaIngresada < 1.40 || alturaIngresada > 1.80)
		{
			alturaIngresada = prompt("Error. Ingrese su altura");
		}

		if(banderaMasAlto == 0 || alturaIngresada > mayorAltura)
		{
			mayorAltura = alturaIngresada;
			personaMasAlta = nombreIngresado;
			sexoPersonaMasAlta = sexoIngresado;
			banderaMasAlto = 1;
		}

		//de las mujeres el nombre de la mas joven 
		if(sexoIngresado == "F")
		{
			if(banderaChicaMasJoven == 0 || edadIngresada < edadChicaMasJoven)
			{
				edadChicaMasJoven = edadIngresada;
				nombreChicaMasJoven = nombreIngresado;
				banderaChicaMasJoven = 1;
			}
			contadorEdadChicas++;
			acumuladorEdadChicas = acumuladorEdadChicas + edadIngresada;
		}
		
		else
		{//de los hombre el nombre del mas bajito
			if(banderaChicoMasBajito == 0 || alturaIngresada < alturaChicoMasBajito)
			{
				alturaChicoMasBajito = alturaIngresada;
				nombreChicoMasBajito = nombreIngresado;
				banderaChicoMasBajito = 1;
			}
			contadorEdadChicos++;
			acumuladorEdadChicos = acumuladorEdadChicos + edadIngresada;
		}
		//la cantidad de personas que miden mas de 1,60 metros
		//el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts
		if(alturaIngresada > 1.60)
		{
			mayoresAUnoSesenta++;
			if(sexoIngresado == "F")
			{
				mujeresMayoresAUnoSesenta++;
			}
		}

	}
	alert("La persona mas alta es: " + personaMasAlta + " de sexo " + sexoPersonaMasAlta);

	promedioEdadChicas = acumuladorEdadChicas / contadorEdadChicas;
	promedioEdadChicos = acumuladorEdadChicos / contadorEdadChicos;

	//.el promedio de edad entre los hombres ,el promedio de edad entre las mujeres
	if(banderaChicaMasJoven == 1)
	{
		alert("La chica mas joven es " + nombreChicaMasJoven);
		alert("El promedio de edad de las chicas es " + promedioEdadChicas);
	}

	if(banderaChicoMasBajito == 1)
	{
		alert("El chico mas bajito es " + nombreChicoMasBajito);
		alert("El promedio de edad de los chicos es " + promedioEdadChicos);
	}
	alert("Los mayores a 1.60 son " +mayoresAUnoSesenta);

	//Regla de tres simple para saber el porcentaje de las mujeres
	if(mayoresAUnoSesenta > 0)
	{
		porcentajeMujeresSobreUnoSesenta = mujeresMayoresAUnoSesenta * 100 / mayoresAUnoSesenta;
		alert("El porcentaje de mujeres sobre 1.60 es " + porcentajeMujeresSobreUnoSesenta)
	}
	else
	{
		alert("No hay mayores a 1.60")
	}
	

	/*let numero;
	let divisor;
	let contador;

	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);

	for(contador = 1; contador < numero; contador ++)
	{
		if(numero % contador == 0)
		{
			divisor++;
			console.log(contador);
		}
	}*/
}//FIN DE LA FUNCIÓN