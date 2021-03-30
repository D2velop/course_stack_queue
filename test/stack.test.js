import Stack from "../stack";

describe("Stack", () => {
  const stackSize = 10;

  let stack;

  describe("when the stack is empty", () => {
    beforeEach(() => {
      stack = new Stack(stackSize);
    });

    it("should add an element into the stack", () => {
      expect(stack.push(10)).toBe(true);
    });

    it("should remove an element from the stack", () => {
      expect(stack.pop()).toEqual(null);
    });

    it("should look at the first element of the stack", () => {
      expect(stack.peek()).toEqual(null);
    });
  });

  describe("when the stack is not empty", () => {
    beforeEach(() => {
      stack = new Stack(stackSize);
      stack.push(42);
    });

    it("should add an element into the stack", () => {
      expect(stack.push(10)).toBe(true);
    });

    it("should remove an element from the stack", () => {
      expect(stack.pop()).toEqual(42);
    });

    it("should look at the first element of the stack", () => {
      expect(stack.peek()).toEqual(42);
    });
  });

  describe("isFull", () => {
    beforeEach(() => {
      stack = new Stack(1);
    });

    describe("when the stack is full", () => {
      beforeEach(() => {
        stack.push(1);
      });

      it("should return true", () => {
        expect(stack.isFull()).toBe(true);
      });
    });

    describe("when the stack is not full", () => {
      it("should return false", () => {
        expect(stack.isFull()).toBe(false);
      });
    });
  });

  describe("isEmpty", () => {
    beforeEach(() => {
      stack = new Stack(1);
    });

    describe("when the stack is empty", () => {
      it("should return true", () => {
        expect(stack.isEmpty()).toBe(true);
      });
    });

    describe("when the stack is not empty", () => {
      beforeEach(() => {
        stack.push(1);
      });
      it("should return false", () => {
        expect(stack.isEmpty()).toBe(false);
      });
    });
  });
});
