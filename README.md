# Problema_6


Test de lógica, razonamiento y desarrollo de software


	Para el presente test te invitamos a ejecutar una serie de problemas planteados siguiendo las siguientes instrucciones:

Se te presentarán 8 ejercicios de diversos tipos: lógica, razonamiento, creación de páginas, manejo de bases de datos, etc. Te recomendamos empezar por los que te sean más adecuados a tu estilo, gustos y conocimiento.
Recomendamos usar como lenguaje JS y sí usarás frameworks, usar cualquiera relacionado a este lenguaje. Sin embargo, si quieres usar otros lenguajes también es posible.
Mínimo debes enviar 4 problemas, pero si deseas puedes realizarlos todos.
Cada solución de los ejercicios deberá ser subida a Github y darle accesos públicos. La solución debe tener un README explicando cómo ejecutar y visualizar la solución presentada.
Si tienes dudas sobre cualquiera de los ejercicios consultar mediante correo electrónico.


Problema 1: Se debe crear una solución que dado 2 números X y Y cualesquiera, se obtenga la multiplicación de los mismos SIN usar el operador de multiplicación *.

Problema 2:  Genere una serie de funciones (Una por cada ítem) que consuma de la página de https://pokeapi.co/ y retorne lo siguiente:
Suma total de pokemones por tipo, debe recibir el tipo en string.
Dado 2 tipos de pokémon retornar todos los pokemones que cumplen con esos 2 tipos.
Dado el nombre de un pokémon retornar el número del mismo.
Dado el número de un pokémon retornar un objeto con sus 6 stats base.
Realizar una función que reciba un arreglo de números (Ids de pokémon) y un ordenador y retorne los pokémon en un arreglo con su nombre, tipo y peso ordenados según se indique por la función por uno de estos 3 indicadores.
Recibir un número y un tipo (de pokémon) y retornar un true o false si el pokémon de ese número posee este tipo.

Problema 3:  Se desea crear un validador para la contraseña de un sitio web, pero esta debe ser muy segura, para ello el cliente solicita los siguientes requerimientos para el password:

Debe tener al menos 16 caracteres.
Debe tener letras minúsculas y mayúsculas.
No puede tener 2 letras iguales consecutivas.
Debe contener al menos 4 números.
No puede tener 2 números iguales consecutivos. 
Debe tener al menos 2 caracteres especiales (!@#$%ˆ&*-_+=?) pero ninguno de ellos puede repetirse en ninguna posición y además los caracteres no pueden estar juntos.
No se puede usar el número 0.
No se puede colocar espacios.

Nota: No debe usar expresión regular.

Problema 4: Dado un arreglo de números cualesquiera sacar la siguiente información:

Cantidad de elementos del arreglo.
Porcentaje de números pares e impares.
Porcentaje de números mayores a 1000.
Cuál es el mayor y menor valor.
Asuma los siguientes indicadores: Tome en cuenta que el mayor número representa el 100%, indique cual es el porcentaje del número mínimo y el porcentaje del promedio de todos los números.

Problema 5: Realice una página en donde se ingrese un password con las condiciones del ejercicio número 3, en donde se muestren cada una de las condiciones del password y a medida que se vaya introduciendo el password se irán mostrando de color rojo los que no son válidos y en color verde los que sean válidos. Por ejemplo:



Problema 6: Crear una página en donde se muestre un campo de texto que permita buscar en el siguiente API: https://pokeapi.co/, por el número o nombre del pokémon y muestre en pantalla los siguientes datos: Nombre, número, tipo, peso, altura y una imágen.

Problema 7: Elaborar un formulario de tareas que contenga la siguiente información: Nombre de la tarea, fecha, prioridad y descripción. Al aceptar en el formulario, la información se debe visualizar en una tabla que debe ubicarse debajo del formulario. Consideraciones:

Puedes agregar más elementos a la tabla, es decir más tareas.
En la tabla debe poder editar o borrar algún elemento usando un ícono o funcionalidad acorde.
El formulario debe tener un botón que lo limpie.

Problema 8: Colocar un campo que reciba un número, luego dado ese número mostrarás esa cantidad en imágenes debajo del campo organizadas de forma acorde al tamaño de la pantalla. Ejemplo:

Si el número insertado es 3, las imágenes podrían organizarse así:



O también podrías usarla así:


O también al colocar un número como 12, se podría ver así:


Ten en cuenta las siguientes consideraciones:

Las imágenes que se mostrarán pueden ser cualesquiera y pueden estar en local o usando algún servicio.
El máximo número de imágenes es 15.
El tamaño y proporción de las imágenes queda a tu consideración.
