const { test, expect } = require('@playwright/test');
test('Check Prime Number', async () => {

    function isPrime(num) {

        if (num <= 1) {
            return "Not Prime";
        }

        for (let i = 2; i < num; i++) {

            if (num % i === 0) {
                return "Not Prime";
            }
        }

        return "Prime";
    }

    let result = isPrime(7);

    console.log(result);

    expect(result).toBe("Prime");
});
