
class JeansNino {
    constructor (precio) {
        precio=1000;

    }
CalcularPrecioJeansNino(){
    const precio=1000;
    const descuenton=40;
    var valorPrecio=((precio*descuenton)/100);
    return(" El descuento para el jeans de nino es: $ " +valorPrecio);

 };
    
}

module.exports = JeansNino;

