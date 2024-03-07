# SOLOCIÓN PYTHON 
1. Tres personas deciden invertir su dinero para fundar una empresa. Cada una de ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte con respecto a la cantidad total invertida.

```PHP
p1 = float(input("Digite la cantidad que invirtio la primera persona: "))
p2 = float(input("Digite la cantidad que invirtio la segunda persona: "))
p3 = float(input("Digite la cantidad que invirtio la tercera persona: "))

ope = p1 + p2 +p3

p1  = (p1*100)/ope;
p2  = (p2*100)/ope;
p3  = (p3*100)/ope;

print("EL porcentaje que invirtio la primera persona es ", p1)
print("EL porcentaje que invirtio la segunda persona es ", p2)
print("EL porcentaje que invirtio la tercera persona es ", p3) 


```

## 2. Un alumno desea saber cuál será su promedio general en las tres materias más difíciles que cursa y cuál será el promedio que obtendrá en cada una de ellas. Estas materias se evalúan como se muestra a continuación

- La calificación de Matemáticas se obtiene de la siguiente manera: Examen 90% Promedio de tareas 10% En esta materia se pidió un total de tres tareas.
- La calificación de Física se obtiene de la siguiente manera: E   xamen 80% Promedio de tareas 20% En esta materia se pidió un total de dos tareas.
- La calificación de Química se obtiene de la siguiente manera: Examen 85% Promedio de tareas 15% En esta materia se pidió un promedio de tres tareas
  
```PHP
Em= float(input("Digite la notade la Evaluación de Matemáticas "))
print("--------------------------------------------------------------------------------------------------------")
Tm1 =  float(input("Digite la notade la primera tarea de Matemáticas "))
print("--------------------------------------------------------------------------------------------------------")
Tm2 = float(input("Digite la notade la Segunda tarea de Matemáticas "))
print("--------------------------------------------------------------------------------------------------------")
Tm3 = float(input("Digite la notade la Tercera tarea de Matemáticas "))
print("--------------------------------------------------------------------------------------------------------")

ope = (Tm1+Tm2+Tm3)/3
promMa = (Em*0.9)+(ope*0.1)
print("El promedio de Matemáticas es: ", promMa)


print("--------------------------------------------------------------------------------------------------------")
Ef= float(input("Digite la notade la Evaluación de Física "))
print("--------------------------------------------------------------------------------------------------------")
Tf1 =  float(input("Digite la notade la primera tarea de Física "))
print("--------------------------------------------------------------------------------------------------------")
Tf2 = float(input("Digite la notade la Segunda tarea de Física "))
print("--------------------------------------------------------------------------------------------------------")


ope = (Tf1+Tf2)/2
promF = (Em*0.8)+(ope*0.2)
print("El promedio de Física es: ", promF)


print("--------------------------------------------------------------------------------------------------------")
Em= float(input("Digite la notade la Evaluación de Química "))
print("--------------------------------------------------------------------------------------------------------")
Tq1 =  float(input("Digite la notade la primera tarea de Química "))
print("--------------------------------------------------------------------------------------------------------")
Tq2 = float(input("Digite la notade la Segunda tarea de Química "))
print("--------------------------------------------------------------------------------------------------------")
Tq3 = float(input("Digite la notade la Tercera tarea de Química "))
print("--------------------------------------------------------------------------------------------------------")

ope = (Tq1+Tq2+Tq3)/3
promQ = (Em*0.85)+(ope*0.15)
print("El promedio de Química es: ", promQ)

```

## 3. Leer un real e imprimir si el número es positivo o negativo.
```PHP

num = float(input("Diguite un número ya sea positivo o negativo "))

if num > 0:
        print("Su número es positivo")
else: 
        print("Su número es negativo")
```

## 4. Leer un real e imprimir si el número es mayor a 200 o no.
```PHP
num = float(input("Digite un número "))

if num > 200:
        print("Su número es mayor que 200")
else: 
        print("Su número es menor que 200")
```

## 5. Leer un real e imprimir si el número está en el rango de 50 y 100.
```PHP
num = float(input("Digite un número "))

if num > 50 and num <100:
        print("Su número esta en el rango de 50 a 100")
else: 
        print("Su número No esta en el rango de 50 a 100")
```
# CORRECCIÓN PYTHON 

## 1. Tres personas deciden invertir su dinero para fundar una empresa. Cada una de ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte con respecto a la cantidad total invertida.
```PHP
try:
        msgError = "Error, su inversión no es válida."
        msgOk = "Su Inversión fue registrada con éxito."
        msgInput = "Digite la inversión de la persona "
        msgOutput = "El porcentaje de inversión de la persona  "

        p1 = float(input(msgInput + "1: "))


        
        if p1 > 0:
            print(msgOk)
            p2 = float(input(msgInput + "2: "))
            
            if p2 > 0:
                    print(msgOk)
                    p3 = float(input(msgInput + "3: "))
                    if p3 > 0:
                            print(msgOk)
                            it = p1 + p2 + p3
                            pp1 = (p1/it)*100
                            pp2 = (p2/it)*100
                            pp3 = (p3/it)*100
                            
                            print(msgOutput + "1 es: " + str(pp1)+"%")
                            print(msgOutput + "2 es: " + str(pp2)+"%")
                            print(msgOutput + "3 es: " + str(pp3)+"%")
                            
                    else: 
                        print(msgError)
            else: 
                print(msgError)

        else: 
                print(msgError)
         
except:
        print(msgError)
        
        
```
## 2. Un alumno desea saber cuál será su promedio general en las tres materias más difíciles que cursa y cuál será el promedio que obtendrá en cada una de ellas. Estas materias se evalúan como se muestra a continuación:

