// por qué ?
// Este programa se creo con el fin de mejorar la agilidad de las personas al poder adivinar la palabra en solo dos intentos dandole dos pistas.
// Para qué ? 
// El objetivo de este programa es generar entretenimiento mediante el desafio al tratar de adivinar una palabra con las dos pistas que se les brindaran	
// cómo ?
// El programa inicia pidiendo la palabra para ser adivinanda, seguido de esto se le pedira que ingrese las 2 pistas, las cuales se almacenaran el una matriz llamadas palabras, se le proporcionara el numneros de caracteres que tiene la palabra, y se le mostrara la primera pista, si la respuesta e incorrecta se le mostrara la ultiuma pista cuando  el usuario agote sus intentos le saldra un mensaje y se le mostrara la palabra  
Algoritmo Palabrerio
	Definir palabras, palabra, lon, prueba, pista Como Cadena
	Definir d, i, i2, intentos, p Como Entero
	Dimensionar palabras(10000,2)
	Escribir 'ingrese palabra'
	Leer palabras[1,1]
	Escribir '**************************************'
	Escribir 'Ingrese 2 pistas'
	p <- 2
	Para i2<-1 Hasta p Con Paso 1 Hacer
		Escribir 'La ', i2, ' pista es: '
		Leer palabras[i2,2]
	FinPara
	Limpiar Pantalla
	Escribir '**************************************'
	Escribir 'La palabra tiene ', Longitud(palabras[1,1]), ' caracter'
	Escribir 'su primera pista es: ', palabras[1,2]
	Escribir '**************************************'
	intentos <- 2
	Repetir
		Escribir 'Ingrese su respuesta: '
		Leer prueba
		Si prueba==palabras[1,1] Entonces
			Escribir 'correcto'
			intentos <- 2
		SiNo
			Escribir 'su segunda pista es: ', palabras[2,2]
			intentos <- intentos-1
			Si intentos==0 Entonces
				Escribir 'Ups!! perdiste la palabra era: ', palabras[1,1]
			SiNo
				Escribir 'Una vida menos'
			FinSi
		FinSi
	Hasta Que intentos==0 O intentos==2
FinAlgoritmo
