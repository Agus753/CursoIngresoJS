function mostrar()
{
	//tomo la edad  
	/*let peso;
	let altura;
	let imc;
	let mensaje;

	peso = prompt("Ingrese su peso");
	peso = parseInt(peso);

	altura = prompt("Ingrese su altura");
	altura = parseFloat(altura);

	imc = peso / (altura * 2);
	imc = parseFloat(imc);

	if(imc < 18.5)
	{
		mensaje = "Bajo Peso";
	}

	else
	{
		if(imc > 18.4 && imc < 25)
		{
			mensaje = "Adecuado";
		}

		else
		{
			if(imc > 24.9 && imc <30)
			{
				mensaje = "Preobesidad";
			}

			else
			{
				if(imc > 2.9 && imc < 35)
				{
					mensaje = "Obesidad grado I";
				}

				else
				{
					if(imc > 34.9 && imc < 40)
					{
						mensaje = "Obesidad grado II";
					}

					else
					{
						mensaje = "Obesidad grado III";
					}	
				}
			}
		}
	}
 
 	alert(mensaje);*/


	let edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if(edad > 17)
	{

		alert("Es mayor de edad");
	}
	

}//FIN DE LA FUNCIÓN