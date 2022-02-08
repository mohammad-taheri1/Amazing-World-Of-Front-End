const { expect } = require("@jest/globals");
const gte = require("../src/code")

test("gte - should return true if a is greater than b", () => {
    const result = gte(10, 5);
    expect(result).toBe(true);
})