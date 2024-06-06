import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    //this.node = new Node(node.value, node.nextNode);
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
    this.length++;
  }

  size() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    let count = 1;
    let currNode = this.head;

    while (count <= index) {
      if (count === index) {
        return currNode;
      } else {
        currNode = currNode.nextNode;
        count++;
      }
    }

    return `Not Found at ${index}`;
  }

  pop() {
    let currNode = this.head;
    let lastNode = this.tail;

    if (this.head === null) {
      return null;
    } else if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      while (currNode != this.tail) {
        //for the second last node node.next.next would be null
        //turn that into the tail...
        if (currNode.nextNode.nextNode === null) {
          this.tail = currNode;
          this.tail.nextNode = null;
        } else {
          currNode = currNode.nextNode;
        }
      }
    }

    this.length--;
    return lastNode;
  }

  contains(value) {
    let currNode = this.head;
    while (currNode != null) {
      if (currNode.value === value) return true;
      currNode = currNode.nextNode;
    }
    return false;
  }

  find(value) {
    let currNode = this.head;
    let index = 1;
    while (currNode !== null) {
      if (currNode.value === value) {
        return index;
      } else {
        currNode = currNode.nextNode;
      }
      index++;
    }
    return null;
  }

  toString() {
    if (this.head === null) return "null";
    let currNode = this.head;
    let returnString = "";
    while (currNode !== null) {
      returnString = returnString + currNode.value + " -> ";
      currNode = currNode.nextNode;
    }

    return returnString + "null";
  }
}
