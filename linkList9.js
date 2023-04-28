class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Linklist9 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  insert(val) {
    let node9 = new Node(val);

    if (!this.head) {
      this.head = node9;
      this.tail = this.head;
    } else {
      this.tail.next = node9;
      this.head.tail = node9;
    }
    this.length++;
    return this;
  }

  remove() {
    if (!this.head) {
      return undefined;
    } else {
      let current9 = this.tail;
      let newTail9 = current9;

      while (current9.next) {
        this.tail = newTail9;
        this.tail.next = null;
      }
      this.length--;
      return current9;
    }
  }
}


let linkedlist9 = new Linklist9()
console.log(linkedlist9.insert(47))
console.log(linkedlist9.insert(84))
console.log(linkedlist9.insert(90))
console.log("")
console.log(linkedlist9.length)
console.log("")
linkedlist9.remove9()
console.log(linkedlist9.length)