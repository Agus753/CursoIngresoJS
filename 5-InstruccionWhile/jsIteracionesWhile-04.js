/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	let veces;

	veces = 1;

	numero = prompt("ingrese un número entre 0 y 10.");
	numero = parseInt(numero);

	while(numero > -1 && numero < 10 && veces != 0)
	{
		document.getElementById('txtIdNumero').value = "El numero es válido";
		veces--;
	}
}//FIN DE LA FUNCIÓN