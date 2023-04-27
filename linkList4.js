class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Linklist4 {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    insert4(val){
        let node4 = new Node(val)
        if(!this.head){
            this.head = node4
            this.tail = this.head
        }else{
            this.tail.next = node4
            this.tail = node4
        }
        this.length++
        return this
    }

    remove4(){
        if(!this.head){
            return undefined
        }else{
            let current4 = this.tail
            let newTail4 = current4

            while(current4.next){
                this.tail =newTail4
                this.tail.next = null

            }
            this.length--
            return current4
        }
    }
}

let linkedlist4 = new Linklist4()
console.log(linkedlist4.insert4(70)) 
console.log(linkedlist4.insert4(34)) 
console.log(linkedlist4.insert4(67))
console.log(linkedlist4.insert4(54))
console.log("")
console.log(linkedlist4.length)
linkedlist4.remove4()
console.log("") 
console.log(linkedlist4.length)