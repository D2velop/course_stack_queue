import { LinkedList } from "../linkedList";

class Stack {
    constructor(stackSize)
    {
        this.linkedList = new LinkedList();
        this.maxSize = stackSize;
    }
  
    isEmpty()
    {
        return this.linkedList.length == 0;
    }

    push(value)
    {
        if(this.isFull()){
            return false
        }
        this.linkedList.addTail(value);
        return true;
    }

    pop()
    {
        if (this.isEmpty())
            return null;
        return this.linkedList.removeTail().value;
    }

    peek()
    {
        if(this.isEmpty()){
            return null;
        }
        return this.linkedList.tail.value;
    }
    
    isEmpty(){
        return this.linkedList.length === 0;
    }

    isFull(){
        return this.linkedList.length === this.maxSize;
    }
}
export default Stack;