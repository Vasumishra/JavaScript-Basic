1.	Event Propagation (Event Bubbling and Event Capturing)
Event Bubbling-The browser checks to see if the direct parent of the element selected has an onclick event handler registered on it for the bubbling phase, and runs it if so.
Event Capturing- this event is first captured by the outermost element and propagated the inner element.it is also called trickling which helps remember the propagation order.

2. Higher Order Function - function which takes another function as an arguments is called HOF (wo function jo dusre function ko as an argument accept krta hai use HOF)

3. Callback Function - Functions which get passed as an argument to another function is called CBF. A callback function is a function that is passed as an argument to another function, to be “called back” at a later time.(Jis bhi function ko hum kisi or function ke under as an arguments passed krte hai then usko hum Callback fun bolte hai) 
const add = (a,b) => {
return a+b;
}console.log(add(5,2));

const calculator = (num1,num2, operator) => {
return operator(num1,num2);
}
calculator(5,2,subs)
console.log(calculator(5,2,subs));

I have to do the hardcoded for each operation which is bad we will use the callback and the HOF to make it simple to use now instead of calling each function individually we can call it by simply using one function that is calculator 
console.log(calculator(5,6,add));
console.log(calculator(5,6,subs));
console.log(calculator(5,6,mult));

In the above example, calculator is the higher-order function, which accepts three arguments, the third one being the callback. Here the calculator is called the Higher Order Function because it takes another function as an argument  and add, sub and mult are called the callback function bcz they are passed as an argument to another fucntion.
4.	Synchronous JavaScript Program
const fun2 = () => {
console.log(`Function 2 is called`);
}
const fun1 = () => {
console.log(`Function 1 is called`);
fun2();
console.log(`Function 1 is called Again ✌`);
 }	
fun1();


Asynchronous JavaScript Prog 
const fun2 = () => {
setTimeout(()=> {
console.log(`Function 2 is called`);
}, 2000);
}
const fun1 = () => {
console.log(`Function 1 is called`);
fun2();
console.log(`Function 1 is called Again `);
}
fun1();

5.	Hoisting in JavaScript - we have a creation phase and execution phase.Hoisting in Javascript is a mechanism where variables and functions declarations are moved to the top of their scope before the code execute.
console.log(myName);
let myName;
myName = "vasu";
In ES2015 (ES6), hoisting is avoided by using the let keyword instead of var. (The other difference is that variables declared with let are local to the surrounding block, not the entire function.)

6.	Scope Chain and Lexical Scoping in JavaScript - The scope chain is used to resolve the value of variable names in JS. Scope chain in js is lexically defined, which means that we can see what the scope chain will be by looking at the code. At the top, we have the Global Scope, which is the window Object in the browser.
Lexical Scoping means now, the inner function can get access to their parent functions variables But the vice-versa is not true.
let a = "Hello guys. "; // global scope
const first= () => {
let b = " How are you?"
const second = () => {
let c = " Hii, I am fine thank you";
console.log(a+b+c);
}
second();
console.log(a+b+c); //I can't use C 
}first();	

7. Closures in JavaScript - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
const outerFun = (a) => {
let b = 10;
const innerFun = () => {
let sum = a+b;
console.log(`the sum of the two no is ${sum}`);
innerFun();
 }
outerFun(5);

it same like lexical scoping 
const outerFun = (a) => {
let b = 10;
const innerFun = () => {
let sum = a+b;
console.log(`the sum of the two no is ${sum}`);
}
return innerFun;
}
let checkClousure = outerFun(5);
console.dir(checkClousure); 
let x = "vasu";//use strict
console.log(x);

Back To Advanced JavaScript 	
Currying const sum = (num1) => (num2) => (num3) =>    console.log(num1+num2+num3); 
sum(5)(3)(8);

 8. Callback Hell - Callback hell is a phenomenon that afflicts a JavaScript developer when he tries to execute multiple asynchronous operations one after the other. By nesting callbacks in such a way, we easily end up with error-prone, hard to read, and hard to maintain code.Soln: Best code practice to handle it.
setTimeout(()=>{
console.log(`1 works is done`);    
setTimeout(()=>{
console.log(`2 works is done`); 
setTimeout(()=>{
console.log(`3 works is done`);  
setTimeout(()=>{
console.log(`4 works is done`); 
setTimeout(()=>{
console.log(`5 works is done`);   
setTimeout(()=>{
console.log(`6 works is done`);    
}, 1000) 
}, 1000)   
}, 1000)  
}, 1000)   
}, 1000)
}, 1000)

