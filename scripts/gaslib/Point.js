define([
    "gaslib/Angle"
], function(Angle){

	/**
	* Point - represents point (latitude, longitude)
	* @class Point
	* @constructor
    * @param latitude
    * @param longitude	
	*/

    var Point = function(lat, lng){
        lat = lat || 0;
        lng = lng || 0;

        this.lat = lat;
        this.lng = lng;
    };


    Point.constructor = Point;

	/**
	* Latitude in radians
	* @method latInRadians
	* @returns latitude in radians
	*/
    Point.prototype.latInRadians = function(){
        return Angle.degreeToRadian(this.lat);
    };

	/**
	* Longitude in radians
	* @method lngInRadians
	* @returns longitude in radians
	*/
    Point.prototype.lngInRadians = function(){
        return Angle.degreeToRadian(this.lng);
    };

    return Point;

});