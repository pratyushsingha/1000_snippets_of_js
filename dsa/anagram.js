// check the length
//string 'hello'
function isAnnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  let counter = {};
  for (const letter of string1) {
    counter[letter] = (counter[letter] || 0) + 1;
    // console.log(counter[letter]);
  }
  for (const item of string2) {
    if (!counter[item]) {
      return false;
    }
    counter[item] -= 1;
  }
  return true;
}

const check=isAnnagram("hello", "llheo");
console.log(check)
