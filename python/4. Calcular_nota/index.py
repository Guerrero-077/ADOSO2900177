#Importar modulos
from utils.nota import calcular_notas, calcular_nota_Exp

#Variables globales
notaUno = 2.0
notaDos = 3.0
notaTres = 4.0

#Variables a utilizar
calculo = calcular_notas(notaUno, notaDos, notaTres)
calcula_lamb = calcular_nota_Exp(notaUno, notaDos, notaTres)

#Resultado de las operaciones
print(f"El promedio de las tres notas como función con parámetros es: {calculo}")

print('================================================')

print(f"El promedio de las tres notas como función con lambda es: {calculo}")