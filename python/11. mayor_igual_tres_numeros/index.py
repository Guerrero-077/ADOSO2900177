#Importar modulos
from utils.mayor import validar, validar_numeros_lamb

numUno = 6
numDos = 1
numTres = 5

#función con parámetros

print(f"El número uno con parámetros es: {numUno}")
print(f"El número dos con parámetros es: {numDos}")
print(f"El número tres con parámetros es: {numTres}")
print(validar(numUno,numDos,numTres))

print("====================================")

#función lambda
print(f"El número uno como función lamda es: {numUno}")
print(f"El número dos como función lamda es: {numDos}")
print(f"El número tres como función lamda es: {numTres}")
print(validar_numeros_lamb(numUno,numDos,numTres))
