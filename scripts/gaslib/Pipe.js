define([
    "gaslib/Point",
    "gaslib/Helpers"
], function(Point, Helpers){

	/**
	* Pipe representation - stores informations about specific pipe in the network 
	* @class Pipe
	* @constructor
	*/
    var Pipe = function(){
	/**
	* Flow
	* @property flow
	*/
        this.flow = 0;
	/**
	* maxFlow in pipe
	* @property maxFlow
	*/
        this.maxFlow = 0;
	/**
	* Starting point of the pipe
	* @property start
	*/
        this.start = new Point();
	/**
	* Ending point of the pipe
	* @property finish
	*/
        this.finish = new Point();
    };


    Pipe.constructor = Pipe;

	/**
	* Returns flot divided by maxFlow (flow/maxFlow)
	* @method usage
	* @returns {number}
	*/
    Pipe.prototype.usage = function(){
        if (this.maxFlow > 0)
        {
            return this.flow / this.maxFlow;
        }
        else
        {
            return 0;
        }
    };
	
	/**
	* length - returns length of the pipe (distance between points (start and end))
	* @method length
	* @returns {Number} distance
	*/
	Pipe.prototype.length = function() {
		return Helpers.distanceInKm(this.start, this.finish);
	};


    return Pipe;
});
