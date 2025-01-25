#Tabla de 5 con While
#Autor: Santiago GM

#Como Parametro

def tabla(ptablas,plimite):

    tablas = ptablas
    limite = plimite

    contador = 0
    resultado = 0
    msg = ""

    while (contador < limite) :

        contador = contador +1
        resultado = tablas * contador

        msg += f'{tablas} x {contador} = {resultado}\n'
    return msg
