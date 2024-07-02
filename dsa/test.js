// var expect = function (val) {
//   let v = val;
//   return {
//     toBe(val) {
//       if (v === val) {
//         return true;
//       } else {
//         throw "Not Equal";
//       }
//     },
//     notTobe(val) {
//       if (v !== val) {
//         return true;
//       } else {
//         throw "Equal";
//       }
//     },
//   };
// };

// expect(5).toBe(5);

// var filter = function (arr, fn) {
//   let filteredArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i], i) == true) {
//       filteredArr.push(arr[i]);
//     }
//   }
//   return filteredArr;
// };

// const f = function plusOne(n) {
//   return n + 1;
// }[(-2, -1, 0, 1, 2)];
// console.log(f);

var once = function (fn) {
  return function (...args) {
    let isFuncExecuted = false;
    // while (!isFuncExecuted) {
    //     fn(...args)
    //     isFuncExecuted = true;
    //     break;

    // }
    // return fn;
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // returns undefined without calling fn
