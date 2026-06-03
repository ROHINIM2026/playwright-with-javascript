const { test, expect } = require('@playwright/test');

test('Swap Two Numbers', async () => {

    let a = 10;
    let b = 20;

    let temp = a;
    a = b;
    b = temp;

    console.log(a);
    console.log(b);

    expect(a).toBe(20);
    expect(b).toBe(10);
});
