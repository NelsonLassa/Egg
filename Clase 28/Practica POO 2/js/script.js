/*Desafío: Crear un sistema de formas geométricas*/
class Forma {
  constructor(nombre, lado) {
    this.nombre = nombre;
    this.lado = lado;
  }
  obtenerInfo() {
    switch (this.lado) {
      /*case 0:
        document.write(`Su nombre es ${this.radio}
            y su cantida de lados son: ${this.lado}`);
        document.write("------------------<br>");
        break;*/
      case 3:
        document.write(`Su nombre es ${this.nombre}
            y su cantida de lados son: ${this.lado}<br>`);
        document.write("------------------<br>");
        break;
      case 4:
        document.write(`Su nombre es ${this.nombre}
            y su cantida de lados son: ${this.lado}<br>`);
        document.write("------------------<br>");
        break;
      case 5:
        document.write(`Su nombre es ${this.nombre}
            y su cantida de lados son: ${this.lado}<br>`);
        document.write("------------------<br>");
        break;
      default:
        document.write("No se encontro la forma");
        document.write("------------------<br>");
    }
  }
  static totalLados(lados) {
    let total = 0;
    for (let forma of lados) {
      total += forma.lado;
    }
    return total;
  }
}

class Circulo extends Forma {
  constructor(nombre, lado, radio) {
    super(nombre, 0);

    this.radio = radio;
  }

  obtenerInfo() {
    return document.write(`Nombre: ${this.nombre}, 
    Radio: ${this.radio},
     Lados: ${this.lado} <br>`);
  }
}

class Triangulo extends Forma {
  constructor(nombre, lado, longitudLado) {
    super(nombre, lado);
    //this.lado = 3;
    this.longitudLado = longitudLado;
  }
}
const lados = [
  new Circulo("Círculo 1", 5, 3),
  new Triangulo("Triángulo 1", 4),
  new Circulo("Círculo 2", 3, 5),
  new Triangulo("Triángulo 2", 6),
];
lados[1].obtenerInfo();
const deLados = Forma.totalLados(lados);
document.write(`La cantiad de lados es ${deLados} <br>`);
lados[0].obtenerInfo();
