
$('li').click(function(evento){
  var $tab = $(evento.currentTarget)  //elemento al cúal le hice click (li), es un objeto jquery
  $('.tabs').children('li').removeClass('active')
  $tab.addClass('active')
  var hrefAttr = $tab.children('a').attr('href') //nombre del atributo
  $('.tabs-content').children('div').removeClass('active')
  $(hrefAttr).addClass('active')
})







//basicamente lo que va pasar es que se va disparar un evento `click` sobre una de las pestañas
// tienes que crear ese evento
// cueando ese evento suceda tienes que ponerle la clase
// `active` a la pestaña que le hicieron click y quitarsela a la que antes lo
// tenia que es lo mismo que decir quitarsela a todas las demas
