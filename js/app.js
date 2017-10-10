var songs = [
  { number: 1, name: "Camila Cabello - Havana", url: "https://www.youtube.com/embed/HCjNJDNzw8Y" },
  { number: 2, name: "Justin Bieber - Friends", url: "https://www.youtube.com/embed/ctfLLsD84vk" },
  { number: 3, name: "Taylor Swift - Look What You Make Me Do",url: "https://www.youtube.com/embed/3tmd-ClpJxA" },
  { number: 4, name: "Avicii - With Out You", url: "https://www.youtube.com/embed/WRz2MxhAdJo" },
  { number: 5, name: "Michael Jackson - Blood On The Dance Floor X Dangerous", url: "https://www.youtube.com/embed/aXfokSKZ0QA" }
];

// Helper function to show list
function showList() {
  $('#app').empty().append('<table class="table table-inverse"><thead><tr><th>#</th><th>Name</th></tr></thead><tbody></tbody></table>');
  for (var i=0; i < songs.length; i++) {
    var song = songs[i];
    $('#app table tbody').append(`<tr data-index="${i}"><td>${song.number}</td><td>${song.name}</td></tr>`);
  }
}

// Helper function to show song
function showSong(index) {
  var song = songs[index];

  $('#app').empty();
  $('#app').append(`<div class="song"><h2>${song.name}</h2><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src="${song.url}"></iframe></div><button class="btn btn-primary">Volver</button>`);
}

// Event handlers
$('#app').on('click', 'table tbody tr', function() {
  var index = $(this).data("index");
  showSong(index);
});
$('#app').on('click', 'button', showList);

// Show list
showList();
