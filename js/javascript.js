function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("map"),mapProp);
}

function runScript() {
	var script = document.createElement('script');
	script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDz5s8CAgKAo_T0ta_SmLavEEi56lOnhzQ&callback=initMap';
	document.body.appendChild(script);
}
window.onload = runScript;
