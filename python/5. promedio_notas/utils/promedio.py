# Promedio de tres notas
# Autor: Santiago GM


# Como paramétro
def calcular_promedio(nota_p, porcentaje_p):
    nota, porcentaje  = nota_p, porcentaje_p
    resultado = nota * porcentaje
    return resultado

# Como Expresión
calcular_promedio_exp = lambda nota,porcentaje: nota * porcentaje