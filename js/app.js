

  $('#add').on('click', function(){
    var input = $('input').val()
      if(input === ''){
        $('.result').hide()
      }else{
        $('.result').show()
        $('#max').show()
      }
  })

  $('#number').change('click', function() {
    var greaterNumber = $('span').text( $(this).val() );
        console.log(greaterNumber)
    });



// var array = [4, 6, 7, 33, 55, 64]
// //
// // for (var i=0; i < arr.length; i++){
// //
// // }
//
// var max_of_array = Math.max.apply(Math, array);
//
// console.log(max_of_array)
