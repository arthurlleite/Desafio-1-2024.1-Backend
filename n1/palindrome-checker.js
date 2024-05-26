function palindrome(str) {
  str = str.toLowerCase();
  str = str.replaceAll(/[^\d^\w]|\s|_/g, '');
  for (let i = 0; i < str.length/2; i++) {
    if (str[i] !== str[str.length - 1 - i])
      return false;
  }
  return true;
}

palindrome("eye");