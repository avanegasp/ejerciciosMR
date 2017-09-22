var songs = [
  {
    number: 1, name: "Camila Cabello - Havana",url: "https://www.youtube.com/embed/HCjNJDNzw8Y"},
  {
    number: 2, name: "Justin Bieber - Friends",url: "https://www.youtube.com/embed/ctfLLsD84vk"},
  {
    number: 3, name: "Taylor Swift - Look What You Make Me Do",url: "https://www.youtube.com/embed/3tmd-ClpJxA"}
];

 $('body').append('<table></table>');
 $('tbody').append('<tr><td>'+songs[0].number+'</td><td>'+songs[0].name+'</td><td><iframe src="' + songs[0].url + '"></td></tr>')
 $('tbody').append('<tr><td>'+songs[1].number+'</td><td>'+songs[1].name+'</td><td><iframe src="' + songs[1].url + '"></td></tr>')
 $('tbody').append('<tr><td>'+songs[2].number+'</td><td>'+songs[2].name+'</td><td><iframe src="' + songs[2].url + '"></td></tr>')
