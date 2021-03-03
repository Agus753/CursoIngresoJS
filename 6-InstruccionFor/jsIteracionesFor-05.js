/*
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano
*/
function mostrar()
{

	let respuesta;
	let tipoIngresado;
	let tipoPelajeIngresado;
	let edadIngresada;
	let nombreIngresado;
	let razaIngresada;
	let pesoIngresado;
	let estadoClinicoIngresado;
	let temperaturaCorporalIngresada;
	let banderaPerroMasGrande;
	let nombrePerroMasGrande;
	let pesoPerroMasGrande;
	let contadorTotalMascotas;
	let contadorMascotasEnfermas; 
	let promedioMascotasEnfermas;
	let tipoMenorTemperaturaSinPelo;
	let nombreMenorTemperaturaSinPelo;
	let banderaPeladoConMenosTemperatura;
	let menorTemperaturaSinPelo;
	let acumuladorTemperaturaPerros;
	let acumuladorTemperaturaGatos;
	let acumuladorTemperaturaOtraCosa;
	let contadorPerros;
	let contadorGatos;
	let contadorOtraCosa;
	let contadorPerrosYgatos;
	let estadoClinicoAdopcion;
	let estadoClinicoEnfermos;
	let estadoClinicoInternado;
	let sumaPesoTotal;
	let promedioPesoTotal;
	let banderaGatoSinPeloLiviano;
	let gatoSinPeloMasLiviano;
	let nombreGatoSinPelosMasLiviano;
	let razaGatoSinPelosLiviano;
	let nombreOtraCosa;

	banderaPerroMasGrande =0;
	contadorTotalMascotas = 0;
	contadorMascotasEnfermas = 0;
	contadorOtraCosa = 0;
	banderaPeladoConMenosTemperatura = 0;
	contadorPerros = 0;
	contadorGatos = 0;
	contadorOtraCosa = 0;
	acumuladorTemperaturaPerros = 0;
	acumuladorTemperaturaGatos = 0;
	acumuladorTemperaturaOtraCosa = 0;
	contadorPerrosYgatos = 0;
	estadoClinicoAdopcion = 0;
	estadoClinicoEnfermos = 0;
	estadoClinicoInternado = 0;
	sumaPesoTotal = 0;
	banderaGatoSinPeloLiviano = 0;


	respuesta = "si";

	while(respuesta == "si")
	{
		tipoIngresado = prompt("Ingrese el tipo de animal");
		while(isNaN(tipoIngresado) == false || tipoIngresado != "perro" && tipoIngresado != "gato" && tipoIngresado != "otra cosa")
		{
			tipoIngresado = prompt("Error. Ingrese el tipo de animal");
		}

		tipoPelajeIngresado = prompt("Ingrese el tipo de pelaje");
		while(isNaN(tipoPelajeIngresado) == false || tipoPelajeIngresado != "corto" && tipoPelajeIngresado != "largo" && tipoPelajeIngresado != "sin pelo")
		{
			tipoPelajeIngresado = prompt("Error. Ingrese el tipo de pelaje");
		}

		edadIngresada = prompt("Ingrese la edad del animal");
		edadIngresada = parseInt(edadIngresada);
		while(isNaN(edadIngresada) == true || edadIngresada < 0 || edadIngresada > 25)
		{
			edadIngresada = prompt("Error. Ingrese la edad del animal");
			edadIngresada = parseInt(edadIngresada);
		}

		nombreIngresado = prompt("Ingrese el nombre del animal");
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("Error. Ingrese el nombre del animal");
		}

		razaIngresada = prompt("Ingrese la raza del animal");
		while(isNaN(razaIngresada) == false)
		{
			razaIngresada = prompt("Error. Ingrese la raza del animal");
		}

		pesoIngresado = prompt("Ingrese el peso del animal");
		pesoIngresado = parseInt(pesoIngresado);
		while(isNaN(pesoIngresado) == true || pesoIngresado < 0 || pesoIngresado > 30)
		{
			pesoIngresado = prompt("Error. Ingrese el peso del animal");
			pesoIngresado = parseInt(pesoIngresado);
		}

		estadoClinicoIngresado = prompt("Ingrese estado clinico del animal");
		while(isNaN(estadoClinicoIngresado) == false || estadoClinicoIngresado != "enfermo" && estadoClinicoIngresado != "internado" && estadoClinicoIngresado != "adopcion")
		{
			estadoClinicoIngresado = prompt("Error. Ingrese estado clinico del animal");
		}

		temperaturaCorporalIngresada = prompt("Ingrese la temperaruta corporal del animal");
		temperaturaCorporalIngresada = parseInt(temperaturaCorporalIngresada);
		while(isNaN(temperaturaCorporalIngresada) == true || temperaturaCorporalIngresada < 20 || temperaturaCorporalIngresada > 50)
		{
			temperaturaCorporalIngresada = prompt("Error. Ingrese la temperaruta corporal del animal");
			temperaturaCorporalIngresada = parseInt(temperaturaCorporalIngresada);
		}

		//b)El porcentaje de enfermos sobre el total de mascotas
		contadorTotalMascotas++;

		//d)El animal sin pelo con menor temperatura corporal
		if(tipoPelajeIngresado == "sin pelo" && menorTemperaturaSinPelo > temperaturaCorporalIngresada)
		{
			if(banderaPeladoConMenosTemperatura == 0)
			{
				menorTemperaturaSinPelo = temperaturaCorporalIngresada;
				tipoMenorTemperaturaSinPelo = tipoIngresado;
				banderaPeladoConMenosTemperatura = 1;
			}
			else
			{
				menorTemperaturaSinPelo = temperaturaCorporalIngresada;
				tipoMenorTemperaturaSinPelo = tipoIngresado;
			}
		}

		//e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
		switch(tipoIngresado)
		{	//g)Que estado clinico tiene la menor cantidad de mascotas   
			case "perro":
				contadorPerros++;
				acumuladorTemperaturaPerros = acumuladorTemperaturaPerros + temperaturaCorporalIngresada;

				if(estadoClinicoIngresado == "enfermo")
				{
					estadoClinicoEnfermos++;
				}
				else
				{
					if(estadoClinicoIngresado == "internado")
					{
						estadoClinicoInternado++;
					}
					else
					{
						estadoClinicoAdopcion++;
					}
				}

				//a)El perro mas pesado
				if(banderaPerroMasGrande == 0 || pesoIngresado > pesoPerroMasGrande)
				{
					pesoPerroMasGrande = pesoIngresado;
					nombrePerroMasGrande = nombreIngresado; 
					banderaPerroMasGrande = 1;
				}
			break;
			case "gato":
				contadorGatos++;
				acumuladorTemperaturaGatos = acumuladorTemperaturaGatos + temperaturaCorporalIngresada;

				if(estadoClinicoIngresado == "enfermo")
				{
					estadoClinicoEnfermos++;
				}
				else
				{
					if(estadoClinicoIngresado == "internado")
					{
						estadoClinicoInternado++;
					}
					else
					{
						estadoClinicoAdopcion++;
					}
				}
				//i)El nombre y raza del gato sin pelos mas liviano
				if(tipoPelajeIngresado == "sin pelo" && pesoIngresado < gatoSinPeloMasLiviano)
				{
					if(banderaGatoSinPeloLiviano == 0)
					{
						gatoSinPeloMasLiviano = pesoIngresado;
						nombreGatoSinPelosMasLiviano = nombreIngresado;
						razaGatoSinPelosLiviano = razaIngresada;
						banderaGatoSinPeloLiviano = 1;
					}
					else
					{
						gatoSinPeloMasLiviano = pesoIngresado;
						nombreGatoSinPelosMasLiviano = nombreIngresado;
						razaGatoSinPelosLiviano = razaIngresada;
					}
				}
			break;
			case "otra cosa":
				contadorOtraCosa++;
				acumuladorTemperaturaOtraCosa = acumuladorTemperaturaPerros + temperaturaCorporalIngresada;

				if(estadoClinicoIngresado == "enfermo")
				{
					estadoClinicoEnfermos++;
				}
				else
				{
					if(estadoClinicoIngresado == "internado")
					{
						estadoClinicoInternado++;
					}
					else
					{
						estadoClinicoAdopcion++;
					}
				}
				////c)El nombre de la ultima mascota de tipo "otra cosa"
				nombreOtraCosa = nombreIngresado;
			break;
		}

		//H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
		sumaPesoTotal = sumaPesoTotal + pesoIngresado;

		respuesta = prompt("¿Desea continuar?");
	}//FIN WHILE

	if(banderaPerroMasGrande == 1)
	{
		alert("El perro mas pesado es: " + nombrePerroMasGrande);
	}
	
	if(contadorMascotasEnfermas > 0)
	{
		promedioMascotasEnfermas =contadorMascotasEnfermas *100 /contadorMascotasEnfermas;
		alert("El promedio de mascotas enfermas es: " + promedioMascotasEnfermas);
	}

	if(nombreOtraCosa > 0)
	{
		alert("El nombre de la ultima mascota otra cosa es: " + nombreOtraCosa);
	}

	if(banderaPeladoConMenosTemperatura == 1)
	{
		alert("El tipo de animal sin pelaje con menor temperatura es: " + tipoMenorTemperaturaSinPelo);
	}

	promedioPerros = acumuladorTemperaturaPerros / contadorPerros;
	promedioGatos = acumuladorTemperaturaGatos / contadorGatos;
	promedioOtraCosa = acumuladorTemperaturaOtraCosa / contadorOtraCosa;

	if(promedioPerros > promedioGatos && promedioPerros > promedioOtraCosa)
	{
		alert("El promedio de temperatura de los perros es " + promedioPerros);
	}
	else
	{
		if(promedioGatos > promedioOtraCosa)
		{
			alert("El promedio de temperatura de los gatos es " + promedioGatos);
		}
		else
		{
			alert("El promedio de temperatura de las mascotas otra cosa es " + promedioOtraCosa);
		}
	}

	////f)Sumando gatos y perros que porcentaje del total de mascotas son?
	contadorPerrosYgatos = contadorPerros + contadorGatos;
	if(contadorPerrosYgatos > 1)
	{
		promedioPerrosYGatos = contadorPerrosYgatos * 100 / contadorTotalMascotas;
		alert("El promedio de perros y gatos sobre el total de mascotas es: " + promedioPerrosYGatos);
	}

	if(estadoClinicoEnfermos < estadoClinicoInternado && estadoClinicoEnfermos < estadoClinicoAdopcion)
	{
		alert("Hay menos animales enfermos");
	}
	else
	{
		if(estadoClinicoInternado < estadoClinicoAdopcion)
		{
			alert("Hay menos animales internados");
		}
		else
		{
			alert("Hay menos animales en adopción");
		}
	}

	promedioPesoTotal = sumaPesoTotal / contadorTotalMascotas;
	alert("El promedio total es: " + promedioPesoTotal);

	if(banderaGatoSinPeloLiviano == 1)
	{
		alert("El gato pelado mas liviano es " + nombreGatoSinPelosMasLiviano + " y es un " + razaGatoSinPelosLiviano);
	}






	/*let numero;

	for( ; ; )
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		if(numero == 9)
		{
			break;
		}

		alert("Usted ingresó el numero " + numero);
	}*/
}//FIN DE LA FUNCIÓN