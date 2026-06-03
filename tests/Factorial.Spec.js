const { test, expect } = require('@playwright/test');

test('Factorial Program', async () => {

    function factorial(num) {

        let result = 1;

        for (let i = 1; i <= num; i++) {

            result = result * i;
        }

        return result;
    }

    let result = factorial(5);

    console.log(result);

    expect(result).toBe(120);
});
