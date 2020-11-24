Querida Sol, 

En primer lugar quiero felicitarte por tu trabajo. Se nota que pusiste esfuerzo, y que te esmeraste en entregar un producto lo mas finalizado posible mas alla de las limitaciones de tiempo que tuviste. 

Ire comentando tu trabajo de acuerdo a las consignas propuestas, y al final dejare algunos comentarios sueltos sobre tu codigo en general. Como siempre, la idea es darte las herramientas para que tu trabajo quede mejor aun. 

### Accesibilidad

En general tu sitio es accesible. Utilizas correctamente las etiquetas semanticas, por lo que un lector de pantalla puede orientarse facilmente en tu web - aunque hubiera sido preferible que tus tarjetas fueran <article>. Siempre hay un foco visible. Los colores y contrastes adecuados. Faltan las etiquetas aria, que simplificarian la recorrida para lectores de pantalla en tus formularios. 

Tu formulario de filtros quiere ser accesible, en el sentido de que tenes algunos "label for" planteados, pero no estan completos. 

La ausencia mas importante es la de los atributos "alt" en imagenes, algo que consideramos absolutamente necesario para que los lectores puedan comunicar lo que efectivamente hay en tu web. 

### Filtros y búsqueda

Tus filtros funcionan a la perfeccion. Me gusta como resolviste el responsive. Un problema es que la cantidad señalada no se actualiza con los filtros. Para hacerlo, debemos contar cuantos productos se muestran o no, es decir, cuantas tarjetas tienen la clase "hidden" nos va a decir cuantas estan ocultas. Podemos crear una nueva funcion, contarProductosMostrados(). En esa funcion
- Seleccionamos el mensaje de productos mostrados
- Contamos cuantas tarjetas ocultas hay
- Actualizamos el mensaje con el total de tarjetas menos las tarjetas ocultas. 

```js
const contarProductosMostrados = () => {
    const mensajeProductosMostrados = document.querySelector(".header-ver-productos p span")
    const tarjetasOcultas = document.querySelectorAll(".card.hidden")
    const totalTarjetas = 12

    mensajeProductosMostrados.textContent = totalTarjetas - tarjetasOcultas.length
}

```

### Carrito

Para el carrito, podes pensar en maquetarlo directamente sin agregarle funcionalidad tal como lo pedian las consignas. Despues, si te interesa continuar este trabajo, vemos juntas como agregar productos. 

### Checkout

Hubiera preferido al menos un intento comentado si intentaste hacer las funcionalidades pero no salieron, como para evaluar como lo encaraste. De todos modos, te dejo mas o menos como encararlo si en algun momento queres hacerlo:

Asumimos que vamos a tener 
- un recargo por tarjeta, que iniciamos en 0
- un recargo por envio, que iniciamos en 0
- un descuento, que iniciamos en 0
- un subtotal, que es el valor que tenes definido
- un total, que iniciamos en 0

Iniciamos los valores en 0 porque si los dejamos "undefined" pueden traernos complicaciones despues en los calculos. 

Cada vez que el usuario hace click en un checkbox o radio, ejecutamos la misma funcion: calcularTotal. Esa funcion se fija en el radio de "tarjeta de credito". Esta chequeado? Si es asi, calcula el 10% del subtotal y lo adjudica a la variable "recargo por tarjeta". Luego se fija en el checkbox de "envio". Esta marcado? Si es asi, adjudica el valor del envio a la variable "recargo por envio". Hace lo mismo con el descuento. Solo una vez que haya terminado las operaciones, podemos calcular el total, que es:
total = subtotal + descuento + recargoPorEnvio + recargoPorTarjeta

Si el usuario *no* marcó envio, por ejemplo, no hay problema, porque nuestra variable recargoPorEnvio queda en 0. 
Obviamente estas variables te van a servir tambien para ir mostrandole al usuario en el checkout cuanto tiene que pagar por cada cosa. 

Avisame si esto te sirve para encarar ese codigo, y si no me escribis y lo vemos juntas. 


### Misc 

Tu HTML esta muy bien, prolijo, claro y ordenado. Falta un favicon. Tu CSS esta muy prolijo y bien hecho tambien: se nota mucho el esfuerzo puesto en que quede bien. Tu JS tambien es prolijo, sin comentarios que confundan, aunque si hay un console log olvidado. 

Con respecto al aspecto visual de tu web, esta perfecto. El maquetado es fantastico y las animaciones muy bien logradas. Creo que tenes que trabajar un poco mas en seguir los modelos mas de cerca. Los tamaños de algunas cosas y su distancia relativa no estan bien; el titulo del filtro y el icono estan "pegoteados" entre si, las estrellas estan algo por encima de los checkbox, no hay color o hover en los botones. Falto un poquito de atencion a esos detalles que hacen realmente mucha diferencia cuando evaluamos la maqueta de un desarrollador. 

A tu responsive tambien le falta bastante atencion. 

En JS ocasionalmente usas la sintaxis "vieja" de funciones, que no usamos en este curso ni te recomiendo usar nunca, salvo contadisimas excepciones. Siempre usa funciones flecha. 

Algo que no entiendo es por que en tu HTML tus tarjetas se inician con la clase "hidden" y luego les das una funcion "limpiar" en tu JS. Seria mejor que arrancaran mostrandose desde el vamos. 

### Nota 

Veo relativamente pocos problemas en tu TP, pero muchas ausencias. Me cuesta evaluar realmente tu Javascript porque hay poco que hayas escrito vos por fuera de lo que vimos en clase. Tu codigo es prolijo y correcto, y con atencion al detalle, lo que habla de tu capacidad, pero habria preferido ver un poco mas de tu codigo. Si esto vuelve a ocurrir, lo cual es logico porque son trabajos largos y el tiempo no ayuda, preferiria que me dejaras en el codigo comentado los intentos que no salieron: eso me da mucha informacion sobre como encaraste un problema, que tan en claros tenes los conceptos y como manejas JS. No es lo mismo un codigo comentado donde algo no funciona por un parentesis mal puesto, que un codigo que no funciona porque un concepto basico no esta bien aplicado. 

Con respecto a los restantes factores de evaluación: 
❌ No cumplido
✔️ Puede mejorar
✅ Cumplido

✅ Respeta la consigna.
✅ Estructura correcta de documento HTML.
✅ Respeta el diseño dado.
❌ Respeta el funcionamiento --> por los puntos faltantes
✔️ Responsive funciona correctamente.
✅ Buena estructura de proyecto.
✅ Código bien indentado.
✅ Comentarios que permiten mejorar la legibilidad del código.
✅ Uso correcto de etiquetas semánticas.
✅ Buenos nombres de clases.
✅ Buenos nombres de funciones y variables.
✅ Reutilización de estilos.
✅  Funciones pequeñas.
✅ Commits con mensajes adecuados.
❌ Cumple con las condiciones de accesibilidad avanzada.

NOTA FINAL: 7


