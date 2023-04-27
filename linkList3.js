class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}


class Linklist3 {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    insert3 (val){
        let node3 = new Node(val)
        if(!this.head){
            this.head = node3
            this.tail = this.head
        }else{
            this.tail.next  = node3
            this.tail = node3
        }
        this.length++
        return this
    }

    remove3(){
        if(!this.head){
            return undefined
        } else{
            let current3 = this.tail
            let newTail3 = current3

            while(current3.next){
                this.tail = newTail3
                this.tail.next = null
            }

            this.length--
            return current3
        }
    }
}

let linkedlist3 = new Linklist3()
console.log(linkedlist3.insert3(45))
console.log(linkedlist3.insert3({number:45}))
console.log(linkedlist3.insert3([,"string"]))
console.log(linkedlist3.insert3(56))
console.log("")
console.log(linkedlist3.length)
linkedlist3.remove3()
console.log("")
console.log
