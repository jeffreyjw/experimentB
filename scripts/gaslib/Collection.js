define([], function(){
	/**
	* Collection - stores collection of objects 
	* @constructor
	*/
    var Collection = function(){
        this.__collection = [];
		this.__iterator = new Iterator(this.__collection);
    };


    Collection.constructor = Collection;

	/**
	* add - adds new element to the Collection
	* @method add
	* @param element
	*/
    Collection.prototype.add = function(element){
        this.__collection.push(element);
    };
	
	/**
	* getIterator - gets Iterator - object that allows us to iterate
	* @method getIterator
	* @returns {Iterator} iterator
	*/
	Collection.prototype.iterator = function(){
		return this.__iterator;
	};


    return Collection;
});
