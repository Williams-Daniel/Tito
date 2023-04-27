class Node{
    constructor(val){
        this.val = val
        this.next = this.next
    }
}

class LinkList2{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    insert2(val){
        let node2 = new Node(val)
        if (!this.head){
            this.head = node2
            this.tail = this.head
        }else{
            this.tail.next = node2
            this.tail = node2
        }
        this.length++
        return this
    }

    remove2(){
        if(!this.head){
            return undefined
        }else{
            let current2 = this.tail
            let newTail2 = current2

            while(current2.next){
                this.tail = newTail2
                this.tail.next = null
            }
            this.length--
            return current2
        }
    }
}  

let linkedList2 = new LinkList2()
console.log(linkedList2.insert2(50))
console.log(linkedList2.insert2("string"))
console.log(linkedList2.insert2({name: "object"}))
console.log("")
console.log(linkedList2.length)
linkedList2.remove2()
console.log("")
console.log(linkedList2.length)


