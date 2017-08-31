// $('form').on('submit',function(e){
//   e.preventDefault();
//   var input = $('#input-name').val();
//   $('ul#lista').append('<li class="list-group-item">' + input + '<svg viewBox="0 0 32 32" width="12" height="12" stroke="currentcolor">' + '<path d="M2 30 L30 2 M30 30 L2 2" />' + '</svg>' + '</li>')
//   $('#input-name').val('');
//
//
//   if(input.indexOf(' ') >= 0){
//     $('#input-name').addClass('is-invalid')
//     console.log('primera ')
//
//   }else if ($('#input-name').val().length === 0){
//     $('#input-name').addClass('is-invalid')
//     console.log('segunda bn')
//
//   }else{
//     $('#input-name').removeClass('is-invalid')
//     // append('<li class="list-group-item">' + input + '<svg viewBox="0 0 32 32" width="12" height="12" stroke="currentcolor">' + '<path d="M2 30 L30 2 M30 30 L2 2" />' + '</svg>' + '</li>')
//     console.log('tercera bn')
//   };
// });
//
// $('ul#lista').on('click', 'svg', function(){
//   var input = $('#input-name').val();
//   $(this).parent().remove();
// });



//
//
//
//
//

//
//
//
//
//
// $('button').on('click', function(){
//
//   var countries = [
//     { "code": "CO", "name": "Colombia", "flag_url": "https://s3.amazonaws.com/makeitreal/co.gif" },
//     { "code": "PE", "name": "Perú", "flag_url": "https://s3.amazonaws.com/makeitreal/pe.gif" },
//     { "code": "EC", "name": "Ecuador", "flag_url": "https://s3.amazonaws.com/makeitreal/ec.gif" },
//     { "code": "BO", "name": "Bolivia", "flag_url": "https://s3.amazonaws.com/makeitreal/bo.gif" }
//   ];
//
//   $('body').append('<table>' + '<tr>' + '<th>' +"Code" + '</th>' + '<th>' + "Name" + '</th>' + '<th>' +"Flag"+ '</th>' +'</tr>' + '</table>')
//   $('body').append('<tr>' + '<td>' +countries[0].code + '</td>' + '<td>' + countries[0].name + '</td>' + '<td>' +'<img src="countries[0].flag_url" /> '+ '</td>' + '</tr>' + '</table>')
//   $('body').append('<tr>' + '<td>' +countries[1].code + '</td>' + '<td>' + countries[1].name + '</td>' + '<td>' +'<img src="countries[1].flag_url" /> '+' </td>' + '</tr>' + '</table>')
//   $('body').append('<tr>' + '<td>' +countries[2].code + '</td>' + '<td>' + countries[2].name + '</td>' + '<td>' +'<img src="countries[2].flag_url" /> '+' </td>' + '</tr>' + '</table>')
//   $('body').append('<tr>' + '<td>' +countries[3].code + '</td>' + '<td>' + countries[3].name + '</td>' + '<td>' +'<img src="countries[3].flag_url" /> '+' </td>' + '</tr>' + '</table>')
//
// });








$('form').on('submit', function(e){
  e.preventDefault();
  var nombre = $('.nombre').val();
  var año = $('.año').val();

  var calcular = 2017 - año

    $('tbody').append('<tr><td>' + nombre + '</td><td>' + calcular + ' año(s)' + '</td></tr>')

    $('.año').val('');
    $('.nombre').val('');

  // console.log(nombre + ' tiene '  +  calcular + '(s)')
});
