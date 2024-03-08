msgMayor=("Este es el dato mayor")
msgMenor=("Este es el dato medio")
msgMedio=("Este es el dato menor")
msgError=("Dato invalido")
try:         
        num1 = float(input("Ingrese el primer número: "))
        num2 = float(input("Ingrese el segundo número: "))
        num3 = float(input("Ingrese el tercer número: "))

        
        if num1>num2>num3:
                print(msgMayor,num1)
                print(msgMedio,num2)
                print(msgMenor,num3)

        else:
                if num1>num3>num2:
                        print(msgMayor,num1)
                        print(msgMedio,num3)
                        print(msgMenor,num2)
                else:
                        if num2>num1>num3:
                                print(msgMayor,num2)
                                print(msgMedio,num1)
                                print(msgMenor,num3)
                        else:
                                if num2>num3>num1:
                                        print(msgMayor,num2)
                                        print(msgMedio,num3)
                                        print(msgMenor,num1)
                                else:
                                        if num3>num2>num1:
                                                print(msgMayor,num3)
                                                print(msgMedio,num2)
                                                print(msgMenor,num1)
                                        else:
                                                if num3>num1>num2:
                                                        print(msgMayor,num3)
                                                        print(msgMedio,num1)
                                                        print(msgMenor,num2)
                                                else:
                                                        print(msgError)
except:
      print(msgError)

                



#manera optima de realizarlo 

try:
    b=True

    while b:
            num1 = float(input("Ingrese el primer número: "))
            num2 = float(input("Ingrese el segundo número: "))
            num3 = float(input("Ingrese el tercer número: "))

            if num1 != num2 and num1 != num3 and num2 != num3:
                    mayor = max(num1, num2, num3)
                    menor = min(num1, num2, num3)
                    medio = (num1 + num2 + num3) - mayor - menor
                    print("El número mayor es:", mayor)
                    print("El número medio es:", medio)
                    print("El número menor es:", menor)
                    b= False
            else:
                    print("Datos inválidos.")
except:
      print("El dato ingresado debe ser númerico")  
