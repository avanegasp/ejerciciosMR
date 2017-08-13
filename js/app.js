

$('#btn-enviar').on('click', function(e){
  e.preventDefault();
  var input = $('#input-name').val();
  $('ul#lista').append('<li class="list-group-item">' + input + '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +  '</li>')
  $(input).val('');
  console.log('hola')
});


$('ul#lista').on('click', 'li span', function(){
  var input = $('#input-name').val();
  $(this).parent().remove();
});
