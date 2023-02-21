
for(var i=1; i<=100; i++){
  if (i % 3 === 0 && i % 5 === 0){
  var FizzBuzz =(Fizz * Buzz)/(3*5*i);
  console.log('Fizz,Buzz',FizzBuzz);
  }
else if (i % 3 === 0){
var Fizz = 3 *i;
  console.log('Fizz',Fizz/3);
}
else if (i % 5 === 0){
var Buzz = 5 *i;
  conssole.log('Buzz',Buzz/5);
}
}