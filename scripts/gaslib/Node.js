define([
    "gaslib/Point"
], function(Point){


    /**
     * Class representing a node in the network
     *
     * @class Node
     * @constructor
	 * @param {Point} point
     */
    var Node = function(){
        this.position = new Point();
		/**
		* Caption of the pipe eg. "Pipe numer XYZ1"
		* @property caption
		*/
        this.caption = "Node";
    };


    Node.constructor = Node;


    return Node;
});