#importación de modulos

from utils.saludo import saludo, saludo_Exp
#Variables a mostrar
saludar = "¡Hola  mundo!"

# Como funcion con parámetro
saludo_parametros = 'Con parámetro ' + saludo(saludar)

# Como funcion lambda
saludo_expresion = 'Como una Expresión ' + saludo_Exp(saludar)

#Resultado
print(saludo_parametros)
print(saludo_expresion)