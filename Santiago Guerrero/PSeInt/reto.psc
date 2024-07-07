Algoritmo Palabrerio
	Definir palabras, palabra,lon,prueba,pista Como Cadena
	Definir d, i, i2, intentos, p Como Entero
	
	Escribir "Ingrese cuantas palabras deseqa colocar: "
	Leer d;
	Dimensionar palabras[10000,2];
	
	
	Para i<-1 Hasta d Con Paso 1 Hacer
		Escribir "ingrese la ", i " palabra";
		Leer palabras[i,1]
		Escribir "**************************************"
		Escribir "Ingrese 2 pistas"
		p<-2;
		Para i2<-1 Hasta d*p Con Paso 1 Hacer
			
			Escribir "La ", i2, " pista es: ";
			Leer palabras[i2,2];
			
		Fin Para
	Fin Para
	Limpiar Pantalla
	
	
	Escribir "**************************************"
	
	Para i2<-1 Hasta d Con Paso 1 Hacer
		
		Escribir "La palabra ",i2, " tiene ", Longitud(palabras[i2,1]), " caracter"
		Escribir "su primera pista es: ", palabras[1,2]
		Escribir "**************************************"
		
		intentos <- 2;
		Repetir
			
			Escribir "Ingrese su respuesta: "
			Leer prueba
			si prueba == palabras[i2,1] Entonces
				Escribir "correcto";
				intentos <- 2;
			SiNo
				Escribir "su segunda pista es: ", palabras[2,2];
				Escribir "Error"
				intentos <- intentos -1;
			FinSi
		Hasta Que intentos == 0 o intentos == 2
		
		
	Fin Para
	
FinAlgoritmo