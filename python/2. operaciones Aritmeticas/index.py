#importando modulos
from utils.opereaciones import operacion, operaciones_Exp

#variables a utilizar
suma = f'Suma con Parametro {operacion("suma", 3, 4)}'
resta = f'Resta con Parametro {operacion("resta", 5, 2)}'
multiplicacion = f'Multiplicación con Parametro {operacion("multiplicacion", 6, 7)}'
division = f'División con Parametro {operacion("division", 8, 4)}'

#Resultado de las operaciones
print(suma)
print(resta)
print(multiplicacion)
print(division)

print('--------------------------------------------------------')

# Como funcion lambda

#variables a utilizar
suma_Exp = f'Suma con función lambda {operaciones_Exp("suma_Exp", 3, 4)}'
resta_Exp = f'Resta con función lambda {operaciones_Exp("resta_Exp", 5, 2)}'
multiplicacion_Exp = f'Multiplicación con función lambda {operaciones_Exp("multiplicacion_Exp", 6, 7)}'
division_Exp = f'División con función lambda {operaciones_Exp("division_Exp", 8, 4)}'

#Resultado de las operaciones
print(suma_Exp)
print(resta_Exp)
print(multiplicacion_Exp)
print(division_Exp)



