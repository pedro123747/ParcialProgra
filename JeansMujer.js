
class JeansMujer {
    constructor (precio) {
        precio=1000;


    }
 CalcularPrecioJeansMujer(){
    const precio=1000;
    const descuentom=25;
    var valorPrecio=((precio*descuentom)/100);
    return(" El descuento para el jeans de mujer es: $ " +valorPrecio);

 };
    
}

module.exports = JeansMujer;


