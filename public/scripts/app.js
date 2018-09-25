

$(document).ready(function() {


  $('.recipe').hide();
  $('.toggle-rec').on('click', function() {
    $('.recipe').toggle().show();
    $('.toggle-rec').hide();

  });



  // $.ajax({
  //   method: "GET",
  //   url: "/api/markers"
  // }).done((favourites) => {
  //   for(favorite of favourites) {
  //     $("<div>").text('' + favorite.id + ': UserID: ' + favorite.user_id + ' MapID: ' + favorite.map_id).appendTo($("body"));
  //   }
  // });

  // $.ajax({
  //   method: "POST",
  //   url: "/api/markers"
  // }).then((markers) => {
  //   for(marker of markers) {
  //     $("div").text(marker.id, marker.title, marker.description, marker.latitude, marker.longitude)
  //     //$("<div>").text('' + marker.id + marker.description).appendTo($("body"));
  //   }
  // });

function deleteMarker(arr) {
  //let id = markers.id;
    $.ajax({
    method: "POST",
    url: `/api/markers/${id}/delete`
    }).done((markers) => {
      // for (i = 0; i < markers.length; i++) {
      //     if (markers[i].getMap() != null) markers[i].setMap(null);
      //     else markers[i].setMap(map);
      //   }

  })
}


//$(element).on('click', addOneAndOne);

  // $.ajax({
  //   method: "PUT",
  //   url: "api/markers/:id"
  // }).then((markers) => {
  //     title: title,
  //     description: description
  // }).done()
});







