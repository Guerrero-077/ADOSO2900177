#Factorial de 5 con for
#Autor: Santiago GM

#Como paramétro

def factorial(number):
    factorial = 1
    contador = 1
    for contador in range(contador, number + 1):
        factorial *= contador
    return factorial

#Función lambda

factorial_lamb = lambda  number: 1 if number == 0 else number * factorial_lamb(number - 1)
