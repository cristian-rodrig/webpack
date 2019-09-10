import '../css/style.scss';

class Cliente{
    constructor(nombre){
        this.nombre=nombre;
    }
}

const cliente = new Cliente('Cristian');
console.log(cliente);

console.log('desde el nosotros');