export default class Stack {
    constructor(stackSize)
    {
        this.stack = [];
        this.stackSize = stackSize;
    }
  
    isEmpty()
    {
        return this.stack.length == 0;
    }
    push(value)
    {
        if(this.isFull()){
            return false
        }
        this.stack.push(value);
        return true;
    }
    pop()
    {
        if (this.stack.length == 0)
            return null;
        return this.stack.pop();
    }
    peek()
    {
        if(this.isEmpty()){
            return null;
        }
        return this.stack[this.stack.length - 1];
    }
    
    isEmpty(){
        return this.stack.length == 0;
    }

    isFull(){
        return this.stack.length >= this.stackSize;
    }
}
