  //
  //
  // var body = document.body;
  // var h1 = document.createElement("h1");
  // h1.innerHTML = "Prueba de listas";
  //
  // // lista no ordenada
  // var titleUl = document.createElement("h3");
  // titleUl.innerHTML = "Lista no ordenada";
  //
  // var num = [22, 3, 55, 2, 11, 9, 5, 27]
  // var resultado = []
  //
  // var list1 = document.createElement("ul");
  // for(i=0; i < num.length; i++){
  //   var number = num[i];
  //       if(number > 10){
  //         resultado.push(number)
  //       }
  //     var li = document.createElement("li");
  //
  //     li.innerHTML = "elemento #" + resultado;
  //     list1.appendChild(li);
  // }
  // console.log(resultado)
  // body.appendChild(h1);
  // body.appendChild(titleUl);
  // body.appendChild(list1);


  //
  // var body = document.body;
  // var h1 = document.createElement('h5');
  // h1.innerHTML= "parrafos con libros";
  // body.appendChild(h1)
  //
  //
  // var libros = ['libro1', 'libro2']
  //
  // for (i=0; i < libros.length; i++){
  //   var libro = libros[i]
  //
  //   var parrafos = document.createElement('p')
  //     parrafos.innerHTML = libro
  //     body.appendChild(parrafos)
  // }



  var body = document.body
  var ulList = document.createElement('ul')
  var num = [22, 3, 55, 2, 11, 9, 5, 27]

  for (i=0; i < num.length; i++){
    if(num[i] > 10){

  var liList = document.createElement('li')
      liList.innerHTML = num[i];
      body.appendChild(liList);
  }
};

  var body = document.body
    var ulList = document.createElement('ul')
    var num = [22, 3, 55, 2, 11, 9, 5, 27]
    var liList = '';

    for (i=0; i < num.length; i++) {
      if (num[i] > 10) {
        liList = liList.concat('<li>'+num[i]+'</li>');
      }
  };
  ulList.innerHTML = liList;
  body.append(ulList)
