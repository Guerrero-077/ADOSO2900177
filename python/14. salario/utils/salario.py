#Calcular el sueldo de una persona
#Autor: Santiago GM


# Como paramétro

def sueldo(dias_trabajados_p, valor_dia_p) :
  dias_trabajados, valor_dia = dias_trabajados_p, valor_dia_p
  pago = dias_trabajados * valor_dia
  return pago

def salud(pago) :
  salud_p = pago * 0.12
  return salud_p

def pension(pago) :
  pension_p = pago * 0.16
  return pension_p

def arl(pago) :
  arl_p = pago * 0.052
  return arl_p

def subsidio_transprote(pago) :
  salarioM = 1300000
  if (pago <= salarioM * 2) :
    trans = 114000
  else :
    trans = 0
  return trans

def reten(pago) :
  salarioM = 1300000
  if (pago > salarioM * 4) :
    retencion = pago * 0.04
  else :
    retencion = 0

  return retencion

def pago_total(pago) :
  salario = pago
  salud_parametro = salud(pago)
  pension_parametro = pension(pago)
  arl_parametro = arl(pago)

  retencion = reten(pago)
  subTrasporte = subsidio_transprote(pago)
  descuento = salud_parametro + pension_parametro + arl_parametro

  totalSalario = salario + subTrasporte - (retencion + descuento)

  return totalSalario


#función lambda
sueldo_lamb = lambda dias_trabajados_p, valor_dia_p : dias_trabajados_p * valor_dia_p

salud_lamb = lambda pago :  pago * 0.12

pension_lamb = lambda pago : pago * 0.16

arl_lamb = lambda pago : pago * 0.052

subsido_transporte_lamb = lambda pago : 114000 if (pago <= 1300000 * 2) else 0

reten_lamb = lambda pago : 0 if (pago <= 1300000 * 4) else (pago * 0.04) 

pago_total_lamb = lambda pago : pago + subsido_transporte_lamb(pago) - (reten_lamb(pago) + salud_lamb(pago) + pension_lamb(pago) + arl_lamb(pago))
