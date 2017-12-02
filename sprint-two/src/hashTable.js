

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._countEntries = 0; // Use this to resize limit when entries exceed more than 75% of limit
  this._resizeLimit = Math.floor(this._limit * 0.75);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  this._countEntries++;
  //if (this._countEntries >= this._resizeLimit) {
    // somehow resize
    // make a new hashtable
    // iterate over each elemnt of exisiting table and assign it to new table
    // let the old table be garbage collected 
    //this._limit = this._limit * 2;
   //   this.resize();
    
 // }
  
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

HashTable.prototype.resize = function() {
 // this._limit = this._limit * 2;
  this._storage = LimitedArray(this._limit * 2);
  
}

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

  if (this._countEntries !== 0) {
    this._countEntries--;
  }
  

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


