  // const Fizz = 3 *i;
  // const Buzz = 5 *i;

  //****for文の中にiがあるのに初期値として用意しないといけないと思ってました****/
  // const FizzNumber = 3;
  // const BuzzNumber = 5;
/********条件式でフィルタリングができていることに気づいていませんでした******/
  for(var i=1; i<=100; i++){
    
    if (i % 3 === 0 && i % 5 === 0){
      // let FizzBuzz =(Fizz * Buzz)/(FizzNumber*BuzzNumber*i);
      console.log('FizzBuzz',i);
    }

    else if (i % 3 === 0){
        console.log('Fizz',i);
    }

    else if (i % 5 === 0){
        console.log('Buzz',i);
    }

  }