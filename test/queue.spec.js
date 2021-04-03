import faker from "faker";

import Queue from '../queue';

describe("Using a queue", () => {
  let queue;

  describe("when the queue is empty", () => {
    const value = faker.datatype.number;

    beforeEach(() => {
      queue = new Queue(1);
      expect(queue.isEmpty()).toEqual(true);
    });

    it("should add a new element and get it back", () => {
      queue.enqueue(value);
      expect(queue.dequeue()).toEqual(value);
      expect(queue.isEmpty()).toEqual(true);
    });

    it("should add a new element and look at it", () => {
      queue.enqueue(value);
      expect(queue.peek()).toEqual(value);
      expect(queue.isEmpty()).toEqual(false);
    });
  });

  describe("when a queue of size one is full", () => {
    const value = faker.datatype.number;

    beforeEach(() => {
      queue = new Queue(1);
      queue.enqueue(value);
    });

    it("remove the element and make the queue empty", () => {
      expect(queue.dequeue()).toEqual(value);
      expect(queue.isEmpty()).toEqual(true);
    });

    it("look at the next element and does not change the queue", () => {
      expect(queue.peek()).toEqual(value);
      expect(queue.isEmpty()).toEqual(false);
      expect(queue.isFull()).toEqual(true);
    });

    it("can not add a new element", () => {
      expect(queue.enqueue(value)).toEqual(false);
    });
  });

  describe("when a queue has a size higher than 1", () => {
    const value = faker.datatype.number;

    beforeEach(() => {
      queue = new Queue(2);
      queue.enqueue(value);
      queue.enqueue(42);
      expect(queue.isEmpty()).toEqual(false);
      expect(queue.isFull()).toEqual(true);
    });

    it("remove an element does not make the queue empty", () => {
      expect(queue.dequeue()).toEqual(value);
      expect(queue.isFull()).toEqual(false);
      expect(queue.isEmpty()).toEqual(false);
    });

    it("Removing all elements make the queue empty", () => {
        expect(queue.dequeue()).toEqual(value);
        expect(queue.dequeue()).toEqual(42);
        expect(queue.dequeue()).toEqual(null);
        expect(queue.isFull()).toEqual(false);
        expect(queue.isEmpty()).toEqual(true);
    });
  });
});
