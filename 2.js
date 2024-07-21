// // Write a JavaScript function to check whether an `input` is an array or not.
// function isArr(input) {
//     return Array.isArray(input)
// }

// console.log(isArr("hitesh"))
// // Write a JavaScript function to clone an array.

// let array_Clone = function (arra1) {
//     return arra1.slice(1);
// };
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// const first = (arr, n) => {
//     if (n > 0) {
//         return arr.slice(0, n);
//     }
//     if (n < 0) {
//         return [];
//     }
//     if (n === undefined) {
//         return arr[0];
//     }
// }
// console.log(first([7, 9, 0, -2], 1));

// Write a simple JavaScript program to join all elements of the following array into a string.
// const myColor = ["Red", "Green", "White", "Black"];

// console.log(myColor.join(" "))
// console.log(myColor.join("+"))

let arr = ["blue","yellow"];


const dash = (arr) => {
    const resp ={...arr.join("-")}
    return resp
}

console.log(dash(["red"]))
