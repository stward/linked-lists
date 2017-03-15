/**
* Linked Lists - constructors and methods for creating and using linked lists.
* @module
*/

/**
* Node - generates a Node element of a linked list
* @function
* @constructor
* @param {Number} data
*/
function Node(data) {
  this.next = null;
  this.data = data;
}

function List() {
  this.head = null;
  this.tail = null;
  this.numElements = 0;
}

List.prototype.add = function(data) {
  var node = new Node(data);
  if(!this.head) { // no head = no elements in list
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.numElements++;
}

List.prototype.remove = function(data) {
  var current = this.head;
  while(current) {
    if (current.next.data == data) {
      current.next = current.next.next;
      break;
    }
    current = current.next;
  }
}

List.prototype.print = function() {
  var current = this.head;
  while(current) {
    console.log(current.data);
    current = current.next;
  }
}

var myList = new List();
myList.print();
myList.add(10);
myList.add(5);
myList.add(15);
myList.add(20);
myList.add(1);
myList.add(10);
myList.print();
myList.remove(15);
myList.print();
