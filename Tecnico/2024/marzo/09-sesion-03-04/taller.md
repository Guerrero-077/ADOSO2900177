# Solucion Pseudocodigo
1. Tres personas deciden invertir su dinero para fundar una empresa. Cada una de ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte con respecto a la cantidad total invertida.

```
Inicio
  Definir p1,p2,p3,ope como Real
  p1 = o.o;
  p2 = 0.0;
  p3 = 0.0;
  ope = 0.0;

  Escribir "Digite la cantidad que invirtio la primera persona " ;
  Leer p1;
  Escribir "Digite la cantidad que invirtio la segunda persona ";
  Leer p2;
  Escribir "Digite la cantidad que invirtio la tercera persona ";
  Leer p3;

  ope = p1 + p2 +p3;

  p1  = (p1*100)/ope;
  p2  = (p2*100)/ope;
  p3  = (p3*100)/ope;

  Escribir = "EL porcentaje que invirtio la primera persona es ", p1
  Escribir = "EL porcentaje que invirtio la segunda persona es ", p2
  Escribir = "EL porcentaje que invirtio la tercera persona es ", p3

Fin
```

2. Un alumno desea saber cuál será su promedio general en las tres materias más difíciles que cursa y cuál será el promedio que obtendrá en cada una de ellas. Estas materias se evalúan como se muestra a continuación:

La calificación de Matemáticas se obtiene de la siguiente manera: Examen 90% Promedio de tareas 10% En esta materia se pidió un total de tres tareas.

La calificación de Física se obtiene de la siguiente manera: Examen 80% Promedio de tareas 20% En esta materia se pidió un total de dos tareas.

La calificación de Química se obtiene de la siguiente manera: Examen 85% Promedio de tareas 15% En esta materia se pidió un promedio de tres tareas.

```
Inicio

  Definir a,b,c,d,f,g,h,i,j,k,l,m,n,o,p,q Con Real

  a = 0.0;
  b = 0.0;
  c = 0.0;
  d = 0.0;
  e = 0.0
  f = 0.0;
  g = 0.0;
  h = 0.0;
  i = 0.0;
  j = 0.0;
  k = 0.0;
  l = 0.0;
  m = 0.0;
  n = 0.0;
  o = 0.0;
  p = 0.0;
  q = 0.0;

  Escribir "La calificación de Matemáticas se obtiene de la siguiente manera: Examen 90% Promedio de tareas 10% En esta materia se pidió un total de tres tareas. ";

  Escribir "Ingrese la nota de la evaluacion de Matemáticas ";
  leer a;

  Escribir "Ingrese la nota de su primera tarea ";
  leer b;

  Escribir "Ingrese la nota de su segunda tarea ";
  leer c;

  Escribir "Ingrese la nota de su tercera tarea ";
  leer d;

  e = (b+c+d)/3;
  f = (a*0.9)+(e*0.1)
  Escribir "El promedio de Matemáticas es: ", f;

  Escribir "La calificación de Física se obtiene de la siguiente manera: Examen 80% Promedio de tareas 20% En esta materia se pidió un total de dos tareas."

  Escribir "Ingrese la nota de la evaluacion de Física ";
  leer g;

  Escribir "Ingrese la nota de su primera tarea ";
  leer h;

  Escribir "Ingrese la nota de su segunda tarea ";
  leer i;
  j= (h+i)/2
  k= (g*0,8)+(j*0,2);
  Escribir "El promedio de Física es: ", k;

  Escribir "La calificación de Química se obtiene de la siguiente manera: Examen 85% Promedio de tareas 15% En esta materia se pidió un promedio de tres tareas.";

  Escribir "Ingrese la nota de la evaluacion de Química ";
  leer = l
  Escribir "Ingrese la nota de su primera tarea ";
  leer m;

  Escribir "Ingrese la nota de su segunda tarea ";
  leer n;

  Escribir "Ingrese la nota de su tercera tarea ";
  leer q;

  o=(m+n+q);
  p= (l*0.85)+(o * 0.15);

  Escribir "El promedio de Química es: ", p;
  

Fin
```
3. Leer un real e imprimir si el número es positivo o negativo.

```
Inicio
  Definir num Como Real;
  num = 0.0;
  Escribir "Diguite un número ya sea positivo o negativo";
  Leer num
  si num > 0 Entonces
    Escribir num," Es positivo";
  Sino
    Escribir num, " Es negativo";

Fin 
```
4. Leer un real e imprimir si el número es mayor a 200 o no.
```
Inicio
  Definir num Como Real;
  num = 0.0;

  Escribir "Digite un número";
  Leer num;
  Si num > 200 ENTONCES
    Escribir num, " Es mayor que 200";
  Sino
    Escribir num, " Es menor que 200"
Fin
```
5. Leer un real e imprimir si el número está en el rango de 50 y 100

```
Inicio
  Definir num Como Real;
  num = 0.0;

  Escribir "Digite un número";
  Leer num;
  Si num >= 50 AND num <=100 ENTONCES
    Escribir num, " Su número se encuentra en el rango de 50 a 100";
  Sino
    Escribir num, " Su número no se encuentra en el rango de 50 a 100 ";
Fin
```

# PYTHON 
print("Tres personas deciden invertir su dinero para fundar una empresa. Cada una de ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte con respecto a la cantidad total invertida.")

p1 = float(input("Digite la cantidad que invirtio la primera persona "))
p2 = float(input("Digite la cantidad que invirtio la Segunda persona "))
p3 = float(input("Digite la cantidad que invirtio la Tercera persona "))

ope = p1+p2+p3
p1  = (p1*100)/ope
p2  = (p2*100)/ope
p3  = (p3*100)/ope

print("EL porcentaje que invirtio la Primera persona es ", p1, " %") 
print("EL porcentaje que invirtio la Segunda persona es ", p2, " %") 
print("EL porcentaje que invirtio la Tercera persona es ", p3, " %") 

print("--------------------------------------------------------------------------------------------------------")

print("Un alumno desea saber cuál será su promedio general en las tres materias más difíciles que cursa y cuál será el promedio que obtendrá en cada una de ellas. Estas materias se evalúan como se muestra a continuación:")

print("--------------------------------------------------------------------------------------------------------")

print("La calificación de Matemáticas se obtiene de la siguiente manera: Examen 90% Promedio de tareas 10% En esta materia se pidió un total de tres tareas.")
print("--------------------------------------------------------------------------------------------------------")
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

print("La calificación de Física se obtiene de la siguiente manera: E   xamen 80% Promedio de tareas 20% En esta materia se pidió un total de dos tareas.")
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

print("La calificación de Química se obtiene de la siguiente manera: Examen 85% Promedio de tareas 15% En esta materia se pidió un promedio de tres tareas")
print("--------------------------------------------------------------------------------------------------------")
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
print


# CORRECCIÓN PYTHON 
```
try:
        msgError = "Error, inversión no válida."
        msgOk = "Inversión correcta, ok."
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