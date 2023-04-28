class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Linklist7{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    insert7(val){
        let node7 = new Node(val)

        if(!this.head){
            this.head = node7
            this.tail = this.head
        }else{
            this.tail.next =node7
            this.next  = node7 
        }
        this.length++
        return this
    }

    remove7(){
        if(!this.head){
            return undefined
        }else{
            let current7 = this.tail
            let newTail7 = current7

            while(current7.next){
                this.tail = newTail7
                this.tail.next = null
            }
            this.length--
            return current7
        }
    }
}

let linkedlist7 = new Linklist7()
console.log(linkedlist7.insert7(45))
console.log(linkedlist7.insert7("this is gettiing more interesting!"))
console.log(linkedlist7.insert7({car:"benz"}))
console.log(linkedlist7.insert7([{name:"williams"}]))
console.log("")
console.log(linkedlist7.length)
linkedlist7.remove7()
console.log("")
console.log(linkedlist7.length)
