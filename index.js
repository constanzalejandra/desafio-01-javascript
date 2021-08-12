// ============================================================================
// ============================EJERCICIO 2=====================================
// Realizar operaciones con dos números.
// Pedir al usuario que ingrese dos números diferentes y mayores a cero. Para ambos
// números, calcular lo siguiente:
// ● Suma
// ● Resta
// ● División
// ● Multiplicac

// declaramos las variables que solicitaran los numeros al usuario
const numero1 = +prompt("Ingrese el primer número: ");
const numero2 = +prompt("Ingrese el segundo número: ");

// realizamos la operación suma
const suma = numero1 + numero2;
document.write(`La suma de los números es: ${suma} <br />`);
// realizamos la operación resta
const resta = numero1 - numero2;
document.write(`La resta de los números es: ${resta} <br />`);
// realizamos la operación multiplicacion
const multipliacion = numero1 * numero2;
document.write(`La multiplicación de los números es: ${multipliacion} <br />`);
// realizamos la operación division
const division = numero1 / numero2;
document.write(`La división de los números es: ${division} <br />`);
// realizamos la operación modulo
const modulo = numero1 % numero2;
document.write(`El módulo de los números es: ${modulo} <br />`);
// ============================================================================
// ============================EJERCICIO 3=====================================

// 1.- Crear un programa que pida al usuario ingresar la temperatura en grados Celsius
// 2.- y que la transforme a grados Kelvin y Fahrenheit.
// Se debe considerar la siguiente información respecto a la equivalencia de las
// escalas de temperatura:
// -● 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos
// -es 0 °C + 273.15 = 273.15 K
// -● 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos
// -es (0 °C × 9/5) + 32 = 32 °F

// guardo en variable el numero correspondiente a los grados
const gradosCelsius = prompt("Ingrese la temperatura en grados C°: ");
// guardo en variables los grados  K y F
const gradosKelvin = 273.15;
const gradosFahrenheit = 32;
// realizamos la conversion de los grados dada las formulas.
const convertirAKelvin = gradosCelsius + gradosKelvin;
const convertirAFahrenheit = (gradosCelsius * 9) / 5 + gradosFahrenheit;
// imprimo el resultado de la conversion
document.write(
  `La temperatura en grados Kelvin es: ${convertirAKelvin} <br />`
);
// imprimo el resultado de la conversion
document.write(
  `La temperatura en grados Fahrenheit es: ${convertirAFahrenheit} <br />`
);

// ============================================================================
// ============================EJERCICIO 4=====================================

// Crear un programa que pida al usuario una cantidad de días y que muestre su
// equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
// resultado debe ser 1 año, 1 semana y 1 día.
// Se debe considerar lo siguiente:
// ● 1 año tiene 365 días
// ● 1 semana tiene 7 días
// Se recomienda usar la función Math.floor para obtener la parte entera de un número
// decimal.

// // almaceno la cantidad de dias en una variable
const dias = prompt("Ingrese la cantidad de dias: ");
// guardo los datos constantes como el año y semanas
const anio = 365;
const semana = 7;
// realizamos la operación matematica
const resultadoAnios = Math.floor(dias / anio);
const resultadoSemanas = Math.floor((dias % anio) / semana);
const resultadoDias = (dias % anio) % semana;
// imprimo en pantalla el resultado
document.write(
  `La cantidad de dias que ingreso ${dias} equivalen a ${resultadoAnios} años, ${resultadoSemanas} semanas y ${resultadoDias} días <br />`
);

// ============================================================================
// ============================EJERCICIO 5=====================================

// Crear un programa que solicite al usuario 5 números y realice los cálculos que se
// piden a continuación.
// ● La suma de todos los números.
// ● El promedio de los 5 números ingresados.

// almacenar en variables los 5 numeros que se solicitaran al usuario
const n1 = +prompt("Ingrese el primer numero");
const n2 = +prompt("Ingrese el segundo numero");
const n3 = +prompt("Ingrese el tercer numero");
const n4 = +prompt("Ingrese el cuarto numero");
const n5 = +prompt("Ingrese el quinto numero");

// realizar la sumatoria de los numeros y guardarlos en variable
const sumatoria = n1 + n2 + n3 + n4 + n5;
// imprimo en pantalla el resultado
document.write(`La suma de los numeros es: ${sumatoria} <br />`);
// realizar la formula del promedio y guardar en variable
const promedio = sumatoria / 5;
// imprimo en pantalla el resultado
document.write(`El promedio de los numeros es: ${promedio}`);
