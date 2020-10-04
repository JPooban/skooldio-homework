'use strict';

/**
 * Encode
 *
 * @example ('school') => 's1c1h1o2l1'
 * @param {string} str - string to encode
 * @return {string}
 */
function encode (str) {
  let result = '';
  
  for (let i = 0 ; i < str.length ; i++) {
    let count = 1;
  
    // inner loop for counting duplicate string
    for (let j = i ; j < str.length ; j++) {
      // if next char is not the same then break the loop.
      if (str[i] !== str[j + 1]) break;

      // if true, will increase count and increase current index to next index for prevent visit the visited index.
      count += 1;
      i += 1;
    }

    result += `${str[i]}${count}`;
  }

  return result;
}

module.exports = encode;
