
let person = {

    name: 'Tipu',
    age: 30
};

person.name = 'Sultan'; //dot notation
person.age = 40;

let selection = 'name';
person[selection] = 'Khairul'; //bracket notation

person['age'] = 50;
console.log(person.name);
console.log(person.age);


//---array--------
let selectedColors = ['red', 'blue'];
selectedColors[2] = 2;
console.log(selectedColors.length);

//-----function------
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('Tipu', 'Sultan');


//---calculating a values
function squre(number) {
    return (number * number);

}
console.log(squre(2));

//--operator 
///---arithmetic operator
let x = 10;
let y = 3;
console.log(('Addtion') + ' ' + (x + y));
console.log(('Substruction') + ' ' + (x - y));
console.log(('Multiption') + ' ' + (x * y));
console.log(('Division ') + ' ' + (x / y));
console.log(('Modulas') + ' ' + (x % y));
console.log(('JavaScript new ') + ' ' + (x ** y));

//----increment ----
console.log(x++);
console.log(x);
console.log(++x);

//--decrement ----
console.log(--x);
console.log(x--);

//---assientment operator
console.log(x += 5);
console.log(x *= 3);

//---comparision operator
//----relational 
let x1 = 1;
console.log(x1 > 0);
console.log(x1 >= 1);
console.log(x1 < 1);
console.log(x1 <= 1);



//--equality
console.log(x1 === 1);
console.log(x1 !== 1);

//---strict equality
console.log(1 === 1); //(Type + value)
console.log('1' === 1);
//---lose equality
console.log(1 == 1);
console.log(('lose equality') + ' ' + ('1' == 1));
console.log(('lose equality') + ' ' + (true == 1));

//tarnary condition
//If a customer has more than 100 points
//they are a 'gold' customer ,otherwise
//they are a silver' customer 
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);


//logical And operator
//Returns true if both true are condition true
let highIncome = true;
let goodCreditScore = true;
let eligibleForeLoan = highIncome && goodCreditScore;
console.log('logical AND operator', eligibleForeLoan);

let applicationableRefused = !eligibleForeLoan;
console.log('Application', applicationableRefused);


//logical OR operator
//Returns true if only true are condition true
let highIncome1 = false;
let goodCreditScore1 = false;
let eligibleForeLoan1 = highIncome1 || goodCreditScore1;
console.log('logical OR operator', eligibleForeLoan1);

let applicationableRefused1 = !eligibleForeLoan1;
console.log('Application', applicationableRefused1);



//logical operator 
let userColor = 'red';
let defualtColor = 'blue';
let currentColor = userColor || defualtColor;
console.log('logical OR ', currentColor);


//BItWise OR
//1=00000001
//2=00000010
//3=00000011(or adding)
//R=00000000(AND adding)
console.log('BitWisw OR', 1 | 2);
console.log('BitWise AND', 1 & 2);

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log('Read Write Execute =', myPermission);

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);

//presidence operator
let x2 = (2 + 3) * 4;
console.log('presidence operator', x2);

//lession 25 
//pret
let a = 'red';
let b = 'blue';
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);


//if else 

//Hour 
//If hour is between 6am and 12pm : Good morning 
//If it is between 12pm and 6pm : Good afternoon
// Otherwise : Good evening
let hour = 20;
if (hour >= 6 && hour < 12) {
    console.log('Good Morning');
}
else if (hour >= 12 && hour < 6) {
    console.log('Good Afternoon');
}
else if (hour >= 6 && hour < 8) {

    console.log('Good Evening');

}

else if (hour >= 8 && hour < 12) {
    console.log('Good Night');
}
else {
    console.log('Not Now');
}


///switch statement 

let role = 'gust';
switch (role) {
    case 'gust':
        console.log('Switch case =', 'Gust User');
        break;
    case 'modarator':
        console.log('Switch case=', 'Moderator User');
        break;

    default:
        console.log('Switch case=', 'Unknow User');


}


//for loop

for (let i = 1; i <= 5; i++) {

    if (i % 2 !== 0) {
        console.log(i);
    }
}

//while loop



//for in loop 
const person2 = {
    name: 'Tipu',
    age: 30
};
for (let key in person2) {
    console.log(key, person[key]);
}



///for in array

const colors = ['red', 'blue', 'white'];
for (let index in colors) {
    console.log('For in loop for array=', index, colors[index]);
}
///for of loop
for (let color of colors) {
    console.log('for of loop=', color);
}

