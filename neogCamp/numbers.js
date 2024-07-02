// Write a program to input 2 numbers and display the sum of the numbers to the console.

// Input Number 1: 20
// Input Number 2: 40
// Sum : 60

const sum = (a, b) => a + b;
console.log(sum(20, 40));

// Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

// Input: P=100, R=6%, T=2
// Output: 12

const sInterest = (p, r, t) => (p * t * r) / 100;
console.log(sInterest(100, 6, 2));

// Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.

// Formula : 0.5 * m * v * v

const kEnergy = (m, v) => 0.5 * m * v ** 2;
console.log(kEnergy(20, 30));

// Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: C = (F - 32) * 5/9 'F' and 'C' are the temperatures on the Fahrenheit scale and Celsius scale respectively.

// Input: 56
// Output: 13.33333

const FTC = (f) => ((f - 32) * 5) / 9;
console.log(FTC(56));

// Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.

// Formula :

// Area: a*a

// Perimeter: 4*a

// Surface Area: 6*a*a

// Volume: a*a*a

const squareAndCube = (a) => {
  return `area: ${a * a},  Perimeter: ${4 * a},Surface Area: ${
    6 * a * a
  }, volume: ${a * a * a}`;
};

console.log(squareAndCube(2));

// Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

// Input: CP = 1500, SP = 2000
// Output: 500 Profit

// Input: CP = 3125, SP = 1125
// Output: 2000 Loss

const csp = (cp, sp) => {
  net = sp - cp;
  if (cp > sp) {
    return `${Math.abs(net)} loss`;
  } else {
    return `${net} profit`;
  }
};

console.log(csp(1500, 2000));

// Write a program to calculate sum of N natural digits, as input by the users?

// Enter a positive integer: 100
// Sum = 5050

const sumOfn = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

console.log(sumOfn(100));

// Write a Program to Print N Odd Number in Descending Order.

// Input : 4
// Output : 7
// 5
// 3
// 1

const oddDsc = (n) => {
  let oddArr = [];
  for (let i = 0; i < n; i++) {
    oddArr.push(2 * i + 1);
  }
  return oddArr.reverse();
};

console.log(oddDsc(4));

// Write a JavaScript program to compute the sum of all digits that occur in a given string.

// Input: 1234
// Output: 1+2+3+4 = 10

const sumOfDigits = (str) => {
  s = str.split("").map(Number);
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    sum += s[i];
  }
  return sum;
};
console.log(sumOfDigits("1234"));

// Write a JavaScript program that reverses a number.

// Example:

// Input:  32243;
// Output:  34223

const reverseNumber = (n) => {
  n.toString().split("").reverse().join("");
  return Number(n);
};
console.log(reverseNumber(32243));

// TODO: incomplete

// Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.

// Example-

// Enter a Number : 1234
// Enter the Number of Rotations : 2
// Output : 3412

// const cyclicRotate = (n) => {
//   n.toString().split();

// };

// Write a Program to convert Decimal to Binary.

// Enter the number to convert: 5
// Binary of Given Number is=101

const DecimalToBinary = (n) => {
  n.toString().split("");
  let binary;
  for (let i = n.length; i >= 0; i++) {
    binary += (n[i] * 2) ^ i;
  }
  return binary;
};

console.log(DecimalToBinary(5))