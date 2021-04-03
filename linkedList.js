export class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    add(value){
        const node = { value };
        node.next = this.head;
        this.head = node;
        this.length++;
        if(this.length === 1){
            this.tail = this.head;
        }
    }

    addTail(value) {
        if(this.length === 0){
            this.add(value);
        }
        else{
            const node = { value };
            this.tail.next = node;
            this.tail = node;
            this.length++;
        }
    }

    removeHead(){
        const value = this.head;
        
        this.head = this.head.next;
        this.length--;
        if(this.length === 0){
            this.tail = this.head;
        }
        return value;
    }

    removeTail(){
        const del = this.tail;
        const element = this.head;
        if (this.head === this.tail) {
          this.head = this.tail = null;
        } else {
          while (element.next != this.tail) {
              element = element.next
          }
          element.next = null;
          this.tail = element;
        }
        this.length--;

        return del;
    }
       
    
}