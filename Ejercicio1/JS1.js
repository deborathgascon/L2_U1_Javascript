// base 16 * 23
// altura 13

const volumen = 16 * 23 * 13;
console.log ('volumen', volumen + ' cm3');

// area = ALateral + 2 ABase

const AreaLateral = 23 * 13;
const AreaBase = 16 * 23;
const AreaTotal = AreaLateral + 2*AreaBase;
console.log ('AreaTotal', AreaTotal + ' cm2');

// Generalización - GN

const ancho = 16;
const base = 23;
const altura = 13;
const volumenGN = ancho * base * altura;
const areaGN = base * altura + 2 * (ancho * base);

console.log('volumenGN', volumenGN);
console.log('areaGN', areaGN);