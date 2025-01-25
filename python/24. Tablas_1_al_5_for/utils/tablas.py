#Tablas del 1 al 5 que me idique que dato es par e impar
#Autor: Santiago GM

# Con paramétros
par = 0
impar = 0

def tablas(ptabla, plimite,plimiteT) :
  global par,impar # Declaramos que estas variables son globales para modificarlas dentro de la función
  msg = ""
  tabla = ptabla
  limite = plimite
  limiteT = plimiteT


  for tabla in range(1,limite + 1):
    for contador in range(1,limiteT + 1):
      resultado = tabla * contador

      msg += f'\n {tabla} x {contador} = {resultado}'
      msg += validar(resultado)

    msg += "\n"

  return f'{msg} total de pares:  {par} total de impares {impar}'


def validar(resultado):
  global par,impar
  if (resultado % 2 == 0):
    par += 1
    return " Buzz"
  else:
    impar += 1
    return " Bass"

#función lambda

tablas_lamb = lambda tabla, limite, limite_T : [f'{tabla} x {contador} = {validar_lamb(tabla * contador)}' for tabla in range(1, limite + 1) for contador in range(1, limite_T + 1)]

validar_lamb = lambda resultado : f'Buzz' if (resultado % 2 == 0) else f'Bass'
