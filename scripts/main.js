require([
    "networkData",
    "maplib/MapDrawer",
    "gaslib/Point",
    "gaslib/Angle"
], function(networkData, MapDrawer, Point,Angle){
    var convert = Angle();
    function converter(point)
    {
        console.log(convert);
        if(point.unit == "rad")
        {
            point.lat = convert.radianToDegree(point.lat);
            point.lng = convert.radianToDegree(point.lng);
        }
    };
    var mapSection = document.getElementById('map');
    var map = new MapDrawer(mapSection);
    map.drawLine(new Point(52.40,16.90), new Point(52.23,21.06), {});
    for( var i=0;i<networkData.pipes.length;i++)
    {
        var start = networkData.pipes[i].start;
        var end = networkData.pipes[i].end;
        converter(start);
        converter(end);

        map.drawLine(new Point(start.lat,start.lng), new Point(end.lat,end.lng), {});
    }

});


