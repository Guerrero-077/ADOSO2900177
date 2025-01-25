
# Sacar el porcentaje de tres notas
# Autor: Santiago GM

#Como paramétro
def notas(nota_p, porcentaje_p) :
  nota, porcentaje = nota_p, porcentaje_p
  operacion = nota * porcentaje
  return operacion


def validar(suma_p) :
  suma = suma_p
  if (suma > 4.5) :
    return f"La calificación es Superior {suma}"
  elif (suma <= 4.5 and suma > 3.5) :
    return f"La calificaciom es Buena {suma}"
  elif (suma >= 3 and suma <= 3.5) :
    return f"La calificacion es Media {suma}"
  else :
    return f"la calificacion es Mala{suma}"

#Como lambda
notas_lamb = lambda nota_p, porcentaje_p : nota_p * porcentaje_p

validar_lamb = lambda suma_p : f"La calificación es Superior {suma_p}"  if (suma_p > 4.5) else f"La calificación es Buena {suma_p}" if (suma_p <= 4.5 and suma_p > 3.5) else "La calificación es Media {suma_p}" if (suma_p >= 3 and suma_p <= 3.5) else "La calificación es Mala {suma_p}"