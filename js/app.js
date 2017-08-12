$('#btn_enviar').on('click', function(){
  var input = ($('input:text[name=nombre]').val());
  $('ul#lista').append('<li>' + input + '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>' +  '</li>')
});


$('#lista').on('click', 'li', function(){
  var input = ($('input:text[name=nombre]').val());
  $(this).remove();
});
