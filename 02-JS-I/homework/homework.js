// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'hola';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 12;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
   var texto = str
  return texto; 
}


function suma(x, y) {
  var sumaxy = x + y;
  return sumaxy;

}

function resta(x, y) {
  var sustracción = x - y;
  return sustracción;
}

function multiplica(x, y) {
  var  produc = x * y;
  return produc;
    
}

function divide(x, y) {
  var frac = x / y;
  return frac;
  
}

function sonIguales(x, y) {
  if (x === y) {return true}
    else return false;
}

function tienenMismaLongitud(str1, str2) {
 if (str1.length === str2.length) {return true}
  else return false;
}

function menosQueNoventa(num) {
  if (num < 90) {return true}
  else return false;
  }
  


function mayorQueCincuenta(num) {
  if (num > 50) {return true}
  else return false;
  
}

function obtenerResto(x, y) {
  var resto = x % y;
  return resto;
  
}

function esPar(num) {
  var resto = num % 2;
  if (resto === 0) {return true}
  else return false;
  
}

function esImpar(num) {
  var resto = num % 2;
  if (resto > 0) { return true}
  else if (resto < 0) {return true}
    else return false;
  
  
}

function elevarAlCuadrado(num) {
var cuadrado = Math.pow(num,2)
return cuadrado;
  
}

function elevarAlCubo(num) {
  var cubo = Math.pow(num,3)
  return cubo;
    
}

function elevar(num, exponent) {
  var elevado = Math.pow(num,exponent)
  return elevado;
    
}

function redondearNumero(num) {
var redon = Math.round(num)
return redon;
}

function redondearHaciaArriba(num) {
  var redon = Math.ceil(num)
  return redon;
    
}

function numeroRandom() {
  var nalea = Math.random()
  return nalea;

}

function esPositivo(numero) {

  if(numero === 0){
    return false;
  }
  else if(numero > 0){
    return "Es positivo";
  }
  else {
    return "Es negativo";
  }
}

function agregarSimboloExclamacion(str) {
var excla = str + "!"
return excla;
}

function combinarNombres(nombre, apellido) {
  return nombre +' '+ apellido

}

function obtenerSaludo(nombre) {

return "Hola" +' '+ nombre + '!'
}

function obtenerAreaRectangulo(alto, ancho) {
var supe = alto * ancho;
return supe
}


function retornarPerimetro(lado){
var per = lado * 4
return per
  
}


function areaDelTriangulo(base, altura){
  var atria = (base * altura)/2
  return atria
}


function deEuroAdolar(euro){
 var valor = euro * 1.20
 return valor
  
}


function esVocal(letra){
  if (letra.length > 1){return "Dato incorrecto"}
  else if(letra === "a") {return "Es vocal"}
  else if(letra ==="e") {return "Es vocal"}
  else if(letra ==="i") { return"Es vocal"}
  else if(letra === "o") {return "Es vocal"}
  else if(letra === "u") {return "Es vocal"}
  else return ("Dato incorrecto")
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};