import QueueNode from "./QueueNode.js";

export default class Queue {
  constructor(head) {
    this.head = head;
  }

  // get head of queue
  getHead() {
    return this.head;
  }

  // clear queue
  clearList() {
    this.head = null;
  }

  // check if queue is empty
  isEmpty() {
    return this.head === undefined;
  }

  // add element to the end of the queue
  addToQueue(songUrl) {
    // create new QueueNode
    const newNode = new QueueNode(songUrl);

    // check if queue is empty
    if (this.isEmpty()) {
      this.head = newNode;
      return;
    }
    // loop through queue till you get to the end
    let currentNode = this.getHead();
    while (currentNode.hasNext()) {
      currentNode = currentNode.getNext();
    }

    // add new node to the end
    currentNode.setNext(newNode);
  }

  // add song to the front of the queue
  addToFront(songUrl) {}

  // removes a node with the specifc songUrl
  removeNode(songUrl) {
    // check if queue is empty
    if (this.isEmpty()) {
      return;
    }

    // loop through and remove
  }

  // returns a string representation of the queue
  printQueue() {
    if (this.isEmpty()) {
      return "Queue is empty!";
    }
    let head = this.getHead();
    let string = "";
    let count = 1;

    while (head) {
      string += count.toString() + ". " + head + "\n";
      head = head.getNext();
      count++;
    }

    return string.trim();
  }
}
