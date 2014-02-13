window.onload = function() {
    initialize();
} 

function initialize() {
    var map = new OpenLayers.Map("map_canvas");
    map.addLayer(new OpenLayers.Layer.OSM());
 
    var lonLat = new OpenLayers.LonLat(149.06685590744019, -35.234656982759354).transform(
        new OpenLayers.Projection("EPSG:4326"),
        map.getProjectionObject()
    );
 
    var zoom = 17;
 
    var markers = new OpenLayers.Layer.Markers("Markers");
    map.addLayer(markers);
 
    markers.addMarker(new OpenLayers.Marker(lonLat));
 
    map.setCenter (lonLat, zoom);
}
