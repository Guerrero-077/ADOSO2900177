# Contar hasta 5 con for
#Autor: Santiago GM

#Como paramétros

def contar_hasta_5(number):
    limite, resultado, contador = number, "", 1

    for i in range(contador, limite + 1):
        resultado += f'{i}\n'
    return resultado

#funcón lambda

contar_hasta_5_lamb =lambda number: '\n'.join([str(i) for i in range(1, number + 1)])