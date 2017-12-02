var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me//
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {

  if (!this.contains(item)) {
    //since the item itself can be used both as key and value, and we dont care about value
    // we just want uniq keys, so make values alyways truthy 
    this._storage[item] = true;
  }

};

setPrototype.contains = function(item) {
  
  if (this._storage[item]) {
    return true;
  } else {
    return false;
  }

};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

//Implemented a new function to write a new unit test
setPrototype.size = function() {

  return Object.keys(this._storage).length;

};

/*
 * Complexity: What is the time complexity of the above functions?

.add: O(1) constant

.contains: O(1) constant

.remove: O(1) constant

 */
