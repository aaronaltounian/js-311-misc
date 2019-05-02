/*
#3 Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1
s = “seeeat"
return 0.

s = "lollipop",
return 4.
*/
//
function findNonRepeating(theWord){

  let count = 0;
  for( let i = 0; i < theWord.length; i++ ) {
    count = 0;
    for( let j = 1; j < theWord.length; j++ ) {

      if( i != j && theWord[i] === theWord[j] ) {
        count++;
      }

    }

    if( count === 0 ) {
      return i;
    }

  }
}
console.log(findNonRepeating("lollipop"));
console.log(findNonRepeating("seeeeat"));
