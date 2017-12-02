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
    // case 3 looks similar to case 2
    if (list.head === null) {
      return null;
    }
    var headValue = list.head.value;
    var temp = list.head;
    delete list.head;
    list.head = temp.next;
    // delete that object somehow ! //check if this is correct

    return headValue;


  };

  list.contains = function(target) {
    var temp = list.head;
    while (temp !== null) {
      if (temp.value === target) {
        return true;
      } else {
        temp = temp.next;
      }
    }
    return false;
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

  1) addToTail : O(1) , constant
  2) removeHead : O(1) , constant
  3) contains : O(n) , linear

 */
