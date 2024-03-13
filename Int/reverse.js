let originalString = "hello";
let reversedString = "";

for(let i= originalString.length-1;i>=0;i--){
    reversedString += originalString[i];
}
console.log(reversedString);

/* We start by defining the original string hello and an empty string to store the reversed string

We then use a for loop to iterate through thr characters of the original string starting from the last character
( index originalString.length - 1) down to the first character (index 0). This loop runs till i becomes less than 0;

Inside the loop, we access each character of the original string using the index i and concatenate it to the reversedString
variable using the += operator. This effectively builds the reversed string character by character.

Once the loops completes the reversedString contains the revrsed version of the original string.

finally we log thr reversedString using console.log */