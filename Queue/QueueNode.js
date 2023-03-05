export default class QueueNode {
  constructor(songUrl) {
    this.songUrl = songUrl;
    this.next = null;
  }

  getSong() {
    return this.songUrl;
  }

  getNext() {
    return this.next;
  }

  hasNext() {
    return this.next !== null;
  }

  setNext(newNode) {
    this.next = newNode;
  }

  toString() {
    return this.getSong();
  }
}
