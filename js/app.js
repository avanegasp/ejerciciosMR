
    var arr = []

    $('#add').on('click', function(){
      var valInput = $('input').val()
      arr.push(valInput)
      $('input').val('')
      // console.log(arr);
      if(valInput === ''){
        $('.result').hide()
      }else{
        $('.result').show()
      }
  });

    $('#max').on('click', function(){
      var max_of_array = Math.max.apply(Math, arr)
        alert(max_of_array)
    });

    $('#add').on('click', function() {
      $('span').text(arr);
      console.log(arr)
});
