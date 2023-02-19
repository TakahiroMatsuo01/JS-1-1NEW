
for(let i=1; i<=100; i++){
    let Fizz = 3 *i;
    let Buzz = 5 *i;
    let FizzBuzz =(Fizz * Buzz)/(3*5*i);
    if (i % 3 == 0 && i % 5 == 0)
    console.log("Fizz,Buzz",FizzBuzz);
  else if (i % 3 == 0)
    console.log("Fizz",Fizz/3);
  else if (i % 5 == 0)
    console.log("Buzz",Buzz/5);
}