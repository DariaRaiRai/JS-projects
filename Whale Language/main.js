const input = "Hi, Human";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

for (i = 0; i < input.length; i++) {
  // console.log(i);
  for (j = 0; j < vowels.length; j++) {
    // console.log('j is ' + j)
    if (input[i] === input[j]) {
      resultArray.push(vowels[j]);
      // console.log(resultArray)
    }
    if (input[i] === "e" || input[i] === "u") {
      resultArray.push(vowels[i]);
    }
  }
}

console.log(resultArray.join("").toUpperCase());
