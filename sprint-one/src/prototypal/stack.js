var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.index = 0;

  return someInstance;

};

var stackMethods = {};

stackMethods.push = function(value) {
	this.storage[this.index] = value;
	this.index++;
}

stackMethods.pop = function() {
	if (this.index === 0) {
		return null;
	}
	var lastValue = this.storage[this.index-1];
  delete this.storage[this.index-1];
	this.index--;
	return lastValue;

}

stackMethods.size = function() {
	return this.index;
}


