// por qué ?
// Este programa se crea con el fin de proporcionar una herraminta que facilita la conversion de unidades de peso como lo son (kilogramos, hectogramos, decagramos, decigramos, centigramos y miligramos) a gramos.
// Para qué ?
// El proposito de este programa es que los usuros puedan realizar las conversiones de unidades de masa de una manera mas rapida y precisa
// cómo ?
// El programa da inicio preguntandole al usuario si desea ingresar al sistema, si escribe que si, se le mostraran las diferentes opciones que tiene para convertir sus unidades de masa desde kilogramos a gramos, hasta miligramos a gramos dependiendo la opcion que el usurio selecciones se realizara el debido proceso, tambien incluye una validacion la cual no le perminte ingresar un valor que este por debajo de 0. Este proceso se repetira hasta que el usuario ingrese la opcion de salir
Algoritmo conversor
	Definir kg, hg, dag, dg, cg, mg, conversion Como Real
	Definir opc Como Entero
	Definir ingreso Como Cadena
	Repetir
		Escribir 'Desea ingresar al sistema si / no '
		Leer ingreso
		Mientras ingreso=='si' Hacer
			Escribir 'El sistema ofrece las siguientes opciones: '
			Escribir ' '
			Escribir '1. Convertir de Kilogramo a gramo'
			Escribir '2. Convertir de Hectogramo a gramo'
			Escribir '3. Convertir de Decagramo a gramo'
			Escribir '4. Convertir de Decigramo a gramo'
			Escribir '5. Convertir de Centigramo a gramo'
			Escribir '6. Convertir de Miligramo a gramo'
			Escribir '7. Salir'
			Escribir '------------------------------------------------------------'
			Leer opc
			Según opc Hacer
				1:
					Escribir 'Convertir de Kilogramo a gramo'
					Escribir 'Ingrese el valor de kilogramos que deseas convertir: '
					Leer kg
					Escribir '------------------------------------------------------------'
					Si kg<=0 Entonces
						Escribir 'El valor debe ser mayor de 0'
					SiNo
						conversion <- kg*1000
						Escribir 'El resultado de la conversión es: ', conversion, 'kg'
					FinSi
					Escribir '------------------------------------------------------------'
				2:
					Escribir 'Convertir de Hectogramo a gramo'
					Escribir 'Ingrese el valor de Hectogramo que deseas convertir: '
					Leer hg
					Si hg<=0 Entonces
						Escribir 'El valor debe ser mayor de 0'
					SiNo
						conversion <- hg*100
						Escribir 'El resultado de la conversión es: ', conversion, 'hg'
					FinSi
					Escribir '------------------------------------------------------------'
				3:
					Escribir 'Convertir de Decagramo a gramo'
					Escribir 'Ingrese el valor de Decagramo que deseas convertir: '
					Leer dag
					Si dag<=0 Entonces
						Escribir 'El valor debe ser mayor de 0'
					SiNo
						conversion <- dag*10
						Escribir 'El resultado de la conversión es: ', conversion, 'dag'
					FinSi
					Escribir '------------------------------------------------------------'
				4:
					Escribir 'Convertir de Decigramo a gramo'
					Escribir 'Ingrese el valor de Decigramo que deseas convertir: '
					Leer dg
					Si dag<=0 Entonces
						Escribir 'El valor debe ser mayor de 0'
					SiNo
						conversion <- dg*0.1
						Escribir 'El resultado de la conversión es: ', conversion, 'dg'
					FinSi
					Escribir '------------------------------------------------------------'
				5:
					Escribir 'Convertir de Centigramo a gramo'
					Escribir 'Ingrese el valor de Centigramo que deseas convertir: '
					Leer cg
					Si cg<=0 Entonces
						Escribir 'El valor debe ser mayor de 0'
					SiNo
						conversion <- cg*0.01
						Escribir 'El resultado de la conversión es: ', conversion, 'cg'
					FinSi
					Escribir '------------------------------------------------------------'
				6:
					Escribir 'Convertir de Miligramo a gramo'
					Escribir 'Ingrese el valor de Miligramo que deseas convertir: '
					Leer mg
					Si mg<=0 Entonces
						Escribir 'El valor debe ser mayor de 0'
					SiNo
						conversion <- mg*0.001
						Escribir 'El resultado de la conversión es: ', conversion, 'mg'
					FinSi
					Escribir '------------------------------------------------------------'
				7:
					Escribir 'Salir'
					ingreso <- 'no'
			FinSegún
		FinMientras
	Hasta Que ingreso=='no'
FinAlgoritmo
