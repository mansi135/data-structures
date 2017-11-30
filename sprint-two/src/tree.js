var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  var newNode = Tree(value);
  this.children.push(newNode);
  

};

treeMethods.contains = function(target, node) {

  
  // var node = node || this;

  // if (node.value === target) {
  //   return true;
  // }
  
  // else if (node.children.length > 0) {
  //   for (var i = 0; i < node.children.length; i++) {
  //     return node.contains(target, node.children[i]);
  //   }
  // }

  // return false; 
  var result = false;
  
  var check = function(node,target) {
//    console.log(node);
    if (node.value === target) {
      result = true;
    } 
    else if(node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
         check(node.children[i],target);
      }
    }
  };

  check(this,target);

  return result;

};

// Note : this is a basic tree, we dont make any linked nodes here .

/*
 * Complexity: What is the time complexity of the above functions?
 */
