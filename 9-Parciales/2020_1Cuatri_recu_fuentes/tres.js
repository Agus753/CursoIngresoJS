/*
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/
function mostrar()
{
	let respuesta;
	let nombreIngresado;
	let nacionalidadIngresada;
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let temperaturaCorporalIngresada;
	let banderaMayorTemperatura;
	let temperaturaMayor;
	let nacionalidadMayorTemperatura;
	let mayoresDeEdadSolteros;
	let mujeresSolterasOViudas;
	let ancianosConMuchaTemperatura;
	let contadorMujeresCasadas;
	let acumuladorEdadMujeresCasadas;
	let promedioMujeresCasadas;

	respuesta = "si";
	banderaMayorTemperatura = 0;
	mayoresDeEdadSolteros = 0;
	mujeresSolterasOViudas = 0;
	ancianosConMuchaTemperatura=0;
	contadorMujeresCasadas = 0;
	acumuladorEdadMujeresCasadas = 0;

	while(respuesta == "si")
	{
		nombreIngresado = prompt("Ingrese su nombre");
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("Error.Ingrese su nombre");
		}

		nacionalidadIngresada = prompt("Ingrese su nacionalidad");
		while(isNaN(nacionalidadIngresada) == false)
		{
			nacionalidadIngresada = prompt("Error.Ingrese su nacionalidad");
		}

		edadIngresada = prompt("Ingrese su edad");
		edadIngresada = parseInt(edadIngresada);
		while(isNaN(edadIngresada) == true)
		{
			edadIngresada = prompt("Error.Ingrese su edad");
		}

		sexoIngresado = prompt("Ingrese su sexo");
		while(isNaN(sexoIngresado) == false || sexoIngresado != "F" && sexoIngresado != "M")
		{
			sexoIngresado = prompt("Error.Ingrese su sexo");
		}

		estadoCivilIngresado = prompt("Ingrese su estadoCivil");
		while(isNaN(estadoCivilIngresado) == false || estadoCivilIngresado != "soltero" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "viudo")
		{
			estadoCivilIngresado = prompt("Error.Ingrese su estado civil");
		}

		temperaturaCorporalIngresada = prompt("Ingrese su temperatura");
		temperaturaCorporalIngresada = parseInt(temperaturaCorporalIngresada);
		while(isNaN(temperaturaCorporalIngresada) == true || temperaturaCorporalIngresada < 20 || temperaturaCorporalIngresada > 50)
		{
			temperaturaCorporalIngresada = prompt("Error.Ingrese su temperatura corporal");
		}

		//a) la Nacionalidad de la persona con mas temperatura.
		if(banderaMayorTemperatura == 0 || temperaturaCorporalIngresada > temperaturaMayor)
		{
			temperaturaMayor = temperaturaCorporalIngresada;
			nacionalidadMayorTemperatura = nacionalidadIngresada;
			banderaMayorTemperatura = 1;
		}

		//b) Cuantos mayores de edad( más de 17) estan solteros
		if(edadIngresada > 17 && estadoCivilIngresado == "soltero")
		{
			mayoresDeEdadSolteros++;
		}

		//c) La cantidad de Mujeres que hay solteras o viudas.
		if(sexoIngresado == "F")
		{
			if(estadoCivilIngresado== "soltero" || estadoCivilIngresado == "viudo")
			{
				mujeresSolterasOViudas++;
			}
			else//e) El promedio de edad entre las mujeres casadas.
			{
				contadorMujeresCasadas++;
				acumuladorEdadMujeresCasadas = acumuladorEdadMujeresCasadas + edadIngresada;
			}
		}
		

		//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		if(edadIngresada > 60 && temperaturaCorporalIngresada > 38)
		{
			ancianosConMuchaTemperatura++;
		}

		respuesta = prompt("Desea seguir?")
	}

	alert("Quien tiene mas temperatura es " + nacionalidadMayorTemperatura);
	alert("Los mayores de edad solteros son" + mayoresDeEdadSolteros);
	alert("Las mujeres solteras o viudas son " + mujeresSolterasOViudas);
	alert("Los ancianos con mas de 38 de temperatura son " + ancianosConMuchaTemperatura);

	promedioMujeresCasadas = acumuladorEdadMujeresCasadas / contadorMujeresCasadas;
	alert("El promedio de edad de mujeres casadas es " + promedioMujeresCasadas);
}
