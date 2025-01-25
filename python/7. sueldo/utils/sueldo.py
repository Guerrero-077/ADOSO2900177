
# Calcular el sueldo total de una persona
# Autor: Santiago GM

# Como parámetro
def sueldo(dias_trabajados_p, valor_dia_p) :
  dias_trabajados, valor_dia = dias_trabajados_p, valor_dia_p
  pago = dias_trabajados * valor_dia
  return pago

def salud(pago):
  salud_p = pago * 0.12
  return salud_p

def pension(pago):
  pension_p = pago * 0.16
  return pension_p


def arl(pago):
  arl_p = pago * 0.052
  return arl_p

def pago_total(pago):
  salud_p = salud(pago)
  pension_p = pension(pago)
  arl_p = arl(pago)
  total = pago - (salud_p + pension_p + arl_p)
  return total


# como función lambda

sueldo_lamb =  lambda dias_trabajados_p, valor_dia_p: dias_trabajados_p * valor_dia_p
salud_lamb = lambda pago: pago * 0.12
pension_lamb =  lambda pago: pago * 0.16
arl_lamb =  lambda pago: pago * 0.052
pago_Total_lamb =  lambda pago: pago - (salud_lamb(pago) + pension_lamb(pago) + arl_lamb(pago))


