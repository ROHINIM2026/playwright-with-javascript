const { test, expect } = require('@playwright/test');

test('Reverse a String', async () => {

    // Function to reverse string
    function reverseString(str) {
        return str.split('').reverse().join('');
    }

    // Calling function
    let result = reverseString("Rohini");

    // Print output
    console.log(result);

    // Assertion
    expect(result).toBe("inihoR");

});