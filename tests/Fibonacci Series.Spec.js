const { test, expect } = require('@playwright/test');
test('Fibonacci Series', async () => {

    let n1 = 0;
    let n2 = 1;

    let series = [n1, n2];

    for (let i = 2; i < 10; i++) {

        let next = n1 + n2;

        series.push(next);

        n1 = n2;
        n2 = next;
    }

    console.log(series);

    expect(series).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});