//for loop
let ii = 0;
while (ii <= 10) {
    if (ii % 2 == 0) {
        ii++;
        continue;
    }
    console.log('Odd Number=', ii);
    ii++;
}

//Write a function that takes two numbers and returns the maximum of the two.
let fistNumber = 29;
let secondNumber = 24;
if (fistNumber > secondNumber) {
    console.log(fistNumber);
}
else if (secondNumber > fistNumber) {
    console.log(secondNumber);
}

//function using the max number 

function max(a, b) {
    // if(a>b)
    //     return a;
    //     else return b;
    return (a > b) ? a : b;

}
let number13 = max(4, 8);
console.log('Function Using the max number=', number13);


function isLandscape(width, height) {
    return (width > height) ? true : false;

}
console.log(isLandscape(800, 600));

//divisible by 3 => Fizz
//divisible by 5 => Buzz
//divisible by 3 or 5 => FizzBuzz
//
const output = fizzBuzz(15);
console.log(output);
function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return 'Not a Number';

    }
    if (input % 3 === 0) {
        return 'Fizz';
    }
    if (input % 5 === 0) {
        return "Buzz";

    }
    if ((input % 3 === 0) && (input % 5 === 0)) {
        return 'FizzBuzz';
    }
    return input;

}

//prectice for function

checkSpeed(80);
function checkSpeed(speed) {
    const speedLimit = 80;
    const kmPerPoint = 5;
    if (speed < speedLimit)
        console.log('Ok');


    else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12)
            console.log('License suspended');

        else
            console.log('points', points);
    }
}

//pret
showNumber(10);
function showNumber(limit) {
    console.log('Odd or Even Number...');
    for (let i = 1; i <= limit; i++) {
        if (i % 2 == 0) {

            console.log('even', i);
        }
        else console.log('odd', i);
    }
}


////another way for odd or even
showNumber1(5);
function showNumber1(limit1) {
    console.log('Odd or even number ...');
    for (let k = 1; k <= limit1; k++) {
        const message = (k % 2 == 0) ? 'even' : 'odd';
        console.log(k, message);
    }
}



//truthy or folsey
const array = [1, 2, 3, 4, 5];
console.log('truthy or fulsy');

console.log(countTruthy(array));


function countTruthy(array) {
    let count = 0;
    for (let value of array) {
        if (value) {
            count++;

        }

    }
    return count;
}

//in loop prect
console.log('for in loop');
const movie={
    title:'a',
    releaseYear:2020,
    rating:4.5,
    director:'tipu'
};
showProperties(movie);

function showProperties(obj){

    for(let key in obj){
        if(typeof obj[key] === 'string'){
            console.log(key,obj[key]);
        }
    }
}

//function using sum 10
console.log('Total value of 10 and 3 or 5 OR sum is  33');
console.log(sum(10));

function sum(limit){
    let sum=0;
    for(let l=1;l<=limit;l++)
        if(l%3===0 || l%5===0)

            sum+=l;
        
        return sum;
    
}


//grade calculate
//Average =70
//1-59=F
//60-69=D
//70-79=C
//80-89=B
//90-100=A'


const marks =[100,80,90];
console.log('Average marks');
console.log(calculateGrade(marks));

function calculateGrade(marks){
    const Average=calculateGrade(marks);
    
    if(Average<59)
        return 'F';
    else if(Average<69)
        return'D';
    else if(Average<79)
    return 'C';
    else if(Average<89)
    return 'B';
    return 'A';

}
function calculateGrade(array){
    let sum=0;

    for(let valu of array)
    sum+=valu;
     return sum/array.length;
    
}


///starts 
console.log('Starts');
showStarts(5);
function showStarts(rows){
    for(let i=1;i<=rows;i++){
       let partten ='';
       for(let j=0;j<i;j++){
           partten+='*';
       }
       console.log(partten);
    }
    
}


//prime Number using by function

console.log('Prime Number');
showPrime(20);
function showPrime(limit){
    //let countPrime=0;
    for(let number=2;number<=limit;number++){
        let isPrime=true;
        for(let factor=2;factor<number;factor++){
            if(number%factor===0)
            {
                isPrime =false;
                //countPrime++;
                
                break;
            }
        }
        if(isPrime)
        console.log(number);
        
    }
}