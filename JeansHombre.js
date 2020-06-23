
class JeansHombre {
    constructor (precio) {

        precio=1000;


    }
CalcularPrecioJeansHombre(){
    const precio = 1000;
    const descuentoh =10;
    var valorPrecio=((precio*descuentoh)/100);
    return(" El descuento para el jeans de hombre es: $ " +valorPrecio);

 };
    
}


module.exports = JeansHombre;

