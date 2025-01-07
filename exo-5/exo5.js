// you can write js here

console.log('exo-5');

let input = 'Turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
  }
  
  for (let i = 0; i < input.length; i++) {
    if (vowels.indexOf(input[i].toLowerCase()) !== -1) {
      resultArray.push(input[i]);
    }
  }

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (input[i].toLowerCase() === vowels[j]) {
        resultArray.push(input[i]);
      }
    }
  }
  
  for (let i = 0; i < input.length; i++) {
    if (vowels.indexOf(input[i].toLowerCase()) !== -1) {
      resultArray.push(input[i]);
    }
  }
  
  let whaleLanguage = resultArray.join('').toUpperCase();
console.log(whaleLanguage);
