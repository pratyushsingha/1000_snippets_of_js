

function shout(input){
    return `${input}${input}`
  }
  
  console.log(shout('Run'))
  
  
  let x = 'Tic';
  x = x + 'Tac';
  x = x + x;
  console.log(x)
  
  
  function length(input){
    return input.length
  }
  console.log(length('sun'))
  
  
  function toCase(input){
    return `${input.toLocaleLowerCase()}-${input.toUpperCase()}`
  }
  console.log(toCase('Mthatha'))
  
  
  function shortcut(input1,input2){
    return `${input1.charAt(0)}${input2.charAt()}`
  }
  
  console.log(shortcut('Amnesty', 'International'))
  
  function firstChar(input){
  return input.trim().charAt(0);
  }
  console.log(firstChar(' Rosa Parks '))
  
  function indexOfIgnoreCase(s1, s2) {
    let s1Lower = s1.toLowerCase();
    let s2Lower = s2.toLowerCase();
    return s1Lower.indexOf(s2Lower);
  }
  console.log(indexOfIgnoreCase('bit','IT'))
  
  function firstWord(input){
    return input.substr(0,input.indexOf(' '))
  }
  console.log(firstWord('see and stop'))
  
  function normalize(date) {
    let newDate = date.replace('-','/');
    newDate = newDate.replace('-','/');
    return newDate;
  }
  
  console.log(normalize('20-05-2017'))
  
  function add(x1,x2){
    return x1+x2
  }
  
  function toFahrenheit(input){
  let  f=(9/5)*input+32;
    return f
  }
  console.log(toFahrenheit(0))