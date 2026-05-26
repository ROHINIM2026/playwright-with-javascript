// Importing test and expect functions from Playwright
const { test, expect } = require('@playwright/test');

// Creating a test block with the name 'Check Palindrome'
test('Check Palindrome', async () => {

    // Function to check whether a string is palindrome or not
    function isPalindrome(str) {

        // Reverse the given string
        let reversed = str.split('').reverse().join('');

        // Compare original string with reversed string
        if (str === reversed) {

            // Return if both are equal
            return "Palindrome";

        } else {

            // Return if both are not equal
            return "Not a Palindrome";
        }
    }

    // Calling the function and storing result
    let result = isPalindrome("madam");

    // Printing result in terminal
    console.log(result);

    // Assertion: Verify expected output
    expect(result).toBe("Palindrome");

});