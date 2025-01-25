#Tabla del 9 que me idique que dato es par e impar
#Santiago GM

#Como paramétro

def tabla(ptablas, plimite) :
    tablas = ptablas
    limite = plimite
    contador = 0
    msg = ""

    while (contador < limite) :
        contador = contador + 1
        resultado = tablas * contador

        msg += f'{tablas} x {contador} = {resultado} '
        msg += validar(resultado)
    return msg


def validar(resultado) :
    if (resultado % 2 == 0) :
        return "par\n"
    else :
        return "impar\n"

