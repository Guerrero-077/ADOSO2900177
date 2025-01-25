#importar modulos
from utils.mayor import validar, validar_lamb

#variables globales
num_uno, num_dos = 25, 24

#función con parámetros
print(f"El número uno como parámetro es: {num_uno}")
print(f"El número dos como parámetro es: {num_dos}" )
print(validar(num_uno, num_dos))

print("==================================================")

#función lambda
print(f"El número uno como parámetro es: {num_uno}")
print(f"El número dos como parámetro es: {num_dos}" )
print(validar_lamb(num_uno, num_dos))
