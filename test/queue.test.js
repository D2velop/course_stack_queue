import Queue from "../queue/queue";

describe("Queue", () => {
  const queueSize = 10;

  let queue;

  describe("when the queue is empty", () => {
    beforeEach(() => {
      queue = new Queue(queueSize);
    });

    it("should add an element into the queue", () => {
      expect(queue.enqueue(10)).toBe(true);
    });

    it("should remove an element from the queue", () => {
      expect(queue.dequeue()).toEqual(null);
    });

    it("should look at the first element of the queue", () => {
      expect(queue.peek()).toEqual(null);
    });
  });

  describe("when the queue is not empty", () => {
    beforeEach(() => {
      queue = new Queue(queueSize);
      queue.enqueue(42);
    });

    it("should add an element into the queue", () => {
      expect(queue.enqueue(10)).toBe(true);
    });

    it("should remove an element from the queue", () => {
      expect(queue.dequeue()).toEqual(42);
    });

    it("should look at the first element of the queue", () => {
      expect(queue.peek()).toEqual(42);
    });
  });

  describe("isFull", () => {
    beforeEach(() => {
      queue = new Queue(1);
    });

    describe("when the queue is full", () => {
      beforeEach(() => {
        queue.enqueue(1);
      });

      it("should return true", () => {
        expect(queue.isFull()).toBe(true);
      });
    });

    describe("when the queue is not full", () => {
      it("should return false", () => {
        expect(queue.isFull()).toBe(false);
      });
    });
  });

  describe("isEmpty", () => {
    beforeEach(() => {
      queue = new Queue(1);
    });

    describe("when the queue is empty", () => {
      it("should return true", () => {
        expect(queue.isEmpty()).toBe(true);
      });
    });

    describe("when the queue is not empty", () => {
      beforeEach(() => {
        queue.enqueue(1);
      });
      it("should return false", () => {
        expect(queue.isEmpty()).toBe(false);
      });
    });
  });
});
