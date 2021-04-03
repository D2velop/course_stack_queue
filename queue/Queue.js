import { LinkedList } from "../linkedList";

export default class Queue{
    constructor(queueSize){
        this.linkedList = new LinkedList();
        this.maxSize = queueSize;
    }

    enqueue(element)
    {    
        if(this.isFull()){
            return false;
        }
        this.linkedList.addTail(element);
        return true;
    }

    
    dequeue()
    {
        if(this.isEmpty())
            return null;
        return this.linkedList.removeHead().value;
    }

    peek(){
    
        if(this.isEmpty())
            return null;
        return this.linkedList.head.value;
    }

    isEmpty()
    {
        return this.linkedList.length === 0;
    }   

    isFull(){
        return this.linkedList.length === this.maxSize;
    }
}