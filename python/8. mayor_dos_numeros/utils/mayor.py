# Mayor de dos números
# Autor: Santiago GM


#como paramétro
def validar(num_uno_p, num_dos_p) :
  num_uno, num_dos = num_uno_p, num_dos_p

  if (num_uno > num_dos) :
    return f"El número uno es mayor{num_uno} "
  else:
    return f"El número dos es mayor {num_dos}"

# como Expresión
validar_lamb = lambda num_uno, num_dos: f"El número uno es mayor {num_uno}" if num_uno > num_dos else f"El número dos es mayor {num_dos}"