constructor.let myName = "vasu mishra";
let myChannelName = 'code with vasu';
let ytName = new String("Vasu Technical");
let ytName = 'vasu technical';
console.log(myName);
console.log((ytName));


String.prototype.length-Reflects the length of the string. 
let myName = "vasu mishra";
console.log(myName.length);


let anySentence = "We are the so-called \"Vikings\" from the north.";
console.log(anySentence);

if you dont want to mess, simply use the alternate quotes 
let anySentence =  " We are the so-called 'Vikings' from the north. ";
console.log(anySentence);


•	String.prototype.indexOf(searchValue [, fromIndex]) - The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string
             const myBioData =  'I am the mishra Technical';
             console.log(myBioData.indexOf("t", 6));

JavaScript counts positions from zero.0 is the first position in a string, 1 is the second, 2 is the third ...

•	String.prototype.lastIndexOf(searchValue [, fromIndex]) -Returns the index within the calling String object of the last occurrence of searchValue, or -1 if not found. 
        const myBioData =  'I am the mishra Technical';
            console.log(myBioData.lastIndexOf("t", 6));


 •	String.prototype.search(regexp) -The search() method searches a string for a specified  value and returns the position of the match and The search() method cannot take a second start position argument
const myBioData =  'I am the mishra Technical';
let sData = myBioData.search("technical");
console.log(sData);



a)	slice () Method- slice() extracts a part of a string and returns the extracted part in a new string. The method takes 2 parameters: the start position and the end position (end not included).
The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
Note: The original array will not be changed.
Remember: JavaScript counts positions from zero. First position is 0.
var str = "Apple, Banana, Kiwi, mango";
let res = str.slice(0,4);
let res = str.slice(7);
console.log(res);
b)	substring () Method - substring() is similar to slice().The difference is that substring() cannot accept negative indexes.
var str = "Apple, Banana, Kiwi";
let res = str.substring(8,-2);
console.log(res);
If we give negative value then the characters are counted from the 0th position.
c)	 substr() Method - substr() is similar to slice().The difference is that the second parameter specifies the length of the extracted part.
var str = "Apple, Banana, Kiwi";
let res = str.substr(7,-2);
let res = str.substr(-4);console.log(res);



string.prototype.replace(searchFor, replaceWith) - The replace() method replaces   a specified value with another value in a string.
let myBioData = `I am vasu mishra`;
let repalceData = myBioData.replace('vasu','VASU');
console.log(repalceData);
console.log(myBioData);


a)	charAt() Method - The charAt() method returns the character at a specified index (position) in a string
let str = "HELLO WORLD";
console.log(str.charAt(9));

b)	charCodeAt() Method - The charCodeAt() method returns the unicode of the character at a specified index in a string,The method returns a UTF-16 code (an integer between 0 and 65535).The Unicode Standard provides a unique number for every character, no matter the platform, device, application, or language. UTF-8 is a popular Unicode encoding which has 88-bit code units.
var str = "HELLO WORLD";
console.log( str.charCodeAt(0) );

c)	Property Access[ ]
ECMAScript 5 (2009) allows property access [ ] on strings
var str = "HELLO WORLD";
console.log(str[1]);

Other useful methods 
let myName = "vasu mIsHra";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

•	concat() Method - concat() joins two or more strings
let fName = "vasu"
let lName = "mishra"
console.log(fName + lName );
console.log(`${fName} ${lName}`);
console.log(fName.concat(lName));
console.log(fName.concat(" " ,lName));

•	String.trim() -The trim() method removes whitespace from both sides of a string
var str = "              Hello         World!            ";
console.log(str.trim());

•	Converting a String to an Array - A string can be converted to an array with the split() method
var txt = "a, b,c d,e";   // String
console.log(txt.split(","));           // Split on commas
console.log( txt.split(" "));          // Split on spaces
console.log(txt.split("|"));         // Split on pipe






