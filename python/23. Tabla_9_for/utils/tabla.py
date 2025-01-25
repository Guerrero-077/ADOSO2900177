#Tabla del 9 que me idique que dato es par e impar
#Autor: Santiago GM


# como paramétros

def tablas(ptablas,plimite):
    tabla = ptablas
    limite = plimite
    msg = ""

    for(contador) in range(1,limite+1):

        resultado = tabla * contador

        msg += f'{tabla} x {contador} = {resultado} '
        msg+= validar(resultado)
    return msg


def validar(resultado):
    if(resultado%2==0):
        return "El resultado es  par\n"
    else:
        return"El resultado es impar\n"


#función lambda
tablas_lamb = lambda tabla,limite: [f"{tabla} x {contador} = {validar_lamb(tabla*contador)}" for contador in range(1,limite+1)]

validar_lamb = lambda resultado: "El resultado es par" if resultado%2==0 else "El resultado es impar"
