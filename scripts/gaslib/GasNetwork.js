define([
    "gaslib/Collection"
], function(Collection){
	
	/**
	* GasNetwork - main representation of the gas network
	* @class GasNetwork
	* @constructor
	* @param {Collection}
	*/
    var GasNetwork = function(){
        this.pipes = new Collection();
        this.nodes = new Collection();
    };


    GasNetwork.constructor = GasNetwork;

	/**
	* addPipe - adds new Pipe to the network
	* @method addPipe
	* @param {Pipe} pipe
	*/
    GasNetwork.prototype.addPipe = function(pipe){
        this.pipes.add(pipe);
    };

	/**
	* addNode - adds new Node to the network
	* @method addNode
	* @param {Node} node
	*/
    GasNetwork.prototype.addNode = function(node){
        this.nodes.add(node);
    };


    return GasNetwork;
});
