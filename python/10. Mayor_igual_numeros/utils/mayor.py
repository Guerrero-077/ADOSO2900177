# Mayor igual de dos números
#Autor: Santiago GM

#Como paramétro

def validar_numeros(num_uno_p, num_dos_p) :
  num_uno, num_dos = num_uno_p, num_dos_p

  if (num_uno == num_dos) :
    return "Los número son iguales"
  elif (num_uno > num_dos) :
    return f"El número uno es el mayor {num_uno}"
  else :
    return f"El número dos es el mayor {num_dos}"

# Como Expresión

validar_numeros_lamb = lambda num_uno, num_dos : f"El número uno es el mayor {num_uno}" if num_uno > num_dos else f"El número dos es el mayor {num_dos}" if num_uno < num_dos else "Los números son iguales"