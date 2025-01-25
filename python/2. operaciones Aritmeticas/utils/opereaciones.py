# Operaciones Aritméticas
# Autor: Santiago GM

def suma(num_uno, num_dos): #Con parametros

    return num_uno + num_dos

def resta(pnumUno,pnumDos):
    numUno, numDos = pnumUno, pnumDos
    restar = numUno - numDos

    return restar

def multiplicacion(pnumUno,pnumDos):
    numUno, numDos = pnumUno, pnumDos
    multiplicar = numUno * numDos
    return multiplicar

def division(pnumUno,pnumDos):
    numUno, numDos = pnumUno, pnumDos
    dividir = numUno / numDos

    return dividir

def operacion(poerador,pnumUno,pnumDos):

    operador, numUno, numDos = poerador, pnumUno, pnumDos


    if(operador == "suma" ):
        return suma(numUno,numDos)
    elif(operador == "resta" ):
        return resta(numUno,numDos)
    elif(operador == "multiplicacion" ):
        return multiplicacion(numUno,numDos)
    elif(operador == "division"):
        return division(numUno,numDos)
    else:
        return "operacion no valida"


# Expresion

operaciones = {
'suma_Exp' : lambda pnumUno, pnumDos :  pnumUno + pnumDos,
'resta_Exp' : lambda pnumUno,pnumDos : pnumUno - pnumDos,
'multiplicacion_Exp' : lambda pnumUno,pnumDos :  pnumUno * pnumDos,
'division_Exp' : lambda pnumUno,pnumDos : pnumUno / pnumDos
}

operaciones_Exp = lambda opcion,pnumUno,pnumDos : operaciones.get(opcion, lambda *_: 'operación no válida')(pnumUno,pnumDos)