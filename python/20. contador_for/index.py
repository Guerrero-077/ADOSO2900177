#Importando modulos
from utils.contadoFor import contar_hasta_5, contar_hasta_5_lamb

#Variables globales
numero = 5

#funciones a utilizar
print(f"Como paramétros: \n{contar_hasta_5(numero)}")

print('================')

print(f"Como función lambda: \n{contar_hasta_5_lamb(numero)}")