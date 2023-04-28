class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Linklist10{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    insert10(val){
        let node10 = new Node(val)
        if(!this.head){
            this.head = node10
            this.tail = this.head
        }else{
            this.tail.next = node10
            this.tail = node10
        }
        this.length++
        return this
    }


    remove10(){
        if(!this.head){
            return undefined
        }else{
            let current10 = this.tail
            let newTail10 = current10

            while(current10.next){
                this.tail = newTail10
                this.tail.next = null
            }
            this.length--
            return current10
        }
    }
}

let linkedlist10 = new Linklist10()
console.log(linkedlist10.insert10(455))
console.log(linkedlist10.insert10("williams"))
console.log(linkedlist10.insert10("76"))
console.log("")
console.log(linkedlist10.length)
linkedlist10.remove10()
console.log("")
console.log(linkedlist10.length)