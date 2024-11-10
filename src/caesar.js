
const ciphered = document.querySelector(`.cypherMsg`)
const uncypheredMsgTwo = document.querySelector(".uncypherd-msg-second-row")

// Example usage

// Caesar cipher function
//TODO shift let the user enter number .. 
// Function to encrypt the message
function encrypt(str , shift) {
    
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const shifted = shift % 26; // To handle shifts larger than 26
    let result = "";

    for (let char of str.toUpperCase()) {
        if (alphabet.includes(char)) {
            const originalIndex = alphabet.indexOf(char);
            const newIndex = (originalIndex + shifted) % 26;
            result += alphabet[newIndex];
        } else {
            result += char; // Preserve spaces and other characters
        }
    }
    ciphered.innerHTML = result ;
}

// Function to decrypt the message
function decrypt(str, shift) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const shifted = shift % 26; // To handle shifts larger than 26
    let result = "";

    for (let char of str.toUpperCase()) {
        if (alphabet.includes(char)) {
            const originalIndex = alphabet.indexOf(char);
            const newIndex = (originalIndex - shifted + 26) % 26;
            result += alphabet[newIndex];
        } else {
            result += char; // Preserve spaces and other characters
        }
    }
    uncypheredMsgTwo.innerHTML = result;
}


