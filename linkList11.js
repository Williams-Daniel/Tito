class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}
class Linklist11{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0 
    }

    insert11(val){
        let node11 = new Node(val)
        if(!this.head){
            this.head  = node11
            this.tail = this.head
        }else{
            this.tail.next = node11
            this.tail = node11
        }
        this.length++
        return this
    }


    remove11(){
        if(!this.head){
            return undefined
        }else{
            let current11 = this.tail
            let newTail11 = current11

            while(this.current11){
                this.tail = newTail11
                this.tail.next = null
            }
            this.length--
            return current11
        }
    }
}

let linkedlist11 = new Linklist11()
console.log(linkedlist11.insert11(575))
console.log(linkedlist11.insert11(76))
console.log(linkedlist11.insert11(43))
console.log(linkedlist11.insert11(90))
console.log("")
console.log(linkedlist11.length)
console.log("")
linkedlist11.remove11()
console.log("")
console.log(linkedlist11.length)