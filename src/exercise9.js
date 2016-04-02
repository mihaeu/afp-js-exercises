"use strict";

/**
 * @param {string} input
 * @returns {string}
 */
let caesar = (input, amount) => {
    let output = '';
    for (const i in input) {
      let c = input[i];
      if (c.match(/[a-z]/i)) {
        let code = input.charCodeAt(i);

        // Uppercase letters
        if ((code >= 65) && (code <= 90)) output += String.fromCharCode(((code - 65 + amount) % 26) + 65);

        // Lowercase letters
        else if ((code >= 97) && (code <= 122)) output += String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }

    return output.toUpperCase();
};

module.exports.caesar = caesar;