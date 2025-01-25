# Importar modulos
from utils.porcentaje import porcentajes, porcentajes_lamb

#Función con parámetros

#variable global
numero = 20;

#variables a utilizar
result = porcentajes(numero)
print(f'El porcentaje con Expresión es: {result}%' )

#Función lambda

#variables a utilizar
result_lamb = porcentajes_lamb(numero)
print(f'El porcentaje con Lambda es: {result_lamb}%' )