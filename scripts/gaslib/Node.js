define([
    "gaslib/Point"
], function(Point){


    /**
     * Class representing a node in the network
     *
     * @class Node
     * @constructor
     */
    var Node = function(){
        this.position = new Point();
        this.__name = "Node";
    };


    Node.constructor = Node;
	
	/**
	*setName - sets caption for the Node eg. name of the node - "Node1"
	*@method setName
	* @param {String} name
	*/
	Node.prototype.setName = function(name) {
		this.__name = name;
	};
	
	/**
	* getName - get node's name
	* @method getName
	* @returns {String} name 
	*/
	Node.prototype.getName = function() {
		return this.__name;
	};

    return Node;
});