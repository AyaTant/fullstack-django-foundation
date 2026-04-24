// Arithmetic expressions
console.log(20);
console.log(20 + 30);
console.log(30 + 30);

// String expressions
console.log('John is a boy');
console.log('Come' + 'Home');
console.log('Come' + ' Home');

// Logical expressions
console.log(20 > 30);
console.log(5 < 10);

// Assignment expressions
let age1 = 16;
console.log(age1);

// Function declaration
function getAge(age) {
    console.log(age);
}
getAge(25);

// Conditional statements
let age = 16;

if (age < 18) {
    console.log('Under age driver'); // replaced alert
} else {
    console.log(age);
}

//Iteration statements
myArray = []
Count=0;
while(Count <10){
    myArray.push(Count);
    Count++;
}
console.log(myArray)

//function statements
function WhatIsMyName (){
    name = 'Aya Tantaoui'
    console.log(name)
}
WhatIsMyName();

//Working with variables in JavaScript
var num;
var dateOfBirth;
//method 1 : while declaring variable
var annualSalary = 24000;
//method 2: after declaring variable
num = 30;
console.log(30)

// variable scope
var myScope = 'This is my global scope'
var myScopeTest = function(){
    var myScope = 'This is my local variable';
    console.log(myScope);
}
myScopeTest();

//Arithmetic operators
var a=75;
var b=20;

//Addition
result=a+b;
console.log("Addition:",result)

//Increment
result = ++a;
console.log("Increment",result)

//plain assignment
result = (a=b);
console.log("Value of a => (a=b) => ",result);

// add before assigning
result = (a+=b);
console.log("add before assigning",result);

//substract before assigning
result = (a-=b);
console.log("substract before assigning",result);

//modulus before assigning
result = (a%=b);
console.log("modulus before assigning",result)

// comparison operators
var a = 50;
var b=30;
result = (a==b)
console.log(result)

result = (a!=b)
console.log(result)

// logical operators
var a =false;
var b =true;

//logical and
result=(a&&b);
console.log("logical and: ",result);

//logical or
result = (a||b)
console.log("logical or: ",result)

//logical NOT
result = (!(a&&b));
console.log("logical not: ",result)

//conditional operators
var a=10;
var b=20;

result = (a>b)? 500 : 900;
console.log(result);

result = (a <b)? 500 : 900;
console.log(result);

//object literal:
var football = {
    color:'Blue',
    size: '38cm',
    texture:'',
    pressure:'',
    positionX: 0,
    positionY: 0,
    kick: function (x,y){
        this.positionX=x;
        this.positionY=y;
    },
    throw: function(x,y){
        return ;
    },
    inflate: function(){
        return ;
    },
    deflate: function(){
        return ;
    }
};
//object constructor
var football2 = new Object();
football2.color = 'Blue';
football2.throw = function (x,y){
    return ;
}
//Assessing the properties
var color = football.color
var size = football.size
console.log(color)

// Arrays in js
var namesFirst = ['James','John','Micheal'];

var namesSecond = new Array('James','john','Micheal');
var stringArray = new Array();
stringArray[0] = "one";
stringArray[1] = "two";
stringArray[2] = "three";
stringArray[3] = "four";

//Accessing the array elemnts
var name1 = namesFirst[0];
var name2 = namesFirst[1];
var name3 = namesFirst[2];

console.log(name1);
console.log(name2);
console.log(name3);

var arrayLength = namesFirst.length;
console.log(arrayLength);
namesFirst.push('Chris');
console.log(namesFirst)
namesFirst.pop();
console.log(namesFirst);

//join
var result = namesFirst.join('@');
console.log(result);

//filter
var result = namesFirst.filter (name => name.length > 4);
console.log(result)

//Every
function isUnderAge(age){
    return age <18;
}

var ageArray = [10,14,8,3,12,5];
console.log(ageArray.every(isUnderAge));

//Creating a promise
var isGoodWeather = false;
//Promise
var BookDelivery = new Promise(
    function (resolve,reject){
        if(isGoodWeather){
        var book = {
            title:'Animal Farm',
            author: 'Oliver Twist'
        };
        resolve(book); //promise fulfilled
    } else {
        var reason = new Error('The weather is very bad, book is not delivered');
        reject(reason); //promise rejected
    }
        
    }
);
// consuming promise
var checkBookStatus = function() {
    BookDelivery
    .then(function (fulfilled) {
        //lof report is book is delivered
        console.log(fulfilled);
    })
    .catch(function (error){
        console.log(error.message);
    });
};
checkBookStatus();