// ----------------------------easy-----------------------------------

// Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

const add = (num1, num2, num3, num4, num5) => num1 + num2 + num3 + num4 + num5;

const a = add(5, 13, 7, 21, 48);
console.log(a);

// Write a program to take a number input from user and determine whether the number is odd or even.

const oddEven = (n) => (n % 2 === 0 ? "even" : "odd");

const number = oddEven(3);
console.log(number);

// Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

const minMax = (n1, n2) => {
  if (n1 > n2) {
    return `${n1} is maximum & ${n2} is minimum`;
  } else {
    return `${n2} is maximum & ${n1} is minimum`;
  }
};

const m = minMax(2, 3);
console.log(m);

// Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

const maxThree = (n1, n2, n3) => {
  if (n1 > n2 && n1 > n3) {
    return `${n1} maximum`;
  } else if (n2 > n1 && n2 > n3) {
    return `${n2} maximum`;
  } else if (n3 > n2 && n3 > n1) {
    return `${n3} maximum`;
  }
};

console.log(maxThree(2, 4, 5));

// Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

const minThree = (n1, n2, n3) => {
  if (n1 < n2 && n1 < n3) {
    return `${n1} minimum`;
  } else if (n2 < n1 && n2 < n3) {
    return `${n2} minimum`;
  } else if (n3 < n2 && n3 < n1) {
    return `${n3} minimum`;
  }
};

console.log(minThree(2, 3, 5));

// Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const months31 = [
  "january",
  "march",
  "may",
  "july",
  "august",
  "october",
  "december",
];
const m31OrNot = (month) => {
  return months31.includes(month) ? true : false;
};
console.log(m31OrNot("january"));

// ----------------------------intermediate-----------------------------------

// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

const fizzBuzz = () => {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else {
      arr.push(i);
    }
  }
  return arr;
};

console.log(fizzBuzz());

// Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

const starPattern = () => {
  let star = "";
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    star += "\n";
  }
  return star;
};

console.log(starPattern());

// Write a program to take a number input from user and print multiplication table 12 times for that number.

const mulTable = (n) => {
  for (let i = 1; i <= 12; i++) {
    console.log(n * i);
  }
};
mulTable(5);

// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

const fibbunacciSeries = function (n) {
  const arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
};

console.log(fibbunacciSeries(5));

// Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

const factorial = (n) => {
  let ans = 1;
  for (let i = 1; i <= n; i++) {
    ans = ans * i;
  }
  return ans;
};
console.log(factorial(5));

// Write a Program to take a number input from user and find if the number is Prime or not.

const primeOrNot = (n) => {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

console.log(primeOrNot(8));

// Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

const weekEndOrNot = (day) => {
  let weekEnd = ["saturday", "sunday"];
  let weekDay = ["monday", "tuesday", "thirsday", "wednessday", "friday"];

  if (weekEnd.includes(day)) return "weekEnd";
  else if (weekDay.includes(day)) return "weekday";
  else "invalid input";
};

console.log(weekEndOrNot("monday"));
