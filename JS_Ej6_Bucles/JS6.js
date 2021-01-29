const notas=[6, 7, 2, 9, 3, 4, 5, 8, 2];

// Utilizando for:
let acc = 0;
for (let i = 0; i < notas.length; i++) {
    acc += notas [i]
};
console.log ('Con el bucle FOR la suma total de las notas es ' + acc);

// Utilizando for ... of:
let puntuacion = 0;
for (let nota of notas) {
  puntuacion += notas;
};
console.log('Con el bucle FOR ... OF la suma total es ' + puntuacion);