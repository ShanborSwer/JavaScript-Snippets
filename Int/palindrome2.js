function palindrome(string){
    var arrayValues = string.split('');

    var reverseArrayValues = arrayValues.reverse();

    var reverseString = reverseArrayValues.join('');

    if(string == reverseString){
        console.log("It is a Palindrome")
    }
    else{
        console.log("It is not a Palindrome");
    }
}

let string = "madaa";

palindrome(string);