$(document).ready(function() {

$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });
});


  $('.register').hide();

  $('.toggle-reg').on('click', function() {
    $('.register').show();

  });

})


$(() => {
  $.ajax({
    method: "GET",
    url: "/api/favourites"
  }).done((favourites) => {
    for(favorite of favourites) {
      $("<div>").text('' + favorite.id + ': UserID: ' + favorite.user_id + ' MapID: ' + favorite.map_id).appendTo($("body"));
    }
  });
});
