// Por qué ? 
// Este codigo se creo para crear una simulaicon del tradicional juego de pieda, papel o tijera
// Para qué ? 
// El objetivo de este codigo es brindarle entrenimiento al usuario dandole la posibilidad de enfrentarse contra una maquina 
// cómo?
// El programa da inicio preguntandole al usuario si desea jugar, si escribe que si, se eleirade manera aleatoria una de las opciones que se encuetran en la matriz, ya sea piedra, papel o tijera, seguido de eso abra una cuenta regresiva que al terminar mostrara cual fue la opcion que se generro al azar y le preguntara si desea seguir jugando
Algoritmo sin_titulo
	Definir op, ppt Como Cadena
	Definir index Como Entero
	Dimensionar ppt(3)
	ppt[0] <- 'Tijeras'
	ppt[1] <- 'papel'
	ppt[2] <- 'piedra'
	Escribir 'desea jugar ? ingrese (si) para jugar o (no) para salir'
	Leer op
	Mientras op='si' Hacer
		Repetir
			index <- aleatorio(0,2)
			Escribir 'a la cuenta de 3 !!!!'
			Esperar 1 Segundos
			Escribir '3....'
			Esperar 1 Segundos
			Escribir '2....'
			Esperar 1 Segundos
			Escribir '1....'
			Esperar 1 Segundos
			Escribir ppt[index]
			Escribir 'desea jugar ? ingrese (si) para jugar o (no) para salir'
			Leer op // escoje el dato del vector segun el valor aleatori de index
		Hasta Que op='no'
	FinMientras
	Escribir 'nos vemos'
FinAlgoritmo
