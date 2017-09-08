$('button').on('click', function(){

  $.get("https://s3.amazonaws.com/makeitreal/countries.json", function(countries){

    $('body').append('<table></table>');
    $('table').append('<tr><th>' +"Code" + '</th>' + '<th>' + "Name" + '</th>' + '<th>' +"Flag"+ '</th>' +'</tr>')
    $('table').append('<tr><td>' + countries[0].code + '</td><td>' + countries[0].name + '</td><td><img src="' + countries[0].flag_url + '"></td></tr>')
    $('table').append('<tr><td>' + countries[1].code + '</td><td>' + countries[1].name + '</td><td><img src="' + countries[1].flag_url + '"></td></tr>')
    $('table').append('<tr><td>' + countries[2].code + '</td><td>' + countries[2].name + '</td><td><img src="' + countries[2].flag_url + '"></td></tr>')
    $('table').append('<tr><td>' + countries[3].code + '</td><td>' + countries[3].name + '</td><td><img src="' + countries[3].flag_url + '"></td></tr>')

    $('button').hide();
  })
});
