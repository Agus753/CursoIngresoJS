function mostrar()
{
	let numero;
	let suma;
	let contador;
	let promedio;

	suma = 0;
	contador = 0;

	while(contador < 5 /* contador != 0*/)
	{
		numero = prompt("Deme un numero");
		numero = parseInt(numero);
		
		contador++; //contador--;
		suma = suma + numero;
	}

	promedio = suma / contador; //suma / 5 tenía

	document.getElementById('txtIdSuma').value = "La suma es: " + suma;
	document.getElementById('txtIdPromedio').value = "El promedio es: " + promedio;


}//FIN DE LA FUNCIÓN