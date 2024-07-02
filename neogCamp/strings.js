// Write a program that converts the string into uppercase

const StringUpperCase = (str) => str.toUpperCase();

// Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood

const twoWord = (w1, w2) => {
  return `${w2}${w1} `;
};
console.log(twoWord("good", "moring"));
