let Fizz = 3 *i;
let Buzz = 5 *i;
let FizzNumber = 3;
let BuzzNumber = 5;

for(var i=1; i<=100; i++){
  
  if (i % 3 === 0 && i % 5 === 0){
    let FizzBuzz =(Fizz * Buzz)/(FizzNumber*BuzzNumber*i);
    console.log('FizzBuzz',FizzBuzz);
  }

  else if (i % 3 === 0){
      console.log('Fizz',Fizz/FizzNumber);
  }

  else if (i % 5 === 0){
      console.log('Buzz',Buzz/BuzzNumber);
  }
}