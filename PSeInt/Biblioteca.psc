Proceso sin_titulo
	Definir ingreso, pr, libros Como Cadena; //pr = pregunta
	Definir i, i2, re, d, op Como Entero; //i, i2 pocisión del vector, re = repeticion, d = datos 
	Dimensionar libros(100,4);
	Repetir
		Escribir 'Desea ingresar al sistema si / no';
		Leer ingreso;
		Mientras ingreso == 'si' Hacer
			Escribir 'El sistema le ofrece las siguientes opciones: ';
			Escribir '1. Ingresar un liro: ';
			Escribir '2. ver libros ';
			Escribir '3. salir';
			Leer op;
			Segun op Hacer
				1:
					re <- 1;
					Mientras re=1 Hacer
						Escribir 'Cuantos libros desea ingresar: ';
						Leer d;
						i <- 1;
						Mientras i<=d Hacer
							Escribir 'Ingrese los datos del libro ', i;
							Escribir 'Ingrese el nombre del libro: ';
							Leer libros[i,1];
							Escribir 'Ingrese el autor del libro ';
							Leer libros[i,2];
							Escribir 'Ingrese el año del libro ';
							Leer libros[i,3];
							i <- i+1;
							Escribir 'Desea ingresar otro libro ?, precione cualquier letra para si, sino escraba no ';
							Leer pr;
							Si pr=='no' Entonces
								Escribir 'Fue un gusto ';
								re <- 0;
							SiNo
								re <- 1;
							FinSi
						FinMientras
					FinMientras
				2:
					Escribir 'Lista de libros: ';
					i2 <- 1;
					Mientras i2<=d Hacer
						Escribir 'El nombre del libro ', i2, ' es:';
						Escribir libros[i2,1];
						Escribir 'El nombre del libro ', i2, ' es:';
						Escribir libros[i2,2];
						Escribir 'El nombre del libro ', i2, ' es:';
						Escribir libros[i2,3];
						i2 <- i2+1;
					FinMientras
				3:
					Escribir 'Adios';
					ingreso <- "no";
					
				De Otro Modo:
					Escribir 'Invalido';
			FinSegun
		FinMientras
	Hasta Que ingreso<>'si' ;
FinProceso
