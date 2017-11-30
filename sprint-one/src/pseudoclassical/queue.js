var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.enq = 0;
  this.deq = 0;

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.enq] = value;
  this.enq++;
}

Queue.prototype.dequeue = function() {
  if (this.enq === this.deq) {
    return null;
  }
  var lastValue = this.storage[this.deq];
  delete this.storage[this.deq];
  this.deq++;
  return lastValue;

}

Queue.prototype.size = function() {
  return this.enq-this.deq;
}

