#Imortar modulos
from utils.tabla import tablas, tablas_lamb

#variables globales
tabla = 9
limite = 5

#resultados
print(f"Como Parámetro: \n{tablas(tabla,limite)}\n")

print(f"Como función lambda: {tablas_lamb(tabla,limite)}")