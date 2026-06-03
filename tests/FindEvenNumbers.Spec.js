const { test, expect } = require('@playwright/test');

test('Find Even Numbers', async () => {

    let numbers = [1, 2, 3, 4, 5, 6];

    let evenNumbers = numbers.filter(num => num % 2 === 0);

    console.log(evenNumbers);

    expect(evenNumbers).toEqual([2, 4, 6]);
});
