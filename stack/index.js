export default class {
    constructor(stackSize) {
        this.stack = []
        this.stackSize = stackSize
    }

    push(value) {
        return this.isFull() === false ? this.stack.push(value) !== null : false
    }

    pop() {
        return this.stack[this.stack.length - 1] ? this.stack.pop() : null
    }

    peek() {
        return this.stack[0] ? this.stack[0] : null
    }

    isFull() {
        return this.stack.length === this.stackSize
    }

    isEmpty() {
        return this.stack.length === 0
    }
}