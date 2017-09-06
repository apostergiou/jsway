let word = prompt("Enter the word:").toLowerCase();
function checkPalindrome(str) {
    return str == str.split('').reverse().join('');
}

console.log(checkPalindrome(word));
