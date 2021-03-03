/*
(SWITCH)pedir el ingreso de un día de la semana,
si es fin de semana mostrar " buen finde",
si es día hábil “ a trabajar”,
si no es un día valido, también informarlo,
usar una sola ventana alert.
*/
function mostrar()
{
	let diaSemana;
	let nota;

	diaSemana = prompt("Ingrese un dia de la semana");

	switch(diaSemana)
	{
		case "sabado":
		case "domingo":
			nota ="buen finde";
			break;
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			nota = "a trabajar";
			break;
		default:
			nota ="No es un dia";
			break;
	}

	alert(nota);
}
