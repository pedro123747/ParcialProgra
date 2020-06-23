1. Explicar y ejemplificar composición y agregación
Composición:Composición es una forma fuerte de composición donde la vida de la clase contenida debe coincidir con la vida de la clase contenedor. Los componentes constituyen una parte del objeto compuesto. De esta forma, los componentes no pueden ser compartidos por varios objetos compuestos. La supresión del objeto compuesto conlleva la supresión de los componentes.
El símbolo de composición es un diamante de color negro colocado en el extremo en el que está la clase que representa el “todo” (Compuesto).
Ejemplo:
• Tenemos una clase Empresa.
• Un objeto Empresa está a su vez compuesto por uno o varios objetos del tipo empleado.
• El tiempo de vida de los objetos Empleado depende del tiempo de vida de Empresa, ya que si no existe una Empresa no pueden existir sus empleados.
Agregación:La agregación es un tipo de asociación que indica que una clase es parte de otra clase (composición débil). Los componentes pueden ser compartidos por varios compuestos (de la misma asociación de agregación o de varias asociaciones de agregación distintas). La destrucción del compuesto no conlleva la destrucción de los componentes. Habitualmente se da con mayor frecuencia que la composición.
La agregación se representa en UML mediante un diamante de color blanco colocado en el extremo en el que está la clase que representa el “todo”.
Ejemplo:
• Tenemos una clase Empresa.
• Tenemos una clase Cliente.
• Una empresa agrupa a varios clientes.
2. Explicar que es polimorfismo.
 Se denomina polimorfismo a la capacidad que tienen los objetos de una clase de responder al mismo mensaje o evento en función de los parámetros utilizados durante su invocación. Un objeto polimórfico es una entidad que puede contener valores de diferentes tipos durante la ejecución del programa.
 El término polimorfismo es también conocido como ‘Sobrecarga de parámetros’ ya que las características de los objetos permiten aceptar distintos parámetros para un mismo método (diferentes implementaciones) generalmente con comportamientos distintos e independientes para cada una de ellas.
3. Dar un ejemplo de la vida real de polimorfismo. Diagrama de clases y explicación.
Un local comercial dedicado solamente a la venta de  jeans de hombres,decide en la nueva temporada para atraer al público femenino y a los niños ingresar jeans de mujer y de niños ,aplicandole un descuento mucho mayor que a un jeans de hombre del 25% para las mujeres y un 40% a los niños quedando asi solo un 10% de descuento para los hombres.El precio por cada pantalón es de $1000.