#importar modulos
from datetime import datetime
from utils.edad import calcular_edad, validar_edad, promedio_edad, calcular_edad_lamb, validar_edad_lamb, promedio_edad_lamb


#variable global
fecha_actual = datetime.now()

#funciones globales
fecha_nacimiento_uno = datetime.strptime("07/08/2006", "%d/%m/%Y")
fecha_nacimiento_dos = datetime.strptime("07/08/2000", "%d/%m/%Y")
fecha_nacimiento_tres = datetime.strptime("07/08/2012", "%d/%m/%Y")

#variables a utilizar
edadUno = calcular_edad(fecha_actual,fecha_nacimiento_uno)
edadDos = calcular_edad(fecha_actual,fecha_nacimiento_dos)
edadTres = calcular_edad(fecha_actual,fecha_nacimiento_tres)
suma = edadUno + edadDos + edadTres

print(f"La edad de la primera persona como Parámetro es: {edadUno} años, es {validar_edad(edadUno)}")
print(f"La edad de la segunda persona como Parámetro es: {edadDos} años, es {validar_edad(edadDos)}")
print(f"La edad de la tercera persona como Parámetro es: {edadTres} años, es {validar_edad(edadTres)}")

print(promedio_edad(suma,3))

print("==========================")

#función lambda

#variables a utilizar
edad_uno_lamb = calcular_edad_lamb(fecha_actual,fecha_nacimiento_uno)
edad_dos_lamb = calcular_edad_lamb(fecha_actual,fecha_nacimiento_dos)
edad_tres_lamb = calcular_edad_lamb(fecha_actual,fecha_nacimiento_tres)
suma_lamb = edadUno + edadDos + edadTres

print(f"La edad de la primera persona con función lambda es: {edadUno} años, es {validar_edad_lamb(edadUno)}")
print(f"La edad de la segunda persona con función lambda es: {edadDos} años, es {validar_edad_lamb(edadDos)}")
print(f"La edad de la tercera persona con función lambda es: {edadTres} años, es {validar_edad_lamb(edadTres)}")

print(promedio_edad_lamb(suma,3))