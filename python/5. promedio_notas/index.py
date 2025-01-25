#Importando modulos
from utils.promedio import calcular_promedio, calcular_promedio_exp

#Variables globales
nota_uno, procentaje_uno = 5.0, 0.3
nota_dos, procentaje_dos= 4.0, 0.3
nota_tres, procentaje_tres = 3.0, 0.4

# Con función con parámetros
nota1 = calcular_promedio(nota_uno, procentaje_uno)
nota2 = calcular_promedio(nota_dos, procentaje_dos)
nota3 = calcular_promedio(nota_tres, procentaje_tres)

print(f'El porcentaje de la nota 1 con parámetros es: {nota1}%')
print(f'El porcentaje de la nota 2 con parámetros es: {nota2}%')
print(f'El porcentaje de la nota 3 con parámetros es: {nota3}%')

suma_param = (nota1 + nota2 + nota3)
print(f'La suma del porcentaje de sus notas es de: {suma_param}%')

print('========================================')
# Con función lambda
nota_1 = calcular_promedio_exp(nota_uno, procentaje_uno)
nota_2 = calcular_promedio_exp(nota_dos, procentaje_dos)
nota_3 = calcular_promedio_exp(nota_tres, procentaje_tres)

print(f'El porcentaje de la nota 1 como función lambda es: {nota_1}%')
print(f'El porcentaje de la nota 2 como función lambda es: {nota_2}%')
print(f'El porcentaje de la nota 3 como función lambda es: {nota_3}%')

suma_lambda = (nota_1 + nota_2 + nota_3)
print(f'La suma del porcentaje de sus notas es de: {suma_lambda}%')
