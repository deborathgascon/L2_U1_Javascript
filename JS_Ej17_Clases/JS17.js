class Factura {
    constructor(cliente, elementos) {
      this.cliente = cliente;
      this.elementos = elementos;
      this.informacion = {
        baseImponible: 0,
        iva: 21,
        total:0,
        formaPago: 'efectivo'
      };
  
      this.calculaTotal = () => {
        for (var i = 0; i <this.elementos.length; i++) {
          this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
        }
        this.informacion.total = this.informacion.baseImponible * (1+(this.informacion.iva/100));
      }
  
      this.muestraTotal = function () {
        this.calculaTotal();
        alert("El total de los productos es " + this.informacion.total);
      }
    };
  }

class cliente {
    constructor (nombre, direccion, telefono, nif){
        this.nombre = nombre;
        this.dirección = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }
}

class elementos {
    constructor (descripcion, cantidad, precio) {
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}  


const primerCliente = new cliente ('Pepa', 'Valencia', '6063352', '2566314789');
const arrayElementos = [new elementos ('Objeto 1', 1, 5), new elementos ('Objeto 2', 3, 38)];
const facturaDelTotal = new Factura (primerCliente, arrayElementos);
facturaDelTotal.muestraTotal();