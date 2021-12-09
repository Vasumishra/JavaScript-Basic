//----------------------- ARRAY-------------------------------
var name = ["vasu","mishra","BANTY","MISHRA"];
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);


// -------------------We use for loop to navigate----------------- 
var myFriends = ['vinod','ramesh','arjun','vishal'];
for(var i=0; i<myFriends.length; i++){
console.log(myFriends[i]);
}


// ----------------------We use for loop to navigate----------------- 
var myFriends = ['vinod','ramesh','arjun','vishal'];
for(var i=0; i<myFriends.length; i++){
console.log(myFriends[i]);
}


// Array.prototype.forEach()-Calls a function for each element in the array.
var myFriends = ['vinod','ramesh','arjun','vishal'];
myFriends.forEach((element, index, array) => {
console.log(element + " index : " + index + " " + array);
});
    
    
•	Array.prototype.indexOf()-Returns the first (least) index of an element within the array equal to an element, or -1 if none is found. It searches the element from the 0th index number. 
var myFriendNames = ["vinod","bahadur","thapa","technical","thapa"];
console.log(myFriendNames.indexOf("Thapa", 3));

•	Array.prototype.lastIndexOf()-Returns the last (greatest) index of an element within the array equal to an element, or -1 if none is found. It search the element last to first
var myFriendNames = ["vinod","bahadur","thapa","technical","thapa"];
console.log(myFriendNames.lastIndexOf("Thapa",3));

•	Array.prototype.includes()-Determines whether the array contains a value, returning true or false as appropriate.
var myFriendNames = ["vinod","bahadur","thapa",”technical"];
console.log(myFriendNames.includes("thapa"));

•	Array.prototype.find()- arr.find(callback(element[, index[, array]])[, thisArg])
Returns the found element in the array, if some element in the array satisfies the testing function, or undefined if not found. Only problem is that it return only one element
const prices = [200,300,350,400,450,500,600];
price < 400
const findElem = prices.find((currVal) =>  currVal < 400 );
console.log(findElem);
console.log(  prices.find((currVal) => currVal > 1400 )  );

•	Array.prototype.findIndex()-Returns the found index in the array, if an element in the array satisfies the testing function, or -1 if not found.
console.log(  prices.findIndex((currVal) => currVal > 1400 )  );

•	Array.prototype.filter()- Returns a new array containing all elements of the calling array for which the provided filtering function returns true.
const prices = [200,300,350,400,450,500,600];
price < 400
const newPriceTag = prices.filter((elem, index) => {
return elem > 1400;
})
console.log(newPriceTag);


•	Array.prototype.sort()-The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
const months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];
console.log(months.sort());
const array1 = [1, 30, 4, 21, 100000, 99];
console.log(array1.sort());


•	Array.prototype.push() -The push() method adds one or more elements to the  end of an array and returns the new length of the array.
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('chicken');
console.log(count);
animals.push('chicken', 'cats','cow');
console.log(animals);

•	Array.prototype.unshift()-The unshift() method adds one or more elements to   the beginning of an array and returns the new length of the array.
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.unshift('chicken');
console.log(count);
console.log(animals);
animals.unshift('chicken', 'cats','cow');
console.log(animals);

const myNumbers = [1,2,3,5];
myNumbers.unshift(4,6);
console.log(myNumbers);

•	Array.prototype.pop() -The pop() method removes the last element from an array  and returns that element. This method changes the length of the array.
const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];
console.log(plants);
console.log(plants.pop());
console.log(plants);

•	Array.prototype.shift()-The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];
console.log(plants);
console.log(plants.shift());
console.log(plants);


•	Array.prototype.map() 

let newArray = arr.map(callback(currentValue[, index[, array]]) {
return element for newArray, after executing something
}[, thisArg]);
Returns a new array containing the results of calling a function on every element in this array. 
const array1 = [1, 4, 9, 16, 25];
num > 9
let newArr = array1.map((curElem,index,arr) => {
return curElem > 9;
})
console.log(array1);
console.log(newArr);

 let newArr = array1.map((curElm, index, arr) => {
return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
 }).reduce().
console.log(newArr);

let newArrfor = array1.forEach((curElm, index, arr) => {
return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
})
console.log(newArrfor);(It return new array without mutating the orignal array) 



reduce method

let arr = [5,6,2];
let sum = arr.reduce((accumulator, curElem) => {
debugger;
return accumulator += curElem;
},7)
console.log(sum);

 How to fatten an array -converting 2d and 3d array into one dimensional array 
const arr = [
['zone_1', 'zone_2'],
['zone_3', 'zone_4'],
['zone_5', 'zone_6'],
['zone_7', ['zone_7', ['zone_7', 'zone_8']]]
];
let flatArr = arr.reduce((accum, currVal)  => {
return accum.concat(currVal);
})
console.log(arr.flat(Infinity));
console.log(flatArr);
const arr = [ ['zone_1', 'zone_2'], ['zone_3', ['zone_1', 'zone_2', ['zone_1', 'zone_2']]] ];
console.log(arr.flat(3));
console.log(arr);
