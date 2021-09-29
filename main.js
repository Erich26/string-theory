//xify 

function xify(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
      output = output + 'x';
    }
    return output;
  }
  
  console.log(xify('wub-a-lub-a-dub-dub'));
  console.log(xify('Erich'));

  //yellingChars
   console.log('yellingChars *************************');

  function yellingChars(str) {
    let output = '';
  for (let i = 0; i < str.length; i++) {
      output = output + str[i] + '!';
  }
  return output
  }
   console.log(yellingChars('hello world'));
  
  
   //indexedChars
   console.log('indexedChars **************************');

   
   function indexedChars(str) {
    let output = '';
       for (let i = 0; i < str.length; i++) {
           output = output + [i] + str[i];
       }
       return output;
   }

   console.log(indexedChars('Wow this is neat'));

   //numberedChars

   console.log('numberedChars *****************************');

   
   function numberedChars(str) {
    let output = '';
       for (let i = 0; i < str.length; i++) {
           output = output + (i + 1) + str[i];
       }
       return output;
   }

   console.log(numberedChars('woot'));

   //`exclaim`

   console.log('`exclaim` ***********************************');


   function exclaim(str) {
       let output = '';
       for (let i = 0; i < str.length; i++) {
           if (str[i] === '?' || str[i] === '.') {
               output = output + '!';
           } else {
               output = output + str[i];
           }
       }
       return output;
   }

   console.log(exclaim('What are you doing? Seems fun.'));

   //`repeatIt`

   console.log('`repeatIt` *****************************************');

   function repeatIt(str, n) {
       let output = '';
       let count = 0;
       while (count < n) {
           output = output + str;
           count = count + 1;
       }
       return output;

   }

   console.log(repeatIt('hey', 3));

   //truncate

   console.log('truncate *************************************');

   function truncate(str) {
       if (str.length < 15) {
           return str;
       }

       let output = '';
       for (let i = 0; i < 15; i++) {
         output = output + str[i];
       }

       output = output + '...';
       return output;
   }

   console.log(truncate('This is a long sentence that just carrys on forever.'));

   //ciEmailify

   console.log('ciEmailify **********************************************');

   function ciEmailify(str) {
       let output = '';
       for (let i = 0; i <str.length; i++) {
           if (str[i] === ' ') {
               output = output + '.';
           } else {
               output = output + str[i];
           }
       }

       return output.toLowerCase() + '@codeimmersives.com'
   }

   console.log(ciEmailify('Erich Fredersdorff'));

   //`reverse`

   console.log('`reverse` *************************************************');

   function reverse(str) {
       let output = '';
       for (let i = 0; i < str.length; i++) {
           output = str[i] + output;
       }
       return output;
   }

   console.log(reverse('pool'));

   //onlyVowels

   console.log('onlyVowels ******************************************************');

   function onlyVowels(str) {
       let output = '';
       for (let i = 0; i <str.length; i++) {
           const char = str[i].toLowerCase();
           if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
               output = output + str[i];
           }
       }
       return output;
   }

   console.log(onlyVowels('Hey there, you remind me of a person I once knew.'));

   //crazyCase

   console.log('crazyCase ************************************************');

   function crazyCase(str) {
       let output = '';
       for (i = 0; i < str.length; i++) {
           const char = str[i];

           if (i % 2 === 0) {
               output += char.toLowerCase();
           } else {
               output += char.toUpperCase();
           }
       }
       return output
   }

   console.log(crazyCase('wow wow wow this is wild'));

   //titleCase

   console.log('titleCase ***************************************************');

   function titleCase(str) {
      str = str.toLowerCase().split(' ');

      for (i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }
      return str.join(' ');
       
   }

   console.log(titleCase('How will this look?'));