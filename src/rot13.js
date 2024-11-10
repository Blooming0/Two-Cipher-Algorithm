const ciphered = document.querySelector(`.cypherMsg`)
const uncypheredMsgTwo = document.querySelector(".uncypherd-msg-second-row")

// Function to apply ROT13 encryption
function rot13Encrypt(str) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    for (let char of str.toUpperCase()) {
        if (alphabet.includes(char)) {
            const originalIndex = alphabet.indexOf(char);
            const newIndex = (originalIndex + 13) % 26;
            result += alphabet[newIndex];
        } else {
            result += char; // Preserve spaces and other characters
        }
    }
    ciphered.innerHTML=result;
}

// Function to apply ROT13 decryption
function rot13Decrypt(str) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    for (let char of str.toUpperCase()) {
        if (alphabet.includes(char)) {
            const originalIndex = alphabet.indexOf(char);
            const newIndex = (originalIndex - 13 + 26) % 26;
            result += alphabet[newIndex];
        } else {
            result += char; // Preserve spaces and other characters
        }
    }
    uncypheredMsgTwo.innerHTML= result;
}