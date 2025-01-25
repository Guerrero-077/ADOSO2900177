# Calcular la nota
# Autor: Santiago GM

# Con función con parámetros
def calcular_notas(nota_uno_p, nota_dos_p, nota_tres_p):
    nota_uno, nota_dos, nota_tres = nota_uno_p, nota_dos_p, nota_tres_p
    promedio = (nota_uno + nota_dos + nota_tres) / 3
    return promedio

# Como función lambda
calcular_nota_Exp = lambda pnotaUno,pnotaDos,pnotaTres : (pnotaUno + pnotaDos + pnotaTres) / 3;