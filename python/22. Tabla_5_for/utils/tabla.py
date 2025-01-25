# tabla del 5 con For
# Autor: Santiago GM

#Como paramétro

def tabla_del_5(tabla_p, limite_p):
    resultado = ""
    for contador in range(1, limite_p + 1):
        resultado += f"{tabla_p} x {contador} = {tabla_p * contador}\n"
    return resultado



#función lambda
tabla_del_5_lamb = lambda tabla_p, limite_p: [f"{tabla_p} x {contador } = {tabla_p * contador}" for contador in range(1, limite_p + 1 )]


