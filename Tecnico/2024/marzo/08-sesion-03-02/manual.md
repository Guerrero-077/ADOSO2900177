# Manual de los comandos MD

### Tabla de contenido

1. [Qué son los comandos md?](#qué-son-los-comandos-md)
2. [Funciones](#funciones)
   - [Encabezados](#encabezados)
   - [Estilos de texto](#estilos-de-texto)
   - [Entrecomillado del texto](#entrecomillado-del-texto)
   - [Código de citas](#código-de-citas)




## Qué son los comandos md?

*Crea un directorio o subdirectorio. Las extensiones de comandos, que están habilitadas de forma predeterminada, permiten usar un único comando md para crear directorios intermedios en una ruta de acceso especificada.

## Funciones
* Encabezados: Para crear un encabezado, agrega entre uno y seis símbolos # antes del encabezado del texto. El número de # que utilices determinará el nivel jerárquico y el tamaño tipográfico del encabezado. Al usar dos o más encabezados, GitHub genera automáticamente una tabla de contenido a la que puede acceder haciendo clic en  dentro del encabezado del archivo. Todos los títulos de encabezado aparecen en la tabla de contenido, y puede hacer clic en un título para ir a la sección seleccionada.

# ejemplos 

```
# A first-level heading
## A second-level heading
### A third-level heading
```
  
* Estilos de textos: Puedes indicar énfasis con texto en negrita, cursiva, tachado, o de subíndice o superíndice en los campos de comentarios y archivos .md.

 
| Estilos | Sintaxis  | Metodos abreviados de teclado | Ejemplos | Resultados |
|----------|----------|----------|----------|----------|
| Bold    | ** ** o __ __ |  0  | ** esta **| **esta en negrita** |
| Cursiva | * * o _ _   | 0 | * esta * | *esta en cursiva* |
| Tachado | ~~ ~~ | 0 |~~ esta ~~| ~~esta tachado~~  |
| Cursiva en negrita y anidada | ** ** y _ _ | 0 | ** esta _ ectremely _important **| **esta _extremely_ important**|
| Todo en negrita y cursiva | *** *** | 0 |*** esta *** | ***esta negrita y cursiva*** |
| Subscript | < sub > < /sub >| 0 | esta <sub> importante </sub> | esta con <sub>subindice</sub> |
| Superscript | < sup > < /sup > | 0 | esta <sup> superficie </sup> | esta con <sup>superindice</sup> |

## Entrecomillado del texto

*Puedes entrecomillar texto con `>`.


### Ejemplos
Texto sin entrecomillado.
>`Texto entrecomillado.`

## Código de citas 

* Puedes indicar un código o un comando dentro de un enunciado con comillas simples. El texto dentro de las comillas simples no será formateado

`` Usar `git status` para enumerar todos los archivos nuevos o modificados que aún no se han confirmado. ``

Usar `git status` para enumerar todos los archivos nuevos o modificados que aún no se han confirmado.

  
Para formatear código o texto en su propio bloque distintivo, usa comillas triples.



- Ejemplo

* Algunos comandos básicos de Git son:
  
````
```
git status
git add
git commit
```
````

```
git status
git add
git commit
```


### primer 
> para agregar fragmentos de texto tenemos que introducir `(>texto)` ponerlo en cada texto  del inicio. 
