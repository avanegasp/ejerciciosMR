var songs = [
  {
    number: 1, name: "Camila Cabello - Havana",url: "https://www.youtube.com/embed/HCjNJDNzw8Y"},
  {
    number: 2, name: "Justin Bieber - Friends",url: "https://www.youtube.com/embed/ctfLLsD84vk"},
  {
    number: 3, name: "Taylor Swift - Look What You Make Me Do",url: "https://www.youtube.com/embed/3tmd-ClpJxA"}
];

 $('body').append('<table></table>');
 $('tbody').append('<tr><td>'+songs[0].number+'</td><td>'+songs[0].name+'</td></tr>')
 $('tbody').append('<tr><td>'+songs[1].number+'</td><td>'+songs[1].name+'</td></tr>')
 $('tbody').append('<tr><td>'+songs[2].number+'</td><td>'+songs[2].name+'</td></tr>')


  $('td').on('click', function(){
    $('table').hide()
    var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "https://www.youtube.com/embed/HCjNJDNzw8Y");
        ifrm.style.width = "640px";
        ifrm.style.height = "480px";
        document.body.appendChild(ifrm);
    })




 //
 // var body = document.body;
 // //   var h1 = document.createElement("h1");
 // //   h1.innerHTML = "Prueba de listas";
 //   // lista no ordenada
 //  //  var hul = document.createElement("h3");
 //  //  hul.innerHTML = "Lista no ordenada";
 //   var list1 = document.createElement("ul");
 //   for(i=0;i<10;i++){
 //       var li = document.createElement("li");
 //       li.innerHTML = "elemento #"+i;
 //       list1.appendChild(li);
 //   }
 //   console.log(list1)
 //  //  body.appendChild(h1);
 //  //  body.appendChild(hul);












 //
 //
 // var videos = [
 //   {
 //
 //     // <td><iframe src="' + songs[0].url + '"></td>
 //     // <td><iframe src="' + songs[1].url + '"></td>
 //     // <td><iframe src="' + songs[2].url + '"></td>
 //   }
 // ]
