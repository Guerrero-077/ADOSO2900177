# Contar hasta 5 con el ciclo while
# Autor: Santiago GM

#Como Paramétros

def contar_hasta_5(numero_p) :
    numero, contador, resultado = numero_p, 0, ''

    while (contador < numero) :
        contador = contador + 1
        resultado +=  f'{contador}\n'
    return resultado