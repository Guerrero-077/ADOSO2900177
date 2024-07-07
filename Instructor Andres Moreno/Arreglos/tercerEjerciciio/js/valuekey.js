/**
 * Ejercicio de arreglos value key 
 * 15/05/24
 * Autor: SG
 */

let factura = [];
let totalPago  =[];

let valorTotal;
let iteracion;
let totalPagoProducto; 

factura = [
    {codigo: 1, nombreProducto: "Malteada", cantidad: 2, valorUnidad: 12000},
    {codigo: 2, nombreProducto: "Picada", cantidad: 4, valorUnidad: 25000},
    {codigo: 3, nombreProducto: "Hamburguesa mixta", cantidad: 4, valorUnidad: 14000},
    {codigo: 4, nombreProducto: "Churrascos", cantidad: 1, valorUnidad: 25000},
    {codigo: 5, nombreProducto: "Gaseosa", cantidad: 5, valorUnidad: 5000},
    {codigo: 6, nombreProducto: "Limonada", cantidad: 5, valorUnidad: 6000}
]

valorTotal = factura[3].cantidad  *factura[3].valorUnidad;
console.log(factura[3].nombreProducto)

console.log("Total a pagar: "+ valorTotal)

for (iteracion = 0; iteracion < factura.length; iteracion++) {
    
    totalPagoProducto = factura[iteracion].cantidad  *factura[iteracion].valorUnidad;
    
    totalPago.push({

        Nombre: factura[iteracion].nombreProducto, 
        Cantidad: factura[iteracion].cantidad, 
        Precio: factura[iteracion].valorUnidad, 
        Total: totalPagoProducto
        
    })
}
console.table(totalPago)