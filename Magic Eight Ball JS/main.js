let userName = 'Jane';
if(userName === 'Jane'){
  console.log('Hello, Jane!');
}else {
  console.log('Hello!');
}
// userName = userName || 'Stranger'; // if the userName did not have a value it will get assigned ti the string 'Stranger'
// userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);

let userQuestion = `When will ${userName} become a President?`;
console.log(`Your question is ${userQuestion}`);


let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber) {
  case 0:
  eightBall = 'It will happen for sure';
  break;
  case 1:
  eightBall = 'It is certain';
  break;
  case 2:
  eightBall = 'It is decidedly so';
  break;
  case 3:
  eightBall = 'Rely hazy try again';
  break;
  case 4:
  eightBall = 'Cannot predict now';
  break;
  case 5:
  eightBall = 'Do not count on it';
  break;
  case 6:
  eightBall = 'My source say no';
  break;
  case 7:
  eightBall = 'Outlook not so good';
  break;
  case 8:
  eightBall = 'Signs point to yes';
  break;
}

console.log(`The Magic Eight Ball says: ${eightBall}`);