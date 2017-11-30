var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.index = 0;
  // someInstance.push = stackMethods.push;
  // someInstance.pop = stackMethods.pop;
  // someInstance.size = stackMethods.size;

  _.extend(someInstance, stackMethods);

  return someInstance;

};

var stackMethods = {
	push: function(value) {
    // if key not in storage, push
    this.storage[this.index] = value;
    this.index++;
  },

  pop: function() {
    // need to pop out the last value
    if (this.index === 0) {
      return null;
    }
    var lastValue = this.storage[this.index - 1];
    delete this.storage[this.index - 1];
    this.index--;
    return lastValue;
  },

	size : function() {
    return this.index;
  }

} ;
