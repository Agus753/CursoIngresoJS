/*
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados        
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.

*/
function mostrar()
{
	let vueltasPaises;
	let continenteIngresado;
	let paisIngresado;
	let cantidadHabitantesIngresada;
	let nivelPobrezaIngresada;
	let temperaturaMinimaIngresada;
	let cantidadTemperaturasPares;
	let temperaturasImparesEuropa;
	let banderaPaisMenosHabitantes;
	let cantidadPaisConMenosHabitantes;
	let nombrePaisConMenosHabitantes;
	let paisesQueSuperanLos40;
	let paisesAmericanosConMenosDeCero;
	let acumuladorHabitantesTotales;
	let contadorHabitantesTotales;
	let promedioHabitantesTotales;
	let acumuladorHabitantesQueSuperanLos40;
	let promedioHabitantesQueSuperanLos40;
	let banderaMenorTemperatura;
	let nombrePaisMenorTemperatura;
	let menorTemperaturaRegistrada;
	let acumuladorHabitantesAmerica;
	let acumuladorHabitantesEuropa;
	let acumuladorHabitantesAsia;
	let acumuladorHabitantesOceania;
	let acumuladorHabitantesAfrica;

	cantidadTemperaturasPares = 0;
	temperaturasImparesEuropa = 0;
	banderaPaisMenosHabitantes = 0;
	paisesQueSuperanLos40 = 0;
	paisesAmericanosConMenosDeCero = 0;
	acumuladorHabitantesTotales = 0;
	contadorHabitantesTotales = 0;
	acumuladorHabitantesQueSuperanLos40 = 0;
	banderaMenorTemperatura = 0;
	acumuladorHabitantesAmerica = 0;
	acumuladorHabitantesEuropa = 0;
	acumuladorHabitantesAsia = 0;
	acumuladorHabitantesOceania = 0;
	acumuladorHabitantesAfrica = 0;

	for(vueltasPaises = 0; vueltasPaises < 3; vueltasPaises++)
	{
		continenteIngresado = prompt("Ingrese un continente");
		while(isNaN(continenteIngresado) == false || continenteIngresado != "asia" && continenteIngresado != "europa" && continenteIngresado != "america" && continenteIngresado != "oceania" && continenteIngresado != "africa")
		{
			continenteIngresado = prompt("Error. Ingrese un continente");
		}

		paisIngresado = prompt("Ingrese un pais");
		while(isNaN(paisIngresado) == false)
		{
			paisIngresado = prompt("Error. Ingrese un pais");
		}

		cantidadHabitantesIngresada = prompt("Ingrese una cantidad de habitantes en millones");
		cantidadHabitantesIngresada = parseInt(cantidadHabitantesIngresada);
		while(isNaN(cantidadHabitantesIngresada) == true || cantidadHabitantesIngresada < 1 || cantidadHabitantesIngresada >7000)
		{
			cantidadHabitantesIngresada = prompt("Error. Ingrese una cantidad de habitante");
		}

		nivelPobrezaIngresada = prompt("Ingrese un nivel de pobreza");
		while(isNaN(nivelPobrezaIngresada) == false || nivelPobrezaIngresada != "pobre" && nivelPobrezaIngresada != "rico" && nivelPobrezaIngresada != "muy rico" || continenteIngresado == "europa" && nivelPobrezaIngresada == "pobre")
		{
			nivelPobrezaIngresada = prompt("Error. Ingrese un nivel de pobreza");
		}

		temperaturaMinimaIngresada = prompt("Ingrese una temperatura");
		temperaturaMinimaIngresada = parseInt(temperaturaMinimaIngresada);
		while(isNaN(temperaturaMinimaIngresada) == true || temperaturaMinimaIngresada < -50 || temperaturaMinimaIngresada > 50)
		{
			temperaturaMinimaIngresada = prompt("Error. Ingrese una temperatura");
		}

		//f)el promedio de habitantes entre los paises ingresados.
		contadorHabitantesTotales++;
		acumuladorHabitantesTotales = acumuladorHabitantesTotales + cantidadHabitantesIngresada;
		
		//a)La cantidad de temperaturas pares.
		if(temperaturaMinimaIngresada % 2 == 0)
		{
			cantidadTemperaturasPares++;
		}

		//c)El nombre del pais con menos habitantes
		if(banderaPaisMenosHabitantes == 0 || cantidadHabitantesIngresada < cantidadPaisConMenosHabitantes)
		{
			cantidadPaisConMenosHabitantes = cantidadHabitantesIngresada;
			nombrePaisConMenosHabitantes = paisIngresado;
			banderaPaisMenosHabitantes = 1;
		}

		//d)la cantidad de paises que superan los 40 grados.
		//g)el promedio de habitantes entre los paises que superan los 40 grados   
		if(temperaturaMinimaIngresada > 40)
		{
			paisesQueSuperanLos40++;
			acumuladorHabitantesQueSuperanLos40 = acumuladorHabitantesQueSuperanLos40 + cantidadHabitantesIngresada;
		}

		//H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
		if(banderaMenorTemperatura == 0 || temperaturaMinimaIngresada < menorTemperaturaRegistrada)
		{
			menorTemperaturaRegistrada = temperaturaMinimaIngresada;
			nombrePaisMenorTemperatura = paisIngresado;
			banderaMenorTemperatura = 1;
		}

		//i) que continente tiene mas habitantes.
		switch(continenteIngresado)
		{
			case "america":
				acumuladorHabitantesAmerica = acumuladorHabitantesAmerica + cantidadHabitantesIngresada;

				//e)la cantidad de paises de america que tienen menos de 0 grados .
				if(temperaturaMinimaIngresada < 0)
				{
					paisesAmericanosConMenosDeCero++;
				}
			break;
			case "europa":
				acumuladorHabitantesEuropa = acumuladorHabitantesEuropa + cantidadHabitantesIngresada;
				//b)la cantidad de temperaturas impares de europa
				if(temperaturaMinimaIngresada % 2 != 0)
				{
					temperaturasImparesEuropa++;
				}
			break;
			case "asia":
				acumuladorHabitantesAsia = acumuladorHabitantesAsia + cantidadHabitantesIngresada;
			break;
			case "oceania":
				acumuladorHabitantesOceania = acumuladorHabitantesOceania + cantidadHabitantesIngresada;
			break;
			case "africa":
				acumuladorHabitantesAfrica = acumuladorHabitantesAfrica + cantidadHabitantesIngresada;
			break;
		}
	}

	alert("la cantidadTemperaturasPares es: " + cantidadTemperaturasPares);
	alert("temperaturas impares en Europa " + temperaturasImparesEuropa);
	alert("El pais con menos habitantes es " + nombrePaisConMenosHabitantes);
	alert("Los paises que superan los 40° son " + paisesQueSuperanLos40);

	promedioHabitantesTotales = acumuladorHabitantesTotales / contadorHabitantesTotales;
	alert("El promedio total de habitantes es " + promedioHabitantesTotales);

	promedioHabitantesQueSuperanLos40 = acumuladorHabitantesQueSuperanLos40 / paisesQueSuperanLos40;
	alert("El promedio de habitantes en paises que superan los cuarenta es: "+ promedioHabitantesQueSuperanLos40);

	alert("El pais con la menor temperatura registrada es " + nombrePaisMenorTemperatura + " con " + menorTemperaturaRegistrada + "°");
	
	if(acumuladorHabitantesAmerica > acumuladorHabitantesEuropa && acumuladorHabitantesAmerica > acumuladorHabitantesAsia && acumuladorHabitantesAmerica > acumuladorHabitantesAfrica && acumuladorHabitantesAmerica > acumuladorHabitantesOceania)
	{
		alert("America tiene mas habitantes");
	}
	else
	{
		if(acumuladorHabitantesEuropa > acumuladorHabitantesOceania && acumuladorHabitantesEuropa > acumuladorHabitantesAfrica && acumuladorHabitantesEuropa > acumuladorHabitantesAsia)
		{
			alert("Europa tiene mas habitantes");
		}
		else
		{
			if(acumuladorHabitantesAsia > acumuladorHabitantesOceania && acumuladorHabitantesAsia > acumuladorHabitantesAfrica)
			{
				alert("Asia tiene mas habitantes");
			}
			else
			{
				if(acumuladorHabitantesAfrica > acumuladorHabitantesOceania)
				{
					alert("Africa tiene mas habitantes");
				}
				else
				{
					alert("Oceanía tiene mas habitantes");
				}
			}
		}
	}
	


	/*let numero;
	let pares;
	let contador;

	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);

	for(contador = 1; contador < numero + 1; contador ++)
	{
		if(contador % 2 == 0)
		{
			pares++;
			console.log(contador);
		}
	}*/
}//FIN DE LA FUNCIÓN