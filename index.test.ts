import { test, expect, describe } from "vitest";
import { mainHandler } from ".";

describe('basic',() => {
  test('testing', () => {
    const testData = [
      {
        name: 'john',
        age: 12,
      },
      {
        name: 'Sunny',
        age: 17,
      },
      {
        name: 'leo',
        age: 32,
      },
    ];

    const result = mainHandler();
    expect(result).toStrictEqual(testData);
  })
})
