# Manual de los comandos MD

## Tabla de contenido

1. [Qué son los comandos md](#qué-son-los-comandos-md)
2. [Caracteres Especiales](#caracteres-especiales)
   - [Encabezados](#encabezados)
   - [Listas](#listas)
   - [Código de citas](#código-de-citas)
   - [Estilos de textos](#estilos-de-textos)
   - [Escape de Caracteres](#escape-de-caracteres)
   - [Enlaces](#enlaces)
   - [Imagenes](#imagenes)



# Qué son los comandos md

Crea un directorio o subdirectorio. Las extensiones de comandos, que están habilitadas de forma predeterminada, permiten usar un único comando md para crear directorios intermedios en una ruta de acceso especificada.Markdown es un lenguaje de marcado ligero utilizado comúnmente para dar formato a documentos de texto plano. Los caracteres especiales desempeñan un papel importante en la estructura y la presentación del texto en Markdown.

# Caracteres Especiales

### Encabezados

Para crear un encabezado, agrega entre uno y seis símbolos # antes del encabezado del texto. El número de # que utilices determinará el nivel jerárquico y el tamaño tipográfico del encabezado. Al usar dos o más encabezados, GitHub genera automáticamente una tabla de contenido a la que puede acceder haciendo clic en  dentro del encabezado del archivo. Todos los títulos de encabezado aparecen en la tabla de contenido, y puede hacer clic en un título para ir a la sección seleccionada.

```
# A primer-nivel
## A segundo-nivel heading
### A tercer-nevel heading
```

# A primer-nivel
## A segundo-nivel heading
### A tercer-nevel heading


## Listas

Los caracteres especiales 1,-, * y + se utilizan para crear listas no ordenadas.

```
1. primero
* segundo
- tercero
+ cuarto
```

1. `primero`
* `segundo`
- `tercero`
+ `cuarto`

## Código de citas 

*Puedes entrecomillar texto con `>`.

```
> Texto entrecomillado.
```
>`Texto entrecomillado.`


Los caracteres especiales ` se utilizan para formatear texto como código en línea, mientras que los bloques de código se crean con triple acento invertido (```)

\`Codigo\`
`Codigo`

\```
Codigo
\```

```
Codigo
```


## Estilos de textos

Puedes indicar énfasis con texto en negrita, cursiva, tachado, o de subíndice o superíndice en los campos de comentarios y archivos .md

 
| Estilos |  Sintaxis    | Ejemplos | Resultados |
|----------|----------|----------|----------|
| Bold    | ** ** o __ __  | ** esta **| **esta en negrita** |
| Cursiva | * * o _ _   | * esta * | *esta en cursiva* |
| Tachado | ~~ ~~  |~~ esta ~~| ~~esta tachado~~  |
| Cursiva en negrita y anidada | ** ** y _ _  | ** esta _ ectremely _important **| **esta _extremely_ important**|
| Todo en negrita y cursiva | *** *** |*** esta *** | ***esta negrita y cursiva*** |
| Subscript |`<sub></sub >`| esta <sub> importante </sub> | esta con <sub>subindice</sub> |
| Superscript |`<sup></sup>`| esta <sup> superficie </sup> | esta con <sup>superindice</sup> |

## Escape de Caracteres

Para utilizar un carácter especial como texto literal, se puede escapar con el carácter \

`\# Esto es un numeral no un titulo`


\# Esto es un numeral no un titulo


## Enlaces

La sintaxis Markdown para un vínculo en línea consiste en la parte [link text], que es el texto que se va a hipervincular, seguido de la parte (file-name.md), que es la URL o el nombre de archivo al que se va a vincular

`[Enlace a Google](https://github.com/Guerrero-077)`

[Enlace a github](https://github.com/Guerrero-077)

## Imagenes

Los caracteres especiales ![texto alternativo](url de la imagen) se utilizan para insertar imágenes.

`![Logo de github](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUBwhMOxO7xHV9OqhDZ585TTapui1-kcj3dA&usqp=CAU)`

![Logo de github](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUBwhMOxO7xHV9OqhDZ585TTapui1-kcj3dA&usqp=CAU)







