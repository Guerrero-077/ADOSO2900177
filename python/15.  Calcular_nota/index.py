#Importar modulos
from utils.calcular import notas, validar, notas_lamb, validar_lamb

#Variables globales
notaUno = 4.5
notaDos = 5.0
notaTres = 4.0

#Función con parámetros

#Funciones a utilizar
promedioUno = notas(notaUno, 0.2)
promedioDos = notas(notaDos, 0.35)
promedioTres = notas(notaTres, 0.45)

suma = promedioUno + promedioDos + promedioTres

print(f"La nota uno, como Parámetro es: {notaUno}, que equivale al {promedioUno}% del examen.")
print(f"La nota dos, como Parámetro es: {notaDos}, que equivale al {promedioDos}% del examen.")
print(f"La nota tres, como Parámetro es: {notaTres}, que equivale al {promedioTres}% del examen.")

suma = promedioUno + promedioDos + promedioTres
print(validar(suma))

print('================================')

#Función lambda

#Funciones a utilizar
promedio_uno_lamb = notas_lamb(notaUno, 0.2)
promedio_dos_lamb = notas_lamb(notaDos, 0.35)
promedio_tres_lamb = notas_lamb(notaTres, 0.45)

suma = promedioUno + promedioDos + promedioTres

print(f"La nota uno, como función lambda es: {notaUno}, que equivale al {promedio_uno_lamb}% del examen.")
print(f"La nota dos, como función lambda es: {notaDos}, que equivale al {promedio_dos_lamb}% del examen.")
print(f"La nota tres, como función lambda es: {notaTres}, que equivale al {promedio_tres_lamb}% del examen.")

suma = promedio_uno_lamb + promedio_dos_lamb + promedio_tres_lamb
print(validar_lamb(suma))
