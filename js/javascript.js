var map;
      function initMap() {
            var marker1Info = '<p><b>Palatine</b>, is my hometown.' +
                'Palatine is a village in Cook County, Illinois, United States.' +
                'It is a northwestern residential suburb of Chicago.' +
                'As of the 2000 census, the village had a total population of 65,479.</p>';
            
            var infoWindow1 = new google.maps.InfoWindow({
                  content: marker1Info
            });
            
            var city = {lat: 42.110, lng: -88.034};
            
            map = new google.maps.Map(document.getElementById('map'), {
                  center: city,
                  zoom: 12
            });
            
            var marker1 = new google.maps.Marker({
                  position: city,
                  map: map,
                  title: "My Hometown"
            });
            
            marker1.addListener('click', function() {
                  infoWindow1.open(map, marker1);
            });
            
            var cityCircle = new google.maps.Circle({
                  strokeColor: '#FF0000',
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                  fillColor: '#FF0000',
                  fillOpacity: 0.35,
                  map: map,
                  center: city,
                  radius: 100
            });
      }
