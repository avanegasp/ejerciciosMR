// var num = [22, 3, 55, 2, 11, 9, 5, 27]
// var resultado = []
//
// for (i=0; i < num.length; i++){
// var number = num[i];
//     if(number > 10){
//       resultado.push(number)
//     }
// }
//
// console.log( resultado)
//
// // var elem_p = document.createElement('ul');
//
// // Crear nodo de tipo Element
// var parrafo = document.createElement("ul");
//
// // Crear nodo de tipo Text
// var contenido = document.createTextNode(resultado);
//
// // Añadir el nodo Text como hijo del nodo Element
// parrafo.appendChild(contenido);
//
// // Añadir el nodo Element como hijo de la pagina
// document.body.appendChild(parrafo);


var libros = ["Libro1", "Libro2"];

// iterar sobre el arreglo
//  por cada elemento
//  hacer console.log del elemento

// //PRIMER EJERCICIO
// var libros = ['libro1', 'libro2']
//
//
// for (var i = 0; i < libros.length; i++){
//   console.log(libros[i])
// }

  // var parrafo = document.createElement('p')
  // var texto = document.createTextNode('hola mundo')
  // parrafo.appendChild(texto)
  // document.body.appendChild(parrafo)
  //
  // var parrafo = document.createElement('p');
  // var texto = document.createTextNode('Menos que Macbeth, pero más grande');
  // parrafo.appendChild(texto);
  // document.body.appendChild(parrafo);
  //
  // var oliva = document.createElement('h1')
  // var texto = document.createTextNode('es la mejor perrita del mundo')
  // var oracion = oliva.appendChild(texto)
  // document.body.appendChild(oracion)

  var body = document.body;
  var h1 = document.createElement("h1");
  h1.innerHTML = "Prueba de listas";
  // lista no ordenada
  var hul = document.createElement("h3");
  hul.innerHTML = "Lista no ordenada";
  var list1 = document.createElement("ul");
  for(i=0;i<10;i++){
      var li = document.createElement("li");
      li.innerHTML = "elemento #"+i;
      list1.appendChild(li);
  }

  body.appendChild(h1);
  body.appendChild(hul);
  body.appendChild(list1);
