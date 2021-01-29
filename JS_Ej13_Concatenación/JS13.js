const meses=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const meses7L = meses
.filter (mes => mes.length > 7)
.map (eachmes => eachmes.toUpperCase ());

console.log (meses7L);

const numeroMeses = meses7L.length;
console.log ('Son '+ numeroMeses + ' meses con más de 7 letras');