class Queue {
	constructor(queueLength) {
		this.queue = [];
		this.maxLength = queueLength;
	}
	enqueue(item) {
		if (this.queue.length === 0) {
			this.queue.push(item);
			return true;
		} else {
			this.queue.push(item);
			return true;
		}
	}
	dequeue() {
		if (this.queue.length > 0) {
			return this.queue.shift();
		} else {
			return null;
		}
	}
	peek() {
		if (!this.queue[this.queue.length - 1]) {
			return null;
		} else {
			return this.queue[this.queue.length - 1];
		}
	}
	isEmpty() {
		// if (this.queue.length === 0) {
		// 	return true;
		// } else {
		// 	return false;
		// }
		return this.queue.length === 0;
	}
	isFull() {
		// if (this.queue.length >= this.queueLength) {
		// 	return true;
		// } else {
		// 	return false;
		return this.queue.length >= this.maxLength;
	}
}

let queue = new Queue();
queue.enqueue(1);
console.log(queue);

export default Queue;
