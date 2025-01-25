#Importar modulos
from utils.areas import areas, validar, area_cuadrados_lamb, validar_areas_lamb

#variables globales
ladoUno = 5
ladoDos = 10
ladoTres = 6

#Funciónes con parámetro

#funciones a utilizar
areaUno = areas(ladoUno)
areaDos = areas(ladoDos)
areaTres = areas(ladoTres)

print(f"El área del primer cuadrado como Parámetro es: {areaUno}" )
print(f"El área del segundo cuadrado como Parámetro es: {areaDos}")
print(f"El área del tercer cuadrado como Parámetro es: {areaTres}" )

print(validar(areaUno,areaDos,areaTres))

print("===========================")

#Funciónes lambda

#funciones a utilizar
area_uno_lamb = area_cuadrados_lamb(ladoUno)
area_dos_lamb = area_cuadrados_lamb(ladoDos)
area_tres_lamb = area_cuadrados_lamb(ladoTres)

print(f"El área del primer cuadrado como Lambda es: {area_uno_lamb}")
print(f"El área del segundo cuadrado como Lambda es: {area_dos_lamb}")
print(f"El área del tercer cuadrado como Lambda es: {area_tres_lamb}")
print(validar_areas_lamb(area_uno_lamb,area_dos_lamb,area_tres_lamb))