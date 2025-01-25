# Calcular la nota
# Autor: Santiago GM

# como parámetro

def area_cuadrado(lado_p):
    lado = lado_p
    area_cuadrado = lado * lado
    return area_cuadrado

def area_rectangulo(base_rectangulo_p,altura_rectangulo_p):
    base_rectangulo = base_rectangulo_p
    altura_rectangulo = altura_rectangulo_p
    area_rectangulo = base_rectangulo * altura_rectangulo
    return area_rectangulo

def area_triangulo(base_triangulo_p, altura_triangulo_p):
    base_triangulo = base_triangulo_p
    altura_triangulo = altura_triangulo_p
    area_triangulo = (base_triangulo  * altura_triangulo)/2
    return area_triangulo



# Como ExpresiÓn
area_cuadrado_lamb = lambda lado : lado * lado
area_rectangulo_lamb = lambda base_rectangulo, altura_rectangulo : base_rectangulo * altura_rectangulo
area_triangulo_lamb = lambda base_triangulo, altura_triangulo : (base_triangulo * altura_triangulo)/2