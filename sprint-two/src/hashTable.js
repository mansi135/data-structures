

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._countEntries; // Use this to resize limit when entries exceed more than 75% of limit
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
    
  if (bucket === undefined) {
      this._storage.set(index, [[k, v]]);
      //this._countEntries++;
  } else {
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === k) {
          bucket[i][1] = v;
        } else {
          bucket.push([k, v]);
          //this._countEntries++;
        }
      }
  }

  this._countEntries = this.count();
  if (this._countEntries === Math.floor(this._limit * 0.75)) {
    var newLimit = this._limit * 2;
    this.resize(newLimit);
  }
  
};


HashTable.prototype.resize = function(newLimit) {
 // make a new temporary storage
  var oldStorage = this._storage;
  var oldLimit = this._limit;
  this._storage = LimitedArray(newLimit);
  this._limit = newLimit;
 // this._countEntries = 0;
  // get all the elements of current storage & reassign them in the new storage
  for (var i = 0; i < oldLimit; i++) {
    var bucket = oldStorage.get(i);
    if (bucket) {
      for (var j = 0; j < bucket.length; j++) {   // if loop-control variable 'i' is same in both for loops , its a nightmare, hence came let
        this.insert(bucket[j][0], bucket[j][1]);
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

  this._countEntries = this.count();
  if (this._countEntries === Math.floor(this._limit * 0.25)) {
    this.resize(this._limit / 2);
  }

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  
  if(bucket) {
  	for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
          bucket.splice(i,1);
          break;
      }
    }
  }

};



HashTable.prototype.count = function() {

  var cnt = 0;
  for (var i = 0; i < this._limit; i++) {
    var bucket = this._storage.get(i);
    if (bucket) {
      cnt += bucket.length;
    }   
  } 
  return cnt;

}

/*
 * Complexity: What is the time complexity of the above functions?
  insert : O(1)
  retrieve : O(1)
  remove : O(1)
 */


