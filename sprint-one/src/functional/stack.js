var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // if key not in storage, push
    storage[index] = value;
    index++;
  };

  someInstance.pop = function() {
    // need to pop out the last value
    if (index === 0) {
      return null;
    }
    var lastValue =  storage[index-1];
    index--;
    return lastValue;
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};
