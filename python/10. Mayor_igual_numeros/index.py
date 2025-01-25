#importar modulos
from utils.mayor import validar_numeros, validar_numeros_lamb

#Variables globales
numUno = 3
numDos = 4

print(f"El número uno con parámetros es:{numUno} ")
print(f"El número dos como parámetros es: {numDos}" )
print( validar_numeros(numUno,numDos))

print('============================================')

#función lambda
print(f"El número uno con función lambda es:{numUno} ")
print(f"El número dos con función lambda es: {numDos}" )
print( validar_numeros_lamb(numUno,numDos))

