let originalString = "hello";

let reversedString = Array.from(originalString).reverse().join('');

console.log(reversedString)

// In this approach we use the Array.from method to create an array from the characters of the original string

// We then use the reverse() method to reverse to reverse the order of the elements in the array

// Finally we use the join() method to convert the array back into a string, with the characters in reversed order, and store 
// it in reversedString variable

// Then we log the reversed string