#Importar modulos
from utils.salario import sueldo, salud, pension, arl, subsidio_transprote, reten, pago_total, sueldo_lamb, salud_lamb, pension_lamb, arl_lamb, subsido_transporte_lamb, reten_lamb, pago_total_lamb

#variables globales
dias_trabajados = 10
valor_dia = 43333
pago = sueldo(dias_trabajados, valor_dia)


#función con parámetros

#funciones a utilizar
salud_parametro = salud(pago)
pension_parametro = pension(pago)
arl_parametro = arl(pago)
trasporte_parametro = subsidio_transprote(pago)
retencion_parametro = reten(pago)
pago_tota_parametro = pago_total(pago)


print(f"El pago como parámetro es: ${pago}")
print(f"El porcentaje para la salud como parámetro es: {salud_parametro}%")
print(f"El porcentaje para la pensión como parámetro es: {pension_parametro}%")
print(f"El porcentaje para el arl como parámetro es: {arl_parametro}%")
print(f"El subsidio de transporte como parámetro es: ${trasporte_parametro}")
print(f"La retencion como parámetro es: ${retencion_parametro}" )
print(f"Su pago total será de: ${pago_tota_parametro}")

print("=========================================")
#función con lambda

#funciones a utilizar
salud_lamb = salud(pago)
pension_lamb = pension(pago)
arl_lamb = arl(pago)
trasporte_lamb = subsidio_transprote(pago)
retencion_lamb = reten(pago)
pago_tota_lamb = pago_total(pago)


print(f"El pago con función lambda es: ${pago}")
print(f"El porcentaje para la salud con función lambda es: {salud_lamb}%")
print(f"El porcentaje para la pensión con función lambda es: {pension_lamb}%")
print(f"El porcentaje para el arl con función lambda es: {arl_lamb}%")
print(f"El subsidio de transporte con función lambda es: ${trasporte_lamb}")
print(f"La retencion con función lambda es: ${retencion_lamb}" )
print(f"Su pago total será de: ${pago_tota_lamb}")