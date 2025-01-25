# Calcular la edad de tres  personas y mostrarla por pantalla.
# Autor: Santiago GM

#como parámetro

def calcular_edad(fecha_actual_p, fecha_nacimiento_p) :
  fecha_acutal, fecha_nacimiento = fecha_actual_p, fecha_nacimiento_p

  edad = fecha_acutal.year - fecha_nacimiento.year

  if (fecha_acutal.month, fecha_acutal.day) < (fecha_nacimiento.month, fecha_nacimiento.day) :
    edad -= 1
    return edad


def validar_edad(edad_p) :

  edad = edad_p

  if (edad >= 18) :
    return "Mayor de edad"
  else :
    return "Menor de edad"


def promedio_edad(suma_p, edad_p) :
  suma, edad = suma_p, edad_p
  promedio = suma / edad

  if (promedio >= 18) :
    return f"El promedio de edad se encuentra detro de la mayoria de edad {promedio}"
  else :
    return f"El promedio de edad no se encuentra dentro de la mayoria de edad {promedio}"


#función lambda

calcular_edad_lamb = lambda fecha_actual_p, fecha_nacimiento_p : (fecha_actual_p.year - fecha_nacimiento_p.year) - ((fecha_actual_p.month, fecha_actual_p.day) < (fecha_nacimiento_p.month, fecha_nacimiento_p.day))

validar_edad_lamb = lambda edad_p : "Mayor de edad" if (edad_p >= 18) else "Menor de edad"

promedio_edad_lamb = lambda suma_p, edad_p : f"El promedio de edad se encuentra detro de la mayoria de edad {suma_p / edad_p}" if ( suma_p / edad_p >= 18) else f"El promedio de edad no se encuentra dentro de la mayoria de edad {suma_p / edad_p}"