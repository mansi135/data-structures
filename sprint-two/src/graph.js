

// Instantiate a new graph
var Graph = function() {

 //this.storage = [];
  this.storage = {};

};

// Add a node to the graph, passing in the node's value.
/* Graph.prototype.addNode = function(node) {
  var newNode = {'value' : node , 'edges' : []};
  this.storage.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  for (var i = 0; i < this.storage.length; i++) {

    if (this.storage[i].value === node) {
      return true;
    }

  }
  return false;

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i].value === node) {
      this.storage.splice(i, 1);
      break;
    }
  }

}; */


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
 //this makes sure that we dont override an exisiting node
  if (!this.storage.hasOwnProperty(node))
    this.storage[node] = [];  // Adjacency list

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //if (this.storage.hasOwnProperty(String(node)) // this is also working??
  if (this.storage.hasOwnProperty(node)) // will it stringify node ?  
    return true;
  else
    return false;

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for(var key in this.storage) {
    index = this.storage[key].indexOf(node);
    if (index > -1) {
      this.storage[key].splice(index,1);
    }
  }
  
  if (this.storage[node])
    delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  if (this.contains(fromNode) && this.contains(toNode)) {
    if(this.storage[fromNode].indexOf(toNode) > -1) {
      return true;
    } else {
      return false;
    }
  }
  else
    return false;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.storage[fromNode].push(toNode);
    this.storage[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    indexFrom = this.storage[fromNode].indexOf(toNode);
    if (indexFrom > -1) {
      this.storage[fromNode].splice(indexFrom,1);
    }
    indexTo = this.storage[toNode].indexOf(fromNode);
    if (indexTo > -1) {
      this.storage[toNode].splice(indexTo,1);
    }
  }
};


// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for (var key in this.storage) {

    cb(key);

  }

};

/*
 * Complexity: What is the time complexity of the above functions?

  1) addNode - O(1)
  2) containsNode - O(1)
  3) removeNode -  O(n^2)  // Removing the node iteself has constant time complexity , but we also need to search and remove that node from edges array of all rest of the nodes
  4) hasEdge - O(n)
  5) addEdge - O(1)
  6) removeEdge - O(n)
  7) forEachNode - O(n)
 */