La calificación de Matemáticas se obtiene de la siguiente manera: Examen 90% Promedio de tareas 10% En esta materia se pidió un total de tres tareas.

La calificación de Física se obtiene de la siguiente manera: Examen 80% Promedio de tareas 20% En esta materia se pidió un total de dos tareas.

La calificación de Química se obtiene de la siguiente manera: Examen 85% Promedio de tareas 15% En esta materia se pidió un promedio de tres tareas.

```PHP
try:
        msgError = "Error, dato no válida."
        msgOk = "dato correcto, ok."
        msgInput = "Favor, indique la nota de la Evaluacion "
        msgInputT = "Favor, indique la nota de la Tarea "
        msgOutput = "El promedio de "

        p1 = float(input(msgInput + "Matemáticas: "))

        
        if p1 > 0:
            print(msgOk)
            t1 = float(input(msgInputT + "1: "))
            if t1 >0:
                  print(msgOk)
                  
                  t2 = float(input(msgInputT + "2: "))
                  if t2 > 0:
                             print(msgOk)
                             t3 = float(input(msgInputT + "3: "))
                            
                             if t3 > 0:
                                    print(msgOk) 
                                    it = (t1+t2+t3)/3;
                                    prom = (p1*0.9)+(it*0.1)
                                    print(msgOutput + "Matemáticas es: " + str(prom))
                                    p2 = float(input(msgInput + "Física: "))
                                    if p2 > 0:
                                                print(msgOk)
                                                t1 = float(input(msgInputT + "1: "))
                                                if t1 > 0:
                                                        print(msgOk)
                                                        t1 = float(input(msgInputT + "2: "))
                                                        if t2 > 0:
                                                                print(msgOk) 
                                                                it = (t1+t2)/2;
                                                                prom = (p2 * 0.8)+(it *0.2)
                                                                print(msgOutput + "Física es: " + str(prom))
                                                                p3 = float(input(msgInput + "Química: "))
                                                                if p3 > 0:
                                                                        print(msgOk)
                                                                        t1 = float(input(msgInputT + "1: "))
                                                                        if t1 > 0:
                                                                                print(msgOk)
                                                                                t2 = float(input(msgInputT + "2: "))
                                    
                                                                                if t2 > 0:
                                                                                        print(msgOk)
                                                                                        t3 = float(input(msgInputT + "3: "))
                                                                                        if t3 > 0:
                                                                                                print(msgOk)
                                                                                                it = (t1+t2+t3)/3;
                                                                                                prom = (p3*0.85)+(it*0.15)
                                                                                                print(msgOutput + "Química es: " + str(prom))
                                                                                                
                                                                                        else: 
                                                                                                print(msgError)  
                                                                                else:
                                                                                        print(msgError)                    
                                                                                        
                                                                        else: 
                                                                                print(msgError)
                                                                else: 
                                                                        print(msgError) 
                                                                        
                                                                
                                                        else : 
                                                                print(msgError)
                                                                
                                                        
                                                else:
                                                        print(msgError)
                                    
                                    else:
                                        print(msgError)  
                             else : 
                                   print(msgError)
               
                  else:
                       print(msgError)
            else:
                print(msgError) 
                                
        else:
                print(msgError)
except:
        print(msgError)
```

## 3. Leer un real e imprimir si el número es positivo o negativo.
```PHP

try:
        msgError = "Error, su número no es válido."
        msgOk = "Su número fue registrada con éxito."
        msgInput = "Digite un número "
        msgOutput = "El número que usted registro es: "

        num = float(input(msgInput))
        if num > 0:
                print(msgOk)
                print(msgOutput + "Positivo")
        else:
            print(msgError)
            print(msgOutput + "Negativo")


        
except:
        print(msgError)
        
        
```

## 4. Leer un real e imprimir si el número es mayor a 200 o no.
```PHP


try:
        msgError = "Error, su número no es válido."
        msgOk = "Su número fue registrada con éxito."
        msgInput = "Digite un número "
        msgOutput = "El número que usted registro es: "

        num = float(input(msgInput))
        if num > 200:
                print(msgOk)
                print(msgOutput + " mayor que 200")
        else:
            print(msgOutput + " menor que 200")


        
except:
        print(msgError)
        
        
          
```

## 5. Leer un real e imprimir si el número está en el rango de 50 y 100.
```PHP


try:
        msgError = "Error, su número no es válido."
        msgOk = "Su número fue registrada con éxito."
        msgInput = "Digite un número "
        msgOutput = "El número que usted registro: "

        num = float(input(msgInput))
        if num > 50 and  num <100:
                print(msgOk)
                print(msgOutput + "Esta en el rango de 50 y 100")
        else:
            print(msgOutput + "No esta en el rango de 50 y 100")


        
except:
        print(msgError)
```
