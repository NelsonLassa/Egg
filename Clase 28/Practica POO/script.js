/* Ejercicio: Empresa de celulares*/
class Celular {
    constructor(color, peso, rdp, rdc, ram, encendido) {
        this.color = color;//string
        this.peso = peso;//entero (grs)
        this.rdp = rdp;//entero (pulgadas)
        this.rdc = rdc;//entero (Mega Pixeles)
        this.ram = ram;//entero (gb)
        this.encendido = encendido;//tipo boolean (true: Encendido, false: Apagado)
    }
    set btnEncendido(control) {//metodo setter para encender el telefono
        if (control == true) {
            this.encendido = true;
            document.write("El telefono se esta encendiendo <br>")
        } else {
            document.write("EL telefono ya esta encendido <br>");
        }
        document.write("----------------<br>");
    }

    btnReiniciar() {// motodo de para reiniciar
        if (this.encendido == true) {
            document.write("El telefono se reinciará <br>");
        } else {
            document.write("El telefono se encuentra apagado <br>");
        }
        document.write("----------------<br>");
    }

    tomarFoto() {//motodo para tomar una foto
        document.write(`Se a tomado una foto con la resolucion de ${this.rdc}mpx. <br>`);
        document.write("----------------<br>");
    }

    mostrarInfo() {//metodo para mostrar la informacion 
        let estado = ""
        if (this.encendido == true) {
            estado = "Encendido"
        } else {
            estado = "Apagado"
        }
        document.write(`Telefono Color: ${this.color} <br>
        Peso: ${this.peso}grs<br>
        Resolucion de pantalla: ${this.rdp} pulgadas <br>
        Resolucion de camara: ${this.rdc}mpx <br>
        Ram: ${this.ram}GB<br>
        Estado: ${estado}<br>`)
        document.write("----------------<br>");
    }

}

let A32 = new Celular("Violeta", 205, 6.4, 64, 4, false);
let A33 = new Celular("Plateado", 250, 6.8, 64, 6, true);
/*
A32.mostrarInfo();
A32.tomarFoto();
A32.btnReiniciar();
A32.btnEncendido = true;
A32.btnReiniciar();
A32.mostrarInfo();
A33.mostrarInfo();*/

/*Ejercicio: Empresa de celulares - Parte 2*/

class CelularGamaAlta extends Celular {
    constructor(color, peso, rdp, rdc, ram, encendido, cam2) {
        super(color, peso, rdp, rdc, ram, encendido);
        this.cam2 = cam2;
    }
    mostrarInfo() {//metodo para mostrar la informacion 
        let estado = ""
        if (this.encendido == true) {
            estado = "Encendido"
        } else {
            estado = "Apagado"
        }
        document.write(`Telefono Color: ${this.color} <br>
        Peso: ${this.peso}grs<br>
        Resolucion de pantalla: ${this.rdp} pulgadas <br>
        Resolucion de camara principal: ${this.rdc}mpx <br>
        Resolucion de camara secundaria: ${this.cam2}mpx
        Ram: ${this.ram}GB<br>
        Estado: ${estado}<br>`)
        document.write("----------------<br>");
    }
}

let iphone15Promax = new CelularGamaAlta("White", 221, 6.7, 48, 8, false,12 )
iphone15Promax.mostrarInfo();
iphone15Promax.btnReiniciar();
iphone15Promax.btnEncendido = true;
iphone15Promax.btnReiniciar();
iphone15Promax.tomarFoto();
iphone15Promax.mostrarInfo();

