class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Linklist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  remove() {
    if (!this.head) {
      return undefined;
    } else {
      let current = this.tail;
      let newTail = current;

      while (current.next) {
        this.tail = newTail;
        this.tail.next = null;
      }

      this.length--;
      return current;
    }
  }
}
console.clear();
let linkedlist = new Linklist();
console.log(linkedlist.insert(39));
console.log(linkedlist.insert(34));
console.log(linkedlist.insert(89));
console.log(linkedlist.insert(79));
console.log(linkedlist.insert(99));
console.log(linkedlist.insert(9));
console.log("");
console.log(linkedlist.length);
linkedlist.remove();
console.log("");
console.log(linkedlist.length);
