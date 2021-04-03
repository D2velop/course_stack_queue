export default class {
    constructor(queueSize) {
        this.queue = []
        this.queueSize = queueSize
    }

    enqueue(value) {
        let elementAddWithSucess = false

        this.queue.push(value)
        if (this.returnTheLastElement !== null) {
            elementAddWithSucess = true
        }
        return elementAddWithSucess
    }

    dequeue() {
        let element = this.queue[0]
        this.queue.shift()
        if (element === undefined) {
            element = null
        }
        return element
    }

    peek() {
        let element = this.queue[0]

        if (element === undefined) {
            element = null
        }
        return element
    }

    isFull() {
        let queueIsFull = false

        if (this.queue.length == this.queueSize) {
            queueIsFull = true
        }
        return queueIsFull
    }

    isEmpty() {
        let queueIsEmpty = false

        if (this.queue.length == 0) {
            queueIsEmpty = true
        }
        return queueIsEmpty
    }

    returnTheLastElement() {
        return this.queue[this.queue.length - 1]
    }
}