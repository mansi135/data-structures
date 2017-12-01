

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket === undefined) {
  	this._storage.set(index,{k : v});
  } else {
  	if(k in bucket) {
  		bucket[k] = v;
  	} else {
  		bucket[k] = v;
  	}
  }

  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
 // if (k in bucket) {
  return bucket[k];
  // }
  // else
  // 	return null;
// if (bucket === undefined) {
//   	return null;
//   }
//   else 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if(bucket) {
  	if(k in bucket) {
  		delete bucket[k];
  	}
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


