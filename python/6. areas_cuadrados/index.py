#Importar modulos
from utils.areaFiguras import area_cuadrado, area_rectangulo, area_triangulo, area_cuadrado_lamb, area_rectangulo_lamb, area_triangulo_lamb

#Variables globales
lado = 4
base = 5
altura = 6

# Funciones con parámetros

cuadrado = area_cuadrado(lado)
rectangulo = area_rectangulo(base, altura)
triangulo = area_triangulo(base, altura)



print(f'El área del cuadrado como Parámetro es: {cuadrado}')
print(f'El área del triángulo como Parámetro es: {triangulo}')
print(f'El área del rectángulo como Parámetro es: {rectangulo}')

print('==============================')

# Funciones lambda
cuadrado_lamb = area_cuadrado_lamb(lado)
rectangulo_lamb = area_rectangulo_lamb(base, altura)
triangulo_lamb = area_triangulo_lamb(base, altura)

print(f'El área del cuadrado como función lambda es: {cuadrado_lamb}')
print(f'El área del triángulo como función lambda es:  {triangulo_lamb}')
print(f'El área del rectángulo como función lambda es:  {rectangulo_lamb}')