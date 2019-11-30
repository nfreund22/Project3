/*
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
*/

var map;

var myLocation = { lat: 41.7906, lng: -87.5831 };

function initMap() {



  var styledMapType = new google.maps.StyledMapType(

            [

              {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},

              {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},

              {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},

              {

                featureType: 'administrative',

                elementType: 'geometry.stroke',

                stylers: [{color: '#c9b2a6'}]

              },

              {

                featureType: 'administrative.land_parcel',

                elementType: 'geometry.stroke',

                stylers: [{color: '#dcd2be'}]

              },

              {

                featureType: 'administrative.land_parcel',

                elementType: 'labels.text.fill',

                stylers: [{color: '#ae9e90'}]

              },

              {

                featureType: 'landscape.natural',

                elementType: 'geometry',

                stylers: [{color: '#dfd2ae'}]

              },

              {

                featureType: 'poi',

                elementType: 'geometry',

                stylers: [{color: '#dfd2ae'}]

              },

              {

                featureType: 'poi',

                elementType: 'labels.text.fill',

                stylers: [{color: '#93817c'}]

              },

              {

                featureType: 'poi.park',

                elementType: 'geometry.fill',

                stylers: [{color: '#8faf6e'}]

              },

              {

                featureType: 'poi.park',

                elementType: 'labels.text.fill',

                stylers: [{color: '#447530'}]

              },

              {

                featureType: 'road',

                elementType: 'geometry',

                stylers: [{color: '#f5f1e6'}]

              },

              {

                featureType: 'road.arterial',

                elementType: 'geometry',

                stylers: [{color: '#fdfcf8'}]

              },

              {

                featureType: 'road.highway',

                elementType: 'geometry',

                stylers: [{color: '#f8c967'}]

              },

              {

                featureType: 'road.highway',

                elementType: 'geometry.stroke',

                stylers: [{color: '#e9bc62'}]

              },

              {

                featureType: 'road.highway.controlled_access',

                elementType: 'geometry',

                stylers: [{color: '#e98d58'}]

              },

              {

                featureType: 'road.highway.controlled_access',

                elementType: 'geometry.stroke',

                stylers: [{color: '#db8555'}]

              },

              {

                featureType: 'road.local',

                elementType: 'labels.text.fill',

                stylers: [{color: '#806b63'}]

              },

              {

                featureType: 'transit.line',

                elementType: 'geometry',

                stylers: [{color: '#dfd2ae'}]

              },

              {

                featureType: 'transit.line',

                elementType: 'labels.text.fill',

                stylers: [{color: '#8f7d77'}]

              },

              {

                featureType: 'transit.line',

                elementType: 'labels.text.stroke',

                stylers: [{color: '#ebe3cd'}]

              },

              {

                featureType: 'transit.station',

                elementType: 'geometry',

                stylers: [{color: '#dfd2ae'}]

              },

              {

                featureType: 'water',

                elementType: 'geometry.fill',

                stylers: [{color: '#75d1ce'}] 

              },

              {

                featureType: 'water',

                elementType: 'labels.text.fill',

                stylers: [{color: '#92998d'}]

              }

            ],

            {name: 'Styled Map'});



  map = new google.maps.Map(document.getElementById("map"), {

    center: myLocation,

    zoom: 18,

    mapTypeControlOptions: {

      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']

    }



  });

  var image = "../images/msi.jpg";

  var marker = new google.maps.Marker({

    position: myLocation,

    map: map,

    title: "Museum of Science and Industry",

    //icon: image

  });



  var info = "The Museum of Science and Industry was originally constructed for the 1893 World's Columbian Exposition's 'White City', originally known as the  Palace of Fine Arts. The museum is the only building still standing from what once was the 'White City'. It was bought and opened by Julius Rosenwald, chairman of Sears, in 1933. He was inspired by a musuem he had seen in Europe and decided to create his own interactive museum. At the time of its opening, it only had one exhibit, the Coal Mine Exhibit which still exists today. Rosenwald had actual coal miners come in and be the tour guides for the exhibit. Now the museum has over 2,000 different exhibits!"



  var infowindow = new google.maps.InfoWindow({

    content: info

  });



  marker.addListener('mouseover',function(){

    infowindow.open(map,marker);

  });



  map.mapTypes.set('styled_map', styledMapType);

  map.setMapTypeId('styled_map');

}
