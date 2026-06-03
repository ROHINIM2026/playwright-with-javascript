const { test, expect } = require('@playwright/test');

// Create a Playwright test block
test('Count Vowels', async () => {

    // Function to count vowels in a string
    function countVowels(str) {

        // Variable to store vowel count
        let count = 0;

        // String containing all vowels
        let vowels = "aeiou";

        // Convert input string to lowercase
        // and loop through each character
        for (let char of str.toLowerCase()) {

            // Check whether current character
            // exists in vowels string
            if (vowels.includes(char)) {

                // Increase count if vowel found
                count++;
            }
        }

        // Return total vowel count
        return count;
    }

    // Call function with input string
    let result = countVowels("Playwright");

    // Print result in console
    console.log(result);

    // Validate expected output using Playwright assertion
    expect(result).toBe(2);
});