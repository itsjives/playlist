$(document).ready(function(){
console.log("here");
var $getRandom = $.get("https://lit-fortress-6467.herokuapp.com/object", function(data){
var $postThis = $.post("https://lit-fortress-6467.herokuapp.com/post ", function(pData){

var images = [];

function getRandom(){
for (var i = 0; i < data["results"].length; i++){
  images.push(data["results"][i]["cover_art"]);
  var path = path || 'images/';
  var num = Math.floor(Math.random() * images.length);
  var img = images[num];
  var imgStr = '<img style="height: 150px; width: 170px;" src="' + path + img + '"alt="">';
};
 return imgStr;
};


$('.0').append(getRandom());
$('.1').append(getRandom());
$('.2').append(getRandom());


function appendAlbum(){
  for (var i = 0; i < data['results'].length; i++){
    // console.log(data['results'][i]['id'],"ID");
    // images.push(data["results"][i]["cover_art"]);
    var path = path || 'images/';
    var imgStr = '<img src="' + path + data["results"][i]["cover_art"] + '"alt="">';
    var newClass = $('.albumList').append(`<div class="album_container" id="${data['results'][i]['id']}">${imgStr}</div>`);
  }
  return newClass;


}
appendAlbum();
appendAlbum();

var final;
var artist;
var title;

$('.album_container').click(function(){
  var curr = ($(this).attr('id'));
  console.log(curr);
  for (var i = 0; i < data['results'].length; i++){
    if (curr == data['results'][i]['id']){
      final = (data['results'][i]['artist'] + ":" + data['results'][i]['title']);
      console.log(final);
      $('.pinfo').val(final);
    }


  }


})

$('.resetter').click(function(e){
  e.preventDefault();
  $('.pinfo').val("");
})

console.log(data['results']);


$('.submitty').click(function(e){
  e.preventDefault();
  var easyData = $('pinfo').val();

  $.post("https://lit-fortress-6467.herokuapp.com/post",
  {
    pData : {pinfo: easyData}
  }),
  console.log(pData, easyData);
});



});

});

});
