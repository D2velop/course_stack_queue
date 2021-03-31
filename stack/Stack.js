class Stack {
    constructor(stackSize)
    {
        this.items = [];
        this.maxSize = stackSize;
    }
  
    isEmpty()
    {
        return this.items.length == 0;
    }
    push(value)
    {
        if(this.isFull()){
            return false
        }
        this.items.push(value);
        return true;
    }
    pop()
    {
        if (this.items.length == 0)
            return null;
        return this.items.pop();
    }
    peek()
    {
        if(this.isEmpty()){
            return null;
        }
        return this.items[this.items.length - 1];
    }
    
    isEmpty(){
        return this.items.length == 0;
    }

    isFull(){
        return this.items.length >= this.maxSize;
    }
}
export default Stack;