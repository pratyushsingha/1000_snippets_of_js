

function shout(input) {
  return `${input}${input}`
}

console.log(shout('Run'))


let x = 'Tic';
x = x + 'Tac';
x = x + x;
console.log(x)


function length(input) {
  return input.length
}
console.log(length('sun'))


function toCase(input) {
  return `${input.toLocaleLowerCase()}-${input.toUpperCase()}`
}
console.log(toCase('Mthatha'))


function shortcut(input1, input2) {
  return `${input1.charAt(0)}${input2.charAt()}`
}

console.log(shortcut('Amnesty', 'International'))

function firstChar(input) {
  return input.trim().charAt(0);
}
console.log(firstChar(' Rosa Parks '))

function indexOfIgnoreCase(s1, s2) {
  let s1Lower = s1.toLowerCase();
  let s2Lower = s2.toLowerCase();
  return s1Lower.indexOf(s2Lower);
}
console.log(indexOfIgnoreCase('bit', 'IT'))

function firstWord(input) {
  return input.substr(0, input.indexOf(' '))
}
console.log(firstWord('see and stop'))

function normalize(date) {
  let newDate = date.replace('-', '/');
  newDate = newDate.replace('-', '/');
  return newDate;
}

console.log(normalize('20-05-2017'))

function add(x1, x2) {
  return x1 + x2
}

function toFahrenheit(input) {
  let f = (9 / 5) * input + 32;
  return f
}
console.log(toFahrenheit(0))

function onesDigit(input) {
  let result = input % 10;
  return result
}
console.log(onesDigit(1234))


function mean(x1, x2) {
  return (x1 + x2) / 2;
}
console.log(mean(2, 3))

function hypotenuse(a, b) {
  let result = Math.pow(a, 2) + Math.pow(b, 2)
  return Math.sqrt(result)

}
console.log(hypotenuse(3, 4))

function area(r) {
  return Math.PI * Math.pow(r, 2)
}
console.log(area(5))

function round100(input) {
  return Math.round(input / 100) * 100
}
console.log(round100(1749))

function dice() {
  return Math.floor(Math.random() * 6 + 1)
}
console.log(dice())

function add(input) {
  let res = input.split("+")
  console.log(res)
  res = parseInt(res[0]) + parseInt(res[1])
  return res
}
console.log(add('102+17'))


function nand(x1, x2) {
  if (x1 && x2 === true) {
    return false
  }
  else {
    return true
  }
}
console.log(nand(true, true))

function nor(x1, x2) {
  if (!x1 && !x2) {
    return true;
  } else {
    return false;
  }
}

console.log(nor(false, false));
console.log(nor(true, false));
console.log(nor(false, true));
console.log(nor(true, true));

function xor(a, b) {
  return a && !b || !a && b;
}
console.log(xor(true, true));

function equals(x1, x2) {
  return x1 === x2
}
console.log(equals(1, 1))

function equals(x1, x2, x3) {
  return x1 === x2 && x2 === x3
}
console.log(equals(1, 1, 1))

function isEven(input) {
  return input % 2 === 0
}

console.log(isEven(3))

function unequal(x1, x2, x3) {
  return x1 !== x2 && x2 !== x3 && x3 !== x1
}

function isThreeDigit(input) {
  return input >= 100 && input < 1000
}
console.log(isThreeDigit(1000))

function equals(x1, x2) {
  if (x1 === x2) {
    return "EQUAL"
  }
  else {
    return "UNEQUAL"
  }
}
console.log(equals(1, 2))

function repdigit(input) {
  // Convert the input to a string if it's not already
  const strInput = input.toString();

  // Check if both characters in the string are the same
  if (strInput[0] === strInput[1]) {
    return 'Repdigit!';
  } else {
    return 'No Repdigit!';
  }
}

console.log(repdigit(22)); // Output: Repdigit!
console.log(repdigit(23)); // Output: No Repdigit!

function addWithSurcharge(x1, x2) {
  let res1 = x1 <= 10 ? x1 + 1 : x1 + 2
  let res2 = x2 <= 10 ? x2 + 1 : x2 + 2
  return res1 + res2
}
console.log(addWithSurcharge(10, 10))

function addWithSurcharge(x1, x2) {
  let superCharge1 = 0
  let superCharge2 = 0
  let superCharge3 = 0
  if (x1 <= 10) {
    superCharge1 = superCharge1 + 1
  }
  else if (x1 > 10 && x1 <= 20) {
    superCharge1 = superCharge1 + 2
  }
  else {
    superCharge1 = superCharge1 + 3
  }

  if (x2 <= 10) {
    superCharge2 = superCharge2 + 1
  }
  else if (x2 > 10 && x2 <= 20) {
    superCharge2 = superCharge2 + 2
  }
  else {
    superCharge3 = superCharge3 + 3
  }
  return x1 + x2 + superCharge1 + superCharge2 + superCharge3;
}

console.log(addWithSurcharge(10, 30))




function isArray(input1, input2) {
  return [input1, input2]
}
console.log(isArray(1, 2))


function getFirstElement(input) {
  return input[0]
}
console.log(getFirstElement([1, 2, 3]))

function setFirstElement(input, value) {
  let newArr = input.unshift(value)
  return input
}
console.log(setFirstElement([1, 2, 3], 0))

function getLastElement(input) {
  return input[input.length - 1];
}
console.log(getLastElement([1, 2, 3]))

function sort(input) {
  let sortedArr = [...input].sort();

  return sortedArr;
}

console.log(sort([2, 3, 1]))

function rotate(input) {
  let first = input.shift();
  let push = input.push(first);
  return input;
}
console.log(rotate([1, 2, 3]))

function halve(arr) {
  let halfLength = Math.ceil(arr.length / 2);
  return arr.slice(0, halfLength);
}
console.log(halve([1, 2, 3, 4, 5]))

function list(arr) {
  let copy = arr.slice(0, arr.length - 1);
  let lElm = arr[arr.length - 1];
  if (arr.length > 2) {
    return copy.join(', ') + " and " + lElm
  } else if (arr.length === 2) {
    return arr.join(' and ')
  } else if (arr.length === 1) {
    return arr[0]
  }
  else if (arr.length === 0) {
    return ''
  }
}

console.log(list([]));



