var map;
      function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                  center: {lat: 42.110, lng: -88.034},
                  zoom: 8
            });
            var marker1 = new google.maps.Marker({
                  position: {lat: 42.110, lng: -88.034};
                  map: map,
                  title: "My Hometown"
            });
        });
      }
