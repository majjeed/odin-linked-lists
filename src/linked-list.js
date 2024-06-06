import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    //this.node = new Node(node.value, node.nextNode);
    this.head = null;
    this.tail = null;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value, null);
    } else {
      let tempTail = this.tail;
      this.tail = new Node(value, tempTail);
    }
  }

  prepend(value) {
    let tempHead = this.head;
    this.head = new Node(value, tempHead);
  }

  size() {
    let count = 0;
    let tempHead = this.head;
    if (tempHead) {
      while (tempHead.nextNode) {
        count++;
        tempHead = tempHead.nextNode;
      }
    }
    return count;
  }

  head() {}
  tail() {}
  at(index) {}
  pop() {}
  contains(value) {}
  find(value) {}
  toString() {}
}
