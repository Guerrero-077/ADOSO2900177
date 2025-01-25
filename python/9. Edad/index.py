#importando modulos
from utils.edad import calcular_edad
from datetime import datetime


fecha_actual =  datetime.now()
fecha_nacimiento = datetime.strptime("07/08/2007", "%d/%m/%Y")

print(f"Tú edad con parámetros es: {calcular_edad(fecha_actual,fecha_nacimiento)} años"); #23 años
