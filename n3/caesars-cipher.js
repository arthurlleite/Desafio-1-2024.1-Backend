function rot13(str) {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let output = '';
  for (let i = 0; i < str.length; i++) {
    if (letters.includes(str[i])) {
      let letterIndex = letters.indexOf(str[i]) - 13;
      if (letterIndex < 0) {
        letterIndex += letters.length
      }
      output += letters[letterIndex];
    } else {
      output += str[i];
    }
  }
  return output;
}

rot13("SERR PBQR PNZC");