# Factorial de 5
# Autor: Santiago GM

# como paramétro

def factorial_de_numeros(pnumero):
    numero, contador, factorial = pnumero, 0, 1

    while(contador < numero):
        contador = contador+1
        factorial =factorial * contador
    return factorial