function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let examen = Math.floor(Math.random() * 10) + 1;

	alert("Su nota es: " + examen);	

	if (examen < 5)
	{
		alert("Vamos, la próxima se puede");
	}
	else
	{
		if(examen > 8)
		{
			alert("EXCELENTE");
		}
		else
		{
			alert("APROBÓ");
		}
	}



}//FIN DE LA FUNCIÓN