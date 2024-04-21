Algoritmo sin_titulo
	Definir producto,descuentoAplicable Como Caracter
	Definir precio,unidad,descuento1,valorBruto,valorTotal,descuentoAsignado Como Real
	Escribir 'Ingrese el nombre del producto:'
	Leer producto
	Escribir 'Ingrese el precio del producto'
	Leer precio
	Escribir 'Ingrese cantidad del producto'
	Leer unidad
	Escribir 'El producto aplica al descuento, Ingrese si o no'
	Leer descuentoAplicable
	valorBruto <- precio*unidad
	Si descuentoAplicable=='si' Entonces
		Escribir 'Ingrese el porcentaje del descuento:'
		Leer descuentoAsignado
		descuentoAsignado <- descuentoAsignado/100
		Si unidad>=5 Entonces
			descuento1 <- valorBruto*descuentoAsignado
		SiNo
			descuento1 <- 0
		FinSi
	SiNo
		Si descuentoAplicable=='no' Entonces
			descuento1 <- 0
		FinSi
	FinSi
	valorTotal <- valorBruto-descuento1
	Escribir 'El valor bruto del producto es:',valorBruto
	Escribir 'El descuento aplicado es de:',(descuentoAsignado*100)
	Escribir 'El descuento es: ',descuento1
	Escribir 'El valor total de la compra de ',producto,' es de ',valorTotal
FinAlgoritmo
