let data = [12, 45, 49, 5, 47, 42, 45];
let el = 45;
let index;
for (let i = 0; i < data.length - 1; i++) {
  if (data[i] === el) {
    index = i;
    break;
  }
}
console.log(index);
// console.log(data.indexOf(45));
// delete element
// data.splice(3, 1);
// console.log(data);
