class Node  {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Linklist5 {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    insert5(val){
        let node5 = new Node(val)

        if(!this.head){
            this.head = node5
            this.tail =this.head
        }else{
            this.tail.next =node5
            this.tail = node5
        }
        this.length++
        return this
    }

    remove5(){
        if(!this.head){
            return undefined
        }else{
            let current5 = this.tail
            let  newTail5 = current5

            while(current5.next){
                this.tail = newTail5
                this.tail.next = null
            }
            this.length--
            return current5
        }
    }
}

let linkedList5 = new Linklist5()
console.log(linkedList5.insert5(65))
console.log(linkedList5.insert5(56))
console.log(linkedList5.insert5(98))
console.log("")
console.log(linkedList5.length)
linkedList5.remove5()
console.log("")
console.log(linkedList5.length)