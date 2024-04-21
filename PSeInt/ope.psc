Algoritmo ope
	
	Definir opciones,sueldo,retiro,ingreso Como Entero;
	Definir opcionR Como Caracter;
	
	sueldo  <- 1000000;
	
	Repetir
		
		Escribir "Desea Ingresar al sistema s = si / n = no";
		Leer  opcionR;
		si opcionR == "s" Entonces
			Repetir
				Escribir "El programa ofrece las siguientes funciones: ";
				Escribir "___________________________________________";
				Escribir  "1. Consultar el sueldo";
				Escribir "___________________________________________";
				Escribir "2. retirar sueldo";
				Escribir "___________________________________________";
				Escribir "3. Ingresar sueldo";
				Escribir "___________________________________________";
				Escribir "4.salir";
				Escribir "___________________________________________";
				Leer opciones;
				
				Segun opciones Hacer
					1:
						Escribir "___________________________________________";
						Escribir "su sueldo es: $",sueldo
						Escribir "___________________________________________";
					2:
						
						Repetir
							Escribir "digite la cantidad que desea retirar: ";
							Leer retiro
							
							si retiro <= sueldo Entonces
								sueldo = sueldo - retiro
								Escribir "___________________________________________";
								Escribir "Retiro Exitoso!!";
								Escribir "Su nuevo sueldo es: ",sueldo;
								Escribir "___________________________________________";
								
							SiNo
								Escribir "Sueldo insufiente"
							FinSi
							
							Escribir "Desea retirar de nuevo s == si / n == no"
							Leer opcionR
						Hasta Que opcionR == "n"
						
					3:
						Repetir
							Escribir "Digite la cantidad que desea ingresar: "
							Leer ingreso;
							si ingreso > 0 Entonces
								sueldo = sueldo + ingreso
								Escribir "___________________________________________";
								Escribir "Sueldo ingresado con exito!!";
								Escribir "Du nuevo sueldo es: ", sueldo;
								Escribir "___________________________________________";
							SiNo
								Escribir "El ingreso debe ser mayor que 0"
							FinSi
							Escribir "Desea ingresar de nuevo s == si / n == no"
							Leer opcionR
						Hasta Que opcionR == "n"
						
					4:
						Escribir "hasta luego"
					De Otro Modo:
						
						Escribir "Opcion no valida"
				Fin Segun
				
			Hasta Que opciones == 4
		FinSi
		
	Hasta Que opcionR == "n" o  opciones ==  4
	
	
FinAlgoritmo
