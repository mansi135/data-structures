var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
//we want to add the new node to the tail by using Node()
    var newNode = Node(value);
    if (list.head === null && list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    }
    list.tail.next = newNode;
    list.tail = newNode;

  };

  list.removeHead = function() {

    // case 1: when head == null , print a error msg that list is empty
    // case 2 : when head is not null : move head to next node and delete current head
    // case 3 : when there are 2 properties(head and tail), then make head = tail
  


  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
