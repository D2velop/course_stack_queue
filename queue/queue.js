class Queue{
    constructor(queueSize){
        this.items = [];
        this.maxSize = queueSize;
    }
    enqueue(element)
    {    
        if(this.isFull()){
            return false;
        }
        else{
            this.items.push(element);
            return true;
        }
    }
    
    dequeue()
    {
        if(this.isEmpty())
            return null;
        return this.items.shift();
    }

    peek(){
    
        if(this.isEmpty())
            return null;
        return this.items[0];
    }
    isEmpty()
    {
        return this.items.length == 0;
    }   

    isFull(){
        return this.items.length >= this.maxSize;
    }
}
export default Queue;