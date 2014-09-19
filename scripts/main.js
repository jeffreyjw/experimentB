require([
    "networkData",
    "maplib/MapDrawer"
], function(networkData, MapDrawer){
    var mapSection = document.getElementById('map');
    new MapDrawer(mapSection);

});


