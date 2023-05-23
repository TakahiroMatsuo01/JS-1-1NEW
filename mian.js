 
  for(var i=1; i<=100; i++){

    if (i % 3 === 0 && i % 5 === 0){
=======
    /**for文のブロックスコープ開始**/
    if (i % 3 === 0 && i % 5 === 0){
    /**if文のブロックスコープ開始**/

      console.log('FizzBuzz',i);
    /**for文のブロックスコープ終了**/
    }

    else if (i % 3 === 0){
    /**else if文のブロックスコープ開始**/
        console.log('Fizz',i);
    /**else if文のブロックスコープ終了**/
    }

    else if (i % 5 === 0){
    /**else if文のブロックスコープ開始**/
        console.log('Buzz',i);
    /**else if文のブロックスコープ終了**/
    }

=======
  /**for文のブロックスコープ終了**/
  }
