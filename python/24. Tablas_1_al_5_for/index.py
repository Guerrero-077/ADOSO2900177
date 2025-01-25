#Importar modulos
from utils.tablas import tablas, tablas_lamb

#variables globales

tabla = 1; # inicio de la tabla
limite = 9; #Hasta que tabla quiere que multiplique
limiteT = 5; #Hasta que número desea multiplicar cada tabla

print(f"Como Parámetro {tablas(tabla,limite,limiteT)}")

print("===================================")

print(f"Como Lambda {tablas_lamb(tabla,limite,limiteT)}")