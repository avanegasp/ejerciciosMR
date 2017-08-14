

$('#btn-enviar').on('click',function(e){
  e.preventDefault();
  console.log('hola');
  var input = $('#input-name').val();
  $('ul#lista').append('<div class="row justify-content-md-center">'+'<div class="col-md-4">' + '<li class="list-group-item">' + input + '<svg viewBox="0 0 32 32" width="12" height="12" stroke="currentcolor">' + '<path d="M2 30 L30 2 M30 30 L2 2" />' + '</svg>' + '</li>')
});


$('ul#lista').on('click', 'svg', function(){
  var input = $('#input-name').val();
  $(this).parent().remove();
});
