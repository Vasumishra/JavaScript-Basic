var tomr ="sunny";
if(tomr == "rain")
{
 console.log("Take a umbrella");
}
else{
    console.log("Take a chasma");
}



var year=1995;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("the year " + year + " is leap year");
        } else {
            console.log("the year " + year + " is not leap year");
        }
    }else {
        console.log("the year " + year + " is leap year");
    }
} else{
    console.log("the year " + year + " is not leap year");
}

    
//----------------TERNAY OPERATOR FOR JAVASCRIPT-------------------

var age=25;
console.log((age>=18) ? "YOU CAN VOTE":"YOU CAN'T VOTE"); 

//----------------IF-ELSE LADDER STATEMENT-------------------------

var area = "rectangle";
var PI = 3.14, r=4, l=5, b=6;
if(area =="circle") {
    console.log("the area of circle is " + PI*r**2);
} else if(area =="rectangle"){
    console.log("the are of rect is "+ l*b);
}else if (area =="triangle") {
   console.log("the area of tri is " + b*l/2); 
} 

//-----------------------SWITCH STATEMENT-------------------------

        var area="square";
        var PI = 3.14, r=4, l=5, b=6;
        switch (area) {
         case "circle":
            console.log("The area of circle : "+ PI*r**2);
                break;
         case "rectangle" :
            console.log("The area of rectangle : " + l*b);
                break;
         case "triangle":
            console.log("The are of triangle : " + l*b/2);
                break;
         case "square":
            console.log("the area of square : " + r*r);
         default:
                break;
}


// --------------------------WHILE LOOP-------------------------------

var num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}


// --------------------------DO WHILE LOOP-------------------------------

var num = 1;
do {
    console.log(num);
    num++;
} while (num <= 10);


// --------------------------FOR LOOP------------------------------------

for(var i=1 ; i<=10; i++){
   console.log(i);
}

//*****************table of 5********************

for(var num=1; num<=10; num++){
    var tableof = 5;
    console.log(tableof+ "*"+num + "=" + tableof*num);
}
