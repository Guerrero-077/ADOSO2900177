#Area de tres figutas
#Autor: Santiago GM


#Como parámetro
def areas(lado_p) :
  lado = lado_p
  area = lado * lado
  return area


def validar(area_uno_p, area_dos_p, area_tres_p) :

  area_uno, area_dos, area_tres = area_uno_p, area_dos_p, area_tres_p

  if (area_uno == area_dos and area_uno == area_tres and area_dos == area_tres) :
    return "Las áreas son iguales"
  elif (area_uno > area_dos and area_uno > area_tres) :
    return f"El área del primer cuadrado es mayor. {area_uno}"
  elif (area_dos > area_uno and area_dos > area_tres) :
    return f"El área del segundo cuadrado es mayor. {area_dos}"
  else :
    return f"El área del tercer cuadrado es mayor. {area_tres}"



#como función lamda
area_cuadrados_lamb = lambda lado: lado * lado

validar_areas_lamb = lambda area_uno, area_dos, area_tres: "Las áreas son iguales" if area_uno == area_dos == area_tres else "El área del primer cuadrado es mayor. " + str(area_uno) if area_uno > area_dos and area_uno > area_tres else "El área del segundo cuadrado es mayor. " + str(area_dos) if area_dos > area_uno and area_dos > area_tres else "El área del tercer cuadrado es mayor. " + str(area_tres) if area_tres > area_uno and area_tres > area_dos else "No hay cuadrado mayor"