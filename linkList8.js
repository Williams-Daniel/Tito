class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Linklist8{
    constructor(val){
        this.head = null
        this.tail = null
        this.length = 0
    }


    insert8(val){
        let node8 = new Node(val)
        if(!this.head){
            this.head = node8
            this.tail = this.head 
        }else{
            this.tail.next = node8
            this.tail = node8
        }
        this.length++
        return this
    }


    remove8(){
        if(!this.head){
            return undefined
        }else{
            let current8 = this.tail
            let  newTail8 = current8

            while(current8.next){
                this.tail = newTail8
                this.tail.next = null
            }
            this.length--
            return current8
        }
    }
}


let linkedlist8 = new Linklist8()
console.log(linkedlist8.insert8({age:46}))
console.log(linkedlist8.insert8(67))
console.log(linkedlist8.insert8(45))
console.log("")
console.log(linkedlist8.length)
console.log("")
linkedlist8.remove8()
console.log(linkedlist8.length)

