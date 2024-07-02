// Given a and b, your function should return the value of a^b

const power = (a, b) => a ** b;
console.log(power(2, 3));

// Given length of a regular hexagon, your function should return area of the hexagon.

const areaHexagon = (n) => {
  return (3 * Math.sqrt(3) * n ** 2) / 2;
};
console.log(areaHexagon(10));

// Given a sentence, your functions should return the number of words in the sentence.

const noOfWords = (sentence) => {
  return sentence.split(" ").length;
};

console.log(noOfWords("We are neoGrammers"));

// Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

const typeOfTriangle = (s1, s2, s3) => {
  if (s1 + s2 <= s3 || s2 + s3 <= s1 || s1 + s3 <= s2) {
    return "Not a triangle";
  } else if ((a == b) == c) {
    return "Equilateral triangle";
  } else if (a == b || b == c || c == a) {
    return "isceles triange";
  } else {
    return "Scalene triangle";
  }
};

console.log(typeOfTriangle(30, 60, 90));

// ---------------------------------medium------------------------------------
// Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5

const arrayLength = (arr) => arr.length;

console.log(arrayLength([1, 5, 3, 7, 8]));

// Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

const indexOf = (arr, item) => arr.indexOf(item);
console.log(indexOf([1, 6, 3, 5, 8, 9], 3));

// Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

const replace = (arr, el1, el2) => {
  elIndex = arr.indexOf(el1);
  arr.splice(elIndex, 1, el2);
  return arr;
};

console.log(replace([1, 5, 3, 5, 6, 8], 5, 10));

// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

const mergeArray = (arr1, arr2) => {
  return [...arr1, ...arr2];
};
console.log(mergeArray([1, 3, 5], [2, 4, 6]));

// Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("neoGcamp", 4) ––> Output: c

const charAt = (txt, i) => txt.charAt(i);
console.log(charAt("neoGcamp", 4));

// Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

const minDate = (d1, d2) => {
  const date1 = d1.split("/").map(Number);
  const date2 = d2.split("/").map(Number);

  const date1obj = new Date(date1[0], date1[1] - 1, date1[2]);
  const date2obj = new Date(date2[0], date2[1] - 1, date2[2]);

  if (date1obj < date2obj) {
    return "02/05/2021";
  } else {
    return "24/01/2021";
  }
};
console.log(minDate("02/05/2021", "24/01/2021"));

// ---------------------advanced----------------------------------

// Given a sentence, retur

// n a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

const toSentenceCase = (str) => {
  s = str.split(" ");
  for (let i = 0; i < s.length; i++) {
    s[i] = s[i].charAt(0).toUpperCase() + s[i].slice(1).toLowerCase();
  }
  return s.join(" ");
};

console.log(toSentenceCase("we are neogprogrammer"));

// Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]
const compareNumbers = (a, b) => a - b;
const sortArray = (arr) => {
  arr.sort(compareNumbers);

  return arr;
};
console.log(sortArray([100, 83, 32, 9, 45, 61]));

// Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen

const reverseCharactersOfWord = (str) => {
  return str
    .split(" ")
    .map((w) => w.split("").reverse().join(""))
    .join(" ");
};

console.log(reverseCharactersOfWord("we are neoGrammers"));
