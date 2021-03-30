import faker from "faker";

import Stack from "../stack";

describe("Using a stack", () => {
  let stack;

  describe("when the stack is empty", () => {
    const value = faker.datatype.number;

    beforeEach(() => {
      stack = new Stack(1);
      expect(stack.isEmpty()).toEqual(true);
    });

    it("should add a new element and get it back", () => {
      stack.push(value);
      expect(stack.pop()).toEqual(value);
      expect(stack.isEmpty()).toEqual(true);
    });

    it("should add a new element and look at it", () => {
      stack.push(value);
      expect(stack.peek()).toEqual(value);
      expect(stack.isEmpty()).toEqual(false);
    });
  });

  describe("when a stack of size one is full", () => {
    const value = faker.datatype.number;

    beforeEach(() => {
      stack = new Stack(1);
      stack.push(value);
      expect(stack.isFull()).toEqual(true);
    });

    it("remove the element and make the stack empty", () => {
      expect(stack.pop()).toEqual(value);
      expect(stack.isFull()).toEqual(false);
      expect(stack.isEmpty()).toEqual(true);
    });

    it("look at the next element and does not change the stack", () => {
      expect(stack.peek()).toEqual(value);
      expect(stack.isEmpty()).toEqual(false);
      expect(stack.isFull()).toEqual(true);
    });
  });

  describe("when a stack has a size higher than 1", () => {
    const value = faker.datatype.number;

    beforeEach(() => {
      stack = new Stack(2);
      stack.push(42);
      stack.push(value);
      expect(stack.isEmpty()).toEqual(false);
      expect(stack.isFull()).toEqual(true);
    });

    it("remove an element does not make the stack empty", () => {
      expect(stack.pop()).toEqual(value);
      expect(stack.isFull()).toEqual(false);
      expect(stack.isEmpty()).toEqual(false);
    });

    it("Removing all elements make the stack empty", () => {
        expect(stack.pop()).toEqual(value);
        expect(stack.pop()).toEqual(42);
        expect(stack.pop()).toEqual(null);
        expect(stack.isFull()).toEqual(false);
        expect(stack.isEmpty()).toEqual(true);
    });
  });
});
