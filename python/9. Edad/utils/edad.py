# Calcular la edad de una persona
# Autor: Santiago GM

#importar modulos
from datetime import datetime

#Como paramétro

def calcular_edad(fecha_actual_p, fecha_nacimiento_p) :
    edad = fecha_actual_p.year - fecha_nacimiento_p.year
    if (fecha_actual_p.month, fecha_actual_p.day) < (fecha_nacimiento_p.month, fecha_nacimiento_p.day):
        edad -= 1
    return edad


#Como funcion lambda
calcular_edad_lambda = lambda fecha_actual_p, fecha_nacimiento_p: (fecha_actual_p, fecha_nacimiento_p).year - (fecha_nacimiento_p, fecha_actual_p).year if ( fecha_actual_p, fecha_nacimiento_p).month < (fecha_nacimiento_p, fecha_actual_p ).month else (fecha_actual_p, fecha_nacimiento_p).year - (fecha_nacimiento_p , fecha_actual_p).year - 1