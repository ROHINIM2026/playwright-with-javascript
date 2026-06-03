const { test, expect } = require('@playwright/test');
test('Remove Duplicate Elements', async () => {

    let numbers = [1, 2, 2, 3, 4, 4];

    let unique = [...new Set(numbers)];

    console.log(unique);

    expect(unique).toEqual([1, 2, 3, 4]);
});
