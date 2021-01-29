const LetraDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var DNI = prompt ("¿Cuál es su número del DNI? - Sin la letra");
console.log ('DNI', DNI)

if (DNI < 0 || DNI > 99999999){
    console.log ('Número no válido')
} else {
    const LetterSelect = LetraDNI [DNI%23];
    alert ('Su letra del DNI es ' + LetterSelect)
};
