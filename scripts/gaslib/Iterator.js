define([], function(){

    /**
     * The Iterator class
     *
     * @class Iterator
     * @param {Array} collection - collection that is being iterated at
     * @constructor
     */
    var Iterator = function(collection){
        this.collection = collection;
        this.position = -1;
    };
	
    Iterator.constructor = Iterator;
	
	
	/**
	* hasNext - check if there is a next element in the collection
	* @method hasNext
	* @returns {Boolean} true - if there is next element, false if there is not
	*/
	Iterator.prototype.hasNext = function(){
		if(this.position+1>this.collection.length)
		{
			return false;
		}
		else
		{
			return true;
		}
	};
	
	/**
	* next - get next element from the collection
	* @method next
	* @returns next element from the collection
	*/
	Iterator.prototype.next = function() {
		this.position++;
		return this.collection[this.position];
	};


    return Iterator;
});
