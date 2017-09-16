//
// $('li').click(function(evento){
//   var $tab = $(evento.currentTarget)  //elemento al cúal le hice click (li), es un objeto jquery
//   $('.tabs').children('li').removeClass('active')
//   $tab.addClass('active')
//
//   var hrefAttr = $tab.children('a').attr('href') //nombre del atributo
//   console.log(hrefAttr)
//   $('.tabs-content').children('div').removeClass('active')
//   $(hrefAttr).addClass('active')
// })
//
// $('li').click(function(evento){
//   var li = $(evento.currentTarget)
//   var liAttr = li.attr('data-section')
//   console.log(liAttr)
//
// $('section').removeClass('show')
// $('section').addClass('show')
//
// })

// $('button').click(function(){
//   $('section').addClass('show')
// })


$('li').click(function(evento){
  var li = $(evento.currentTarget)
  var liAttr = li.attr('data-section')
  console.log(liAttr)

  $('section').removeClass('show')
  $(liAttr).addClass('show')  
})








//basicamente lo que va pasar es que se va disparar un evento `click` sobre una de las pestañas
// tienes que crear ese evento
// cueando ese evento suceda tienes que ponerle la clase
// `active` a la pestaña que le hicieron click y quitarsela a la que antes lo
// tenia que es lo mismo que decir quitarsela a todas las demas
