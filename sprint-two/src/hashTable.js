

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._countEntries = 0; // Use this to resize limit when entries exceed more than 75% of limit
  //this._resizeLimit = Math.floor(this._limit * 0.75);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  this._countEntries++;
  if (this._countEntries >= Math.floor(this._limit * 0.75)) {
    this.resize(this._limit * 2);
  }
  
  if (bucket === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      } else {
        bucket.push([k, v]);
      }
    }
  }
  
};

HashTable.prototype.resize = function(newLimit) {
 // make a new temporary storage
  oldStorage = this._storage;
  oldLimit = this._limit;
  this._storage = LimitedArray(newLimit);
  this._limit = newLimit;
  this._countEntries = 0;

  // get all the elements of current storage & reassign them in the new storage
  for (var i = 0; i < oldLimit; i++) {
    var bucket = oldStorage.get(i);
    console.log('here');
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        this.insert(bucket[i][0], bucket[i][1]);
      } 
    }   
  } 
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
 
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  // if (this._countEntries !== 0) {
  //   this._countEntries--;
  // }
  
  // if (this._countEntries <= Math.floor(this._limit * 0.25)) {
  //   this.resize(this._limit / 2);
  // }

  if(bucket) {
  	for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
          bucket.splice(i,1);
          break;
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
  insert : O(1)
  retrieve : O(1)
  remove : O(1)
 */


