define([
    "gaslib/Angle"
], function(){
    "use strict";

    var JSONToGasNetwork = function(data,map){
        for( var i=0;i<networkData.pipes.length;i++)
        {
            var start = networkData.pipes[i].start;
            var end = networkData.pipes[i].end;
            converter(start,convert);
            converter(end, convert);

            map.drawLine(new Point(start.lat,start.lng), new Point(end.lat,end.lng), {});
        }
    };


    return JSONToGasNetwork;
});
