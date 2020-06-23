const Vestimenta=require('./Vestimenta');
const JeansHombre=require('./JeansHombre');
const JeansMujer=require('./JeansMujer');
const JeansNino=require('./JeansNino');

console.info("Ejemplo de polimorfismo");

const JeansHombre1=new JeansHombre(100);
console.info(JeansHombre1.CalcularPrecioJeansHombre());

const JeansMujer1=new JeansMujer(250);
console.info(JeansMujer1.CalcularPrecioJeansMujer());

const JeansNino1=new JeansNino(400);
console.info(JeansNino1.CalcularPrecioJeansNino());

console.info("El precio de cada jeans es de:$1000")