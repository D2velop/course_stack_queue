class Stack {
	constructor(stackLenght) {
		this.stack = [];
		this.max = stackLenght;
	}
	push(item) {
		if (this.stack.length === 0) {
			this.stack.push(item);
			return true;
		} else {
			this.stack.push(item);
			return true;
		}
	}
	pop() {
		if (this.stack.length > 0) {
			return this.stack.pop();
		} else {
			return null;
		}
	}
	peek() {
		if (!this.stack[0]) {
			return null;
		} else {
			return this.stack[0];
		}
	}
	isEmpty() {
		// if (this.stack.length === 0) {
		// 	return true;
		// } else {
		// 	return false;
		// }
		return this.stack.length === 0;
	}

	isFull() {
		// if (this.stack.length >= this.max) {
		// 	return true;
		// } else {
		// 	return false;
		// }
		return this.stack.length >= this.max;
	}
}

export default Stack;
