/**
 * Ejercicio de arreglos
 * Autor: Santiago SG
 * 15/05/24
 */

let nomina = [];
let pagoNomina = [];

nomina = [
  { tipoDocumento: "T.I",
    documento: 1080291867,
    nombres: "Ingrid Yulissa",
    apellidos: "Medina Esquivel", edad: 17, estrato: 1, valorDia: 10000, diasTrabajados: 10 },
  { tipoDocumento: "C.C", documento: 1075225119, nombres: "yerson stiven", apellidos: "Rubiano Cuellar", edad: 18, estrato: 2, valorDia: 20000, diasTrabajados: 20 },
  { tipoDocumento: "T.I", documento: 10757793091, nombres: "Karol Natalia", apellidos: "Osorio Poveda", edad: 17, estrato: 3, valorDia: 30000, diasTrabajados: 30 },
  { tipoDocumento: "T.I", documento: 1077724121, nombres: "Camilo Andres", apellidos: "Losada Ramirez", edad: 17, estrato: 4, valorDia: 40000, diasTrabajados: 40 },
  { tipoDocumento: "C.C", documento: 1076503317, nombres: "Jesus Fernando ", apellidos: "Carvajal Anacona", edad: 18, estrato: 5, valorDia: 50000, diasTrabajados: 50 },
  { tipoDocumento: "T.I", documento: 1130024111, nombres: "Juan Manuel", apellidos: "Gutierrez Fierro", edad: 17, estrato: 6, valorDia: 60000, diasTrabajados: 60 },
  { tipoDocumento: "C.C", documento: 85456043, nombres: "Arnulfo Antonio", apellidos: "Yusunguaira", edad: 19, estrato: 7, valorDia: 70000, diasTrabajados: 70 },
  { tipoDocumento: "C.C", documento: 1084331856, nombres: "Jesus David", apellidos: "Fierro", edad: 18, estrato: 8, valorDia: 80000, diasTrabajados: 80 },
  { tipoDocumento: "C.C", documento: 1075231111, nombres: "Daniel Felipe", apellidos: "Bata", edad: 18, estrato: 9, valorDia: 90000, diasTrabajados: 90 },
  { tipoDocumento: "C.C", documento: 100526532, nombres: "Andres Felipe", apellidos: "TresPalacios Perez", edad: 20, estrato: 6, valorDia: 10500000, diasTrabajados: 1 }
];



//Creamos un nuevo arreglo 
let iteracion;
let pago;
let salarioM = 1300000;
let subTransporte;
let abono;
let retencion;
let reten;
let pension;
let arl;
let salud;
let deducibles;
let salario;

for (iteracion = 0; iteracion < nomina.length; iteracion++) {
  pago = nomina[iteracion].diasTrabajados * nomina[iteracion].valorDia;

  subT(pago);
  bono(pago, nomina[iteracion].estrato);
  saludNomina(pago);
  pensionNomina(pago);
  arlNomina(pago);
  retencionNomina(pago, nomina[iteracion].estrato);

  reten = pago * retencion

  salario = (pago + subTransporte + abono) - (salud + pension + arl + reten)
  pagoNomina.push({
    tipoDocumento: nomina[iteracion].tipoDocumento,
    numeroDocumento: nomina[iteracion].documento,
    nombres: nomina[iteracion].nombres,
    apellidos: nomina[iteracion].apellidos,
    edad: nomina[iteracion].edad,
    estrato: nomina[iteracion].estrato,
    valorDia: nomina[iteracion].valorDia,
    diasTrabajados: nomina[iteracion].diasTrabajados,
    SalarioBruto: pago,
    subTransporte: subTransporte,
    abono: abono,
    retencion: retencion,
    CantidadRetenida: reten,
    salud: salud,
    pension: pension,
    arl: arl,
    salaroNeto: salario,
  });
}
console.table(pagoNomina)


//subsidio de transporte 

function subT(pago) {
  if (pago < 2 * salarioM) {
    subTransporte = 114000;
  } else {
    subTransporte = 0;
  }
  return subTransporte;
}

//Abono
function bono(pago, estrato) {
  if (pago < salarioM && estrato == 1 ||
    pago < salarioM && estrato == 2) {
    abono = 100000;
  } else {
    abono = 0;
  }
  return abono;
}

//Deducibles

function saludNomina(pago) {
  salud = pago * 0.12;
  return salud;
}

function pensionNomina(pago) {
  pension = pago * 0.16;
  return pension;
}

function arlNomina(pago) {
  arl = pago * 0.052;
  return arl;
}

//Retencion

function retencionNomina(pago, estrato) {

  if (pago > 8 * salarioM && estrato == 6) {
    retencion = 0.05;
  } else if (pago > salarioM * 6) {
    retencion = 0.04;
  } else if (pago > salarioM * 4) {
    retencion = 0.03;
  } else {
    retencion = 0;
  }
  return retencion;
}

// console.log(`
//   Tipo de Documento: ${nomina[iteracion].tipoDocumento}
//   N° documento: ${nomina[iteracion].documento}
//   Nombres: ${nomina[iteracion].nombres} ${nomina[iteracion].apellidos}
//   Edad: ${nomina[iteracion].edad}
//   Estrato: ${nomina[iteracion].estrato}
//   ValorDia: ${nomina[iteracion].valorDia}
//   Dias Trabajados: ${nomina[iteracion].diasTrabajados}
//   Salario Bruto: ${pago}
//   Salud: ${salud}
//   Pension: ${pension}
//   ARL: ${arl}
//   Transporste: ${subTransporte}
//   Abono: ${abono}
//   Retencion: ${retencion}
//   Cantidad Retenida: ${reten}
//   SalarioNeto: ${salario}
//   -----------------------------------------
//   `);