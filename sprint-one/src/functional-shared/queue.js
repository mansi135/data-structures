var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance.enq = 0;
  someInstance.deq = 0;

  _.extend(someInstance,queueMethods);
  
  return someInstance;

};

var queueMethods = {

  enqueue : function(value) {

    this.storage[this.enq] = value;
    this.enq++;

  },

  dequeue : function() {
    if(this.enq === this.deq) {
      return null;
    }
    var lastValue = this.storage[this.deq];   
    delete this.storage[this.deq];
    this.deq++;
    return lastValue;
  },

  size : function() {
    return (this.enq - this.deq);

  }


};


