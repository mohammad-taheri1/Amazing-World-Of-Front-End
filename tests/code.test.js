const { expect } = require("@jest/globals");
const {gte, welcomeMessage, shoppingList} = require("../src/code")

describe("gte", () => {
    it("should return true if a is greater than b", () => {
        const result = gte(10, 5);
        expect(result).toBe(true);
    })
    
    it("should return true if a is less than b", () => {
        const result = gte(5, 10);
        expect(result).toBe(false);
    })
    
    it("should return true if a is equal to b", () => {
        const result = gte(5,5);
        expect(result).toBe(true);
    })
})

describe("welcomeMessage", () => {
    it("should return a welcome message containig the name", () => {
        const result = welcomeMessage('mamad');
        expect(result).toContain('mamad');
    })
})

describe("shoppingList", () => {
    it("should pass if the shopping List has milk on it", () => {
        const result = shoppingList();
        expect(result).toContain("milk");
    })
})