require([
    "networkData",
    "maplib/MapDrawer",
    "gaslib/Point"
], function(networkData, MapDrawer, Point){
    var mapSection = document.getElementById('map');
    var map = new MapDrawer(mapSection);
    map.drawLine(new Point(52.40,16.90), new Point(52.23,21.06), {});

});


