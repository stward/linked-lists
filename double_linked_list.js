/**
 * Linked Lists - constructors and methods for creating and using linked lists.
 *
 * @module linked-list
 * @exports List
 */

/**
 *
 * Node - generates a Node element of a linked list
 * @function
 * @constructor
 * @param {Number} data
 *
 */
function Node (data) {
  this.previous = null;
  this.next = null;
  this.data = data;
}

/**
 * List - constructor for a List
 * @function
 * @constructor
 *
 */
function List () {
  this.head = null;
  this.tail = null;
  this.numElements = 0;
}


List.prototype.add = function (data) {
  var node = new Node(data);
  if(!this.head) { // There are no elements in list
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
  }
  this.numElements++;
};

/**
 *
 *
 *
 */
List.prototype.insertAfter = function (data, nodeData) {
  var node = new Node(data);
  var current = this.head;
  if (!this.head) {
    this.head = node;
    this.tail = node;
  }
  while(current) {
    if (current.data === nodeData ) {
      node.next = current.next;
      current.next.previous = node;
      current.next = node;
      node.previous = current;
    }
    current = current.next;
  }
};

List.prototype.insertFirst = function (data) {
  var node = new Node(data);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    node.next = this.head;
    this.head.previous = node;
    this.head = node;
  }
}

List.prototype.length = function () {
  var length = 0;
  var current = this.head;
  while(current) {
    length++;
    current = current.next;
  }
  return length;
};

List.prototype.print = function () {
  var current = this.head;
  while(current) {
    console.log(current.data);
    current = current.next;
  }
};

List.prototype.remove = function (data) {
  var current = this.head;
  while(current) {
    if (current.data === data) {
      current.previous.next = current.next;
      current.next.previous = current.previous;
      break;
    }
    current = current.next;
  }
};

List.prototype.pop = function () {
  var returnData = this.tail.data;
  this.tail = this.tail.previous;
  this.tail.next = null;
  return returnData;
}

module.exports = List;

var myList = new List();
myList.print();
console.log("======");
myList.add(10);
myList.add(5);
myList.add(15);
myList.add(20);
myList.add(30);
// myList.insertAfter(50, 5);
myList.print();
console.log("======");
// myList.remove(15);
myList.print();
console.log("======");
console.log(myList.length());
console.log(myList.pop());
console.log("======");
myList.print();
