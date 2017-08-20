$('form').on('submit',function(e){
  e.preventDefault();
  var input = $('#input-name').val();
  $('ul#lista').append('<li class="list-group-item">' + input + '<svg viewBox="0 0 32 32" width="12" height="12" stroke="currentcolor">' + '<path d="M2 30 L30 2 M30 30 L2 2" />' + '</svg>' + '</li>')
  $('#input-name').val('');


  if(input.indexOf(' ') >= 0){
    $('#input-name').addClass('is-invalid')
    console.log('primera ')

  }else if ($('#input-name').val().length === 0){
    $('#input-name').addClass('is-invalid')
    console.log('segunda bn')

  }else{
    $('#input-name').removeClass('is-invalid')
    // append('<li class="list-group-item">' + input + '<svg viewBox="0 0 32 32" width="12" height="12" stroke="currentcolor">' + '<path d="M2 30 L30 2 M30 30 L2 2" />' + '</svg>' + '</li>')
    console.log('tercera bn')
  };
});

$('ul#lista').on('click', 'svg', function(){
  var input = $('#input-name').val();
  $(this).parent().remove();
});
