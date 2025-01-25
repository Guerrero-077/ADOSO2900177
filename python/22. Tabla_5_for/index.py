#Importando modulos
from utils.tabla import tabla_del_5, tabla_del_5_lamb

tabla = 5
limite = 5

print(f"Como función con parametros: {tabla_del_5(tabla,limite)}\n")

print(f"Como función con lambda: {tabla_del_5_lamb(tabla,limite)}\n")