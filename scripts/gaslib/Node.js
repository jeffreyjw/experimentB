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
        this.__caption = "Node";
    };


    Node.constructor = Node;
	
	/**
	*setCaption - sets caption for the Node eg. name of the node - "Node1"
	*@method setCaption
	* @param {String} caption
	*/
	Node.prototype.setCaption = function(caption) {
		this.__caption = caption;
	};
	
	/**
	* getCaption - get node's caption
	* @method getCaption
	* @returns {String} caption 
	*/
	Node.prototype.getCaption = function() {
		return this.__caption;
	};

    return Node;
});