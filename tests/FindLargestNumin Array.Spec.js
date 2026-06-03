/*const { test } = require('@playwright/test');

test('Find Largest Number in Array', async ({ page }) => {

    const numbers = [3, 7, 2, 9, 5];
    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {

        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    console.log(largest);
    await page.waitForTimeout(5000);

});*/

const { test, expect } = require('@playwright/test');
test('Find Largest Number', async () => {

    let numbers = [10, 45, 78, 23];

    let largest = Math.max(...numbers);
    // ...numbers ...numbers This is called spread operator It converts array into individual values 10, 45, 78, 23
    // Math.max() is a built-in function in JavaScript that returns the largest of zero or more numbers. 
    // By using the spread operator, we can pass each element of the numbers array as an individual argument to Math.max(),
    //  allowing us to find the largest number in the array efficiently.
    console.log(largest);

    expect(largest).toBe(78);
});
