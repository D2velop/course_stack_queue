export default class Queue{
    constructor(queueSize){
        this.queue = [];
        this.queueSize = queueSize;
    }
    enqueue(element)
    {    
        if(this.isFull()){
            return false;
        }
        else{
            this.queue.push(element);
            return true;
        }
    }
    
    dequeue()
    {
        if(this.isEmpty())
            return null;
        return this.queue.shift();
    }

    peek(){
    
        if(this.isEmpty())
            return null;
        return this.queue[0];
    }
    isEmpty()
    {
        return this.queue.length == 0;
    }   

    isFull(){
        return this.queue.length >= this.queueSize;
    }
}
