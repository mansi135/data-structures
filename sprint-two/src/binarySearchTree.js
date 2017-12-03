//Refactoring Binary Tree for functional shared method (It was functional earlier)

var BinarySearchTree = function(value) {

  var bst = {};
  bst.value = value;
  bst.left = null;
  bst.right = null;
  
  _.extend(bst, BSTMethods);

  return bst;

}

var BSTMethods = {};

  BSTMethods.insert = function(value) {

    if (value <= this.value) {
      if (this.left === null) {
        this.left = BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (this.right === null) {
        this.right = BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  };


  BSTMethods.contains = function(value) {

    if (this.value === value) {
      return true;
    } else if (this.value > value) {
      if (this.left !== null) {
        return this.left.contains(value);
      }      
    } else if (this.value < value) {
      if (this.right !== null) {
        return this.right.contains(value);
      } 
    }

    return false;
    
  };

  

  BSTMethods.depthFirstLog = function(callback) {
    
    callback(this.value);

    if (this.left !== null) {
      this.left.depthFirstLog(callback);
    }
    if (this.right !== null) {
      this.right.depthFirstLog(callback);
    }
  
  };

  BSTMethods.breadthFirstLog = function(callback) {
    
    var queue = [];
    var values = [];

    queue.push(this);
    values.push(this.value);

    for (var i = 0; i < queue.length; i++) {
      if(queue[i].left !== null) {
        queue.push(queue[i].left);
        values.push(queue[i].left.value);
      }
      if(queue[i].right !== null) {
        queue.push(queue[i].right);
        values.push(queue[i].right.value);
      }
    }

    for (var i = 0; i < values.length; i++) {
      callback(values[i]);
    }

  }


// var NodeT = function(value) {
//   this.left = null;
//   this.right = null;
//   this.value = value;
// };
/*
 * Complexity: What is the time complexity of the above functions?
                        WORST CASE   AVERAGE CASE
  .insertRecursively      O(n)          log(n) 
  .contains               O(n)          log(n)
  .depthFirstLog          O(n)          log(n)
  .breadthFirstLog        O(n)
 */
