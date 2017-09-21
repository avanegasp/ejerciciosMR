
    var arr = []

    $('#add').on('click', function(){
      var valInput = $('input').val()
      console.log (parseInt(valInput))
      arr.push(valInput)
      $('input').val('')
      console.log(arr);
    })


    $('#greater').on('click', function(){
      var max_of_array = Math.max.apply(Math, arr)
        alert(max_of_array)
    })












    // $('#add').on('click', function(){
    //   var input = $('input').val()
    //     if(input === ''){
    //       $('.result').hide()
    //     }else{
    //       $('.result').show()
    //     }
    // })
    // $('#number').change('click', function() {
    //   greaterNumber = $('span').text( $(this).val() );
    //
    //   // alert(max_of_array)
    //
    //   });



    // for(var i = 0; i < arr.length; i++){
    //   if(arr[i] > 100)
    //   alert(arr[i])
    // }
    //
