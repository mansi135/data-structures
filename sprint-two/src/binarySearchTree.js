var BinarySearchTree = function(value) {

  var bst = new NodeT(value);
  

  bst.insert = function(value) {
    bst.insertRecursively(this,value);
  };

  bst.insertRecursively = function(node,value) {
    
    if (value <= node.value) {
      if (node.left === null) {
        node.left = new NodeT(value);
      } else {
        bst.insertRecursively(node.left,value);
      }
    } else if (value > node.value) {
      if (node.right === null) {
        node.right = new NodeT(value);
      } else {
        bst.insertRecursively(node.right,value);
      }
    }

  };

  bst.contains = function(value) {

    var result = false;

    var innerContains = function(node, value) {
        if (node === null) {
          result = false;
        } else if(node.value === value) {
          result = true;
        } else if(node.value > value) {
          innerContains(node.left,value);
        } else if(node.value < value) {
          innerContains(node.right,value);
        }
    };

  innerContains(this,value);

    return result;
  };

  

  bst.depthFirstLog = function(callback) {
    
    var innerDFS = function(callback, node) {
        if(node !== null) {
          callback(node.value);
        }
        if (node.left !== null) {
          innerDFS(callback, node.left);
        }
        if (node.right !== null) {
          innerDFS(callback, node.right);
        }
    }

    innerDFS(callback, this);
    
  
  };

  return bst;


};


var NodeT = function(value) {
  this.left = null;
  this.right = null;
  this.value = value;
};
/*
 * Complexity: What is the time complexity of the above functions?
                        WORST CASE   AVERAGE CASE
  .insertRecursively      O(n)          log(n) 
  .contains               O(n)          log(n)
  .depthFirstLog          O(n)          log(n)
 */
