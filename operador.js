//recibiendo datos del teclado
let horasTrajadas=Number(prompt("horas de trabajos"));
let domicilios=Number(prompt("domicilios para hacer"));
let multiplicacion= 2500*domicilios;
let multiplicacion2= 6000*horasTrajadas;
let suma= multiplicacion+multiplicacion2;
alert("su pago por horas trabajadas es de: $"+multiplicacion2);
alert("su pago por domicilios hechos es: $"+multiplicacion);
alert("su salario total es de: $"+suma);