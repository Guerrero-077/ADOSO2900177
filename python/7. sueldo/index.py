#importar modulos
from utils.sueldo import sueldo, salud, pension, arl, pago_total, sueldo_lamb, salud_lamb, pension_lamb, arl_lamb, pago_Total_lamb

#variables globales
valorD = 43333
diaT = 10

#funciones a utilizar con parámetros
sueldo_parametro = sueldo(diaT, valorD)
salud_parametro = salud(sueldo_parametro)
pension_parametro = pension(sueldo_parametro)
arl_parametro = arl(sueldo_parametro)
pago_total_parametro = pago_total(sueldo_parametro)

#Resultados a mostrar
print(f'Su salario Bruto es de: ${sueldo_parametro}')
print(f'Los deducibles son: salud: {salud_parametro}')
print(f'pensión: {pension_parametro}%')
print(f'arl: {arl_parametro}%')
print(f'El pago total será de: ${pago_total_parametro}')

print('================================================')

#funciones a utilizar con lambda
sueldo_lamb = sueldo_lamb(diaT, valorD)
salud_lamb = salud_lamb(sueldo_lamb)
pension_lamb = pension_lamb(sueldo_lamb)
arl_lamb = arl_lamb(sueldo_lamb)
pago_total_lamb = pago_Total_lamb(sueldo_lamb)

#Resultados a mostrar
print(f'Su salario Bruto es de: ${sueldo_lamb}')
print(f'Los deducibles son: salud: {salud_lamb}')
print(f'pensión: {pension_lamb}%')
print(f'arl: {arl_lamb}%')
print(f'El pago total será de: ${pago_total_lamb}')
