var map;
      function initMap() {
            var city = {lat: 42.110, lng: -88.034};
            map = new google.maps.Map(document.getElementById('map'), {
                  center: city,
                  zoom: 8
            });
            var marker1 = new google.maps.Marker({
                  position: city,
                  map: map,
                  title: "My Hometown"
            });
      }
