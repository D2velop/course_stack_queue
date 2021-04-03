export default class {
    constructor(stackSize) {
        this.stack = []
        this.stackSize = stackSize
    }

    push(value) {
        let elementAddWithSucess = false

        this.stack.push(value)
        if (this.returnTheLastElement !== null) {
            elementAddWithSucess = true
        }
        return elementAddWithSucess
    }

    pop() {
        let element = this.returnTheLastElement()
        this.stack.pop()
        if (element === undefined) {
            element = null
        }
        return element
    }

    peek() {
        let element = this.stack[0]

        if (element === undefined) {
            element = null
        }
        return element
    }

    isFull() {
        let stackIsFull = false

        if (this.stack.length == this.stackSize) {
            stackIsFull = true
        }
        return stackIsFull
    }

    isEmpty() {
        let stackIsEmpty = false

        if (this.stack.length == 0) {
            stackIsEmpty = true
        }
        return stackIsEmpty
    }

    returnTheLastElement() {
        return this.stack[this.stack.length - 1]
    }
}