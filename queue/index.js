export default class {
    constructor(queueSize) {
        this.queue = []
        this.queueSize = queueSize
    }

    enqueue(value) {
        return this.isFull() === false ? this.queue.push(value) !== null : false
    }

    dequeue() {
        return this.queue[0] ? this.queue.shift() : null
    }

    peek() {
        return this.queue[0] ? this.queue[0] : null
    }

    isFull() {
        return this.queue.length === this.queueSize
    }

    isEmpty() {
        return this.queue.length === 0
    }
}