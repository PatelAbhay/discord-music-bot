import Queue from "./Queue.js";

let queue = new Queue();

queue.addToQueue("testing");
queue.addToQueue("testing1");
queue.addToQueue("testing3");
queue.addToQueue("testing4");
queue.addToQueue("testing5");
console.log(queue.printQueue());
queue.addToFront("testing6");
console.log("=====================");
console.log(queue.printQueue());
console.log("=====================");
queue.clearList();
queue.addToFront("testing7");
console.log(queue.printQueue());
