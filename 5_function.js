// ----------------------------FUNCTION------------------------------

function sum() {
var a=10,b=100;
var add = a+b;
console.log(add);
}
sum();

// function parameter-the name listed in the function defination
// function arugument- the real value passed by function

//--------------------CALL A FUNCTION-------------------------

function sum (a,b)//parameter 
{
        var total = a+b;
        console.log(total);
    }
    sum();
    sum(20,30);//argument
    sum(50,50);
    sum(100,50);
    

//--------------------FUNCTION EXPRESSION----------------------

function sum (a,b)
{
    var total = a+b;
    console.log(total);
}
var funExp = sum(10,5);

 //--------------------RETURN KEYWORDS--------------------------

function mul(a,b=5) {
return a*b;
}
console.log(mul(3));

function sum(a,b) {
    return total=a+b;
}
var funExp= sum(50,50);
console.log(funExp);


// -------------------ANONYMOS FUNCTION--------------------------
var funExp =function(a,b) {
    return total = a+b;
}
console.log(funExp(5,15));


// var - function scope
// let and const - globel scope
// template strings - `${name}`


function sum(){
let a=5, b=10;
let sum = a+b;
return `the sum of 2 number is ${sum}`;
}
console.log(sum());


    const sum = () => {
    let a=5, b=10;
    let sum = a+b;
    return `the sum of 2 number is ${sum}`;
    }
    console.log(sum());


//CONVERT INTO FAT ARROW FUNCTION

    const sum = () => {
        let a=5, b=10;
        return `the sum of 2 number is ${sum}`;
    }
    console.log(sum());

//**********************OR************************************

const sum = () => {
    return `the sum of 2 number is ${(a=5)+(b=10)}`;
}
console.log(sum());

//**********************OR************************************

const sum = () => `the sum of two no is ${(a=5)+(b=10)}`;
console.log(sum());