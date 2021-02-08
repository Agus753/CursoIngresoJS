/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
//var numeroSecreto; 
//var contadorIntentos;

function comenzar()
{
	let numeroSecreto;
	let numeroIngresado;
	let contadorIntentos;

	numeroSecreto = Math.floor(Math.random() * 100) + 1;

	numeroIngresado = document.getElementById('txtIdNumero').value;
	numeroIngresado =parseInt(numeroIngresado);

	contadorIntentos = 0; 
}

function verificar()
{
	let numeroSecreto;
	let numeroIngresado;
	let contadorIntentos;

	numeroSecreto = Math.floor(Math.random() * 100) + 1;

	numeroIngresado = document.getElementById('txtIdNumero').value;
	numeroIngresado =parseInt(numeroIngresado);

	contadorIntentos = 1; 

	if(numeroIngresado > 0 && numeroIngresado < 101)
	{

		if(numeroIngresado == numeroSecreto)
		{
			document.getElementById('txtIdIntentos').value = "Usted es un ganador!!! y en solo " + contadorIntentos + " tentos"
		}

		if(numeroIngresado > numeroSecreto)
		{
			document.getElementById('txtIdIntentos'). value = "Se pasó del numero secreto"
		}

		if(numeroIngresado < numeroSecreto)
		{
			document.getElementById('txtIdIntentos'). value = "Falta para llegar al numero secreto"
		}

		contadorIntentos = contadorIntentos + 1;
	}
	
}