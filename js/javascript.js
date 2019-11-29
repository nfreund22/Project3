// Initialize and add the map

function initMap() {

  // The location of Everest

  var everest = {lat: 27.988271, lng: 86.924932};

  // The location of Everest view hotel

  var view = {lat: 27.816692, lng: 86.723680};

  // The location of Little Flowers' School

  var school = {lat: 26.631896, lng: 87.990280};

  var options = {

      zoom: 8,

      center: everest,

      mapTypeId: google.maps.MapTypeId.TERRAIN   

    };

  // The map, centered at Everest

  var map = new google.maps.Map(

      document.getElementById('map'), options);

  // The marker, positioned at Everest

  var marker = new google.maps.Marker({position: everest, map: map});

  // The marker, positioned at Everest view hotel

  var marker = new google.maps.Marker({position: view, map: map});

  // The marker, positioned at Little Flowers' School

  var marker = new google.maps.Marker({position: school, map: map});

  

  

}



google.maps.event.addDomListener(window, 'load', initMap);
