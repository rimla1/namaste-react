import { sum } from '../sum'

test("Function sum should return sum of a and b", () => {
    const result = sum(3, 4)

    expect(result).toBe(7)
})

