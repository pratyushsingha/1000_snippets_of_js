// second largest number
// brutforce
const secondLargestNumber = (arr) => {
  // arr.sort((a, b) => a - b);

  // return arr[arr.length - 2];

  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

console.log(secondLargestNumber([12, 35, 1, 10, 34]));

// rotate array by k

const rotateArrbyK = (arr, k) => {
  let size = arr.length;

  if (size > k) {
    k = k % size;
  }

  const rotated = arr.splice(size - k, size);
  arr.unshift(...rotated);
  return arr;
};

console.log(rotateArrbyK([1, 2, 3, 4, 5, 6, 7], 3));

function reverse(nums, left, right) {
  while (left < right) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }
}

const rotateArrayBykopt = () => {
  let size = arr.length;

  if (size > k) {
    k = k % size;
  }

  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
};

// remove duplicate elements

const removeDubElemet = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1);
      i--;
    }
  }
  return arr.length;
};

console.log(removeDubElemet([1, 1, 2, 2, 2, 3, 3, 4, 5, 6, 7]));

const removeDubEleOpt = (arr) => {
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[i + 1];
    }
  }

  return i + 1;
};

console.log(removeDubEleOpt([1, 1, 2, 2, 2, 3, 3, 4, 5, 6, 7]));

const a = (arr) => {
  console.log(arr.length);
};

a([1, 2, 3, 0, 0, 0]);

const secondLargestElemet = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
};

console.log(secondLargestElemet([1, 2, 3, 0, 0, 0]));
