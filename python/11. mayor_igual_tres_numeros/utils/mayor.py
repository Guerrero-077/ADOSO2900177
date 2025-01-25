#Mayor igual de 3 números
#Autor: Santiago GM

#Como paramétro

def validar(num_uno_p, num_dos_p, num_tres_p) :
  num_uno, num_dos, num_tres = num_uno_p, num_dos_p, num_tres_p

  if (num_uno == num_dos and num_uno == num_tres and num_dos == num_tres) :
    return "Los tres numeros son iguales"
  elif (num_uno > num_dos and num_uno > num_tres) :
    return f"El número uno es el mayor {num_uno}"

  elif (num_dos > num_uno and num_dos > num_tres) :
    return f"El número dos es el mayor {num_dos}"

  else :
    return f"El número tres es el mayor {num_tres}"


#función lambda
validar_numeros_lamb = lambda num_uno_p, num_dos_p, num_tres_p : "Los tres numeros son iguales" if (num_uno_p == num_dos_p and num_uno_p == num_tres_p and num_dos_p == num_tres_p) else "El número uno es el mayor " + str(num_uno_p) if (num_uno_p > num_dos_p and num_uno_p > num_tres_p) else "El número dos es el mayor " + str(num_dos_p) if (num_dos_p > num_tres_p and num_dos_p > num_uno_p) else "El número tres es el mayor " + str(num_tres_p)