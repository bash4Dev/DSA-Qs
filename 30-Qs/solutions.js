// Q1 - Write a function that takes an array of integers and returns the maximum number.
const maxNumb = (array) => {
    console.log(`Integers: ${array}`);
    let maxVal = Math.max(...array);
    return console.log(`Max int: ${maxVal}`);
}
console.log(maxNumb([20, 13, 27, 6, 18]));

// Q2 - Write a function to reverse a string.
const reverseStr = (str) => str.split('').reverse().join('');
reverseStr('bashir');

// Q3 - Write a function that checks if a given string is a palindrome (ignoring spaces, punctuation, and capitalization).
const checkPalindrome = (input) => {
    const palRegex = input.toLowerCase().replace(/([\s])/gi, '');
    const reversed = input.split('').reverse().join('');
    return (palRegex === reversed) ? 'Is a palindrome' : 'Not a palindrome';
}
console.log(checkPalindrome('eye'));
console.log(checkPalindrome('nope'));