//const numbers=[4,5];
//ending
//numbers.push(6,6);
//beginning
//numbers.unshift(1,2);

//middle
//numbers.splice(2,0,'a','b');
//console.log('Ending ,Beginnig,Middle ='+numbers);

///indexof
const number = [1, 2, 3, 1, 4];
console.log(number);
console.log(number.indexOf(1, 2));
console.log(number.lastIndexOf(5));
console.log(number.indexOf(1) == 1);
console.log(number.includes(1));


//finding element 
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },

];
const course = courses.find(function (course) {   ////same-1
    return course.name === 'a';
});
console.log(course);


//another rule for finding system
const mind = [
    { id1: 3, name1: 'c' },
    { id2: 4, name2: 'd' },
];
const course2 = mind.find(course2 => course2.name1 === 'c');  ///same-1
console.log(course2);


//pop
const element = [1, 2, 3, 4, 5, 6];
const pop1 = element.pop();
console.log('Pop =' + pop1);
//shift

const shift1 = element.shift();
console.log('shift =' + shift1);
//splice
const splice1 = element.splice(2, 2);
console.log('splice1 =' + splice1);


///all number empty display 
//solution -1
console.log("Empty array rule--");
let array = [1, 2, 3, 4, 5, 6, 7];
let another1 = array;
array = [];
console.log(array);
console.log(another1);

//solution-2
array.length = 0;
console.log(array);

//solution-3
array.splice(0, array.length);
console.log(array);

//solution-4
while (array.length > 0) {
    array.pop();
}
console.log(array);

//combiand method
const first = [{ id: 1 }]; //object
const second = [4, 5, 6];
const combiand = first.concat(second);
first[0].id = 10;
const slice = combiand.slice(2);
console.log(combiand);
console.log(slice);


//spered operator
const first1 = [1, 2, 3];
const second1 = [4, 5, 6];
const combiand1 = [...first1, 'a', ...second1, 'b'];
console.log(combiand1);


//iterator array
console.log('iterator');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//for(let number of numbers)

numbers.forEach((number, index) => console.log(index, number));

//console.log(number);

//joining array
const number1 = [1, 2, 3, 4];
const joining = number1.join(' ');
console.log(joining);

const message = 'This is my first message for your';
const messaging = message.split(' ');
console.log(messaging);
const combiand2 = messaging.join('-');
console.log(combiand2);

///array sort 
console.log('Sorting');
const mob = [2, 5, 4, 3, 1, 7, 8, 9, 0];
mob.sort();
console.log(mob);



///array sort

// a<b=-1
//a>b=1
//a===b=0
console.log('Sorting system from object');
const deptCourse = [
    { id: 1, sub: 'Node.js' },
    { id: 2, sub: 'javaScript' },
    { id: 3, sub: 'Python' },
    { id: 4, sub: 'react Native' },
    { id: 5, sub: 'fultter' },
];
deptCourse.sort(function (a, b) {
    const nameA = a.sub.toLowerCase();
    const nameB = b.sub.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;

});
console.log(deptCourse);


//postive number or negative number 
//every() method is all positive 
//some() method is atlestOne positive
console.log('positive number or negative number');
const numberPositive = [1, 2, -3, 4, -5, 6];
const atLestOnePositive = numberPositive.some(function (value) {
    return value >= 0;
});
console.log(atLestOnePositive);

//filtring
console.log('filtering');
const filterNumber = [2, 3, 4, 5, -7, 9, 8, -1, 9];
const sorted = filterNumber.sort();
const filterd = sorted.filter(value => value >= 0);
console.log(filterd);


//map method
console.log('Mapping');
const tenNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2];
const filtered1 = tenNumber
    .filter(value => value >= 0)
    .map(value => ({ value1: value }))
//.filter(obj=>obj.value1>2);
//const items=filtered1.map(value =>({value1:value}));
// return obj;
//const html='<ul>\n'+items.join('')+'\n</ul>';
console.log(filtered1);

//array sum -rule -1
console.log('sum of result');
const numberOfArray = [1, 2, 3, 4, 5, -7, 8];
let sum = 0;
for (let n of numberOfArray)
    sum = sum + n;
console.log(sum);

//array of sum rule -2

console.log('Sum of result 2');
const arrayNumber = [1, 2, 3, 4, 5, -7, 8];

//a=0,c=1  a=>1
//a=1,c=2  a=>3
//a=3,c=3  a=>6
//a=6,c=4  a=>10
//a=10,c=5 a=>15
//a=15,c=-7 a=>8
//a=8,c=8  a=>16
const allSum = arrayNumber.reduce((accumuleter, currentValue) => {
    return accumuleter + currentValue;
}, 0);
console.log(allSum);


//includes method
console.log('includes method');
const includesNumber = [1, 2, 3, 4];
console.log(includes(includesNumber,-1));
function includes(array, searchElement) {
    for (let element of array) {
        if (element === searchElement) {
            return true;
        }
        return false;
    }
}

//exersie-3
console.log('exerise-3');
const outNumber=[1,2,3,4,5];
const output=except(outNumber,[1,2]);
console.log(output);
function except(array,excluded){
    const output=[];
    for(let element of array)
    if(!excluded.includes(element))
    output.push(element);
    return output;
}

//splice method exersie-4
console.log('Splice Number');
const spliceNumber=[1,2,3,4];
const outputSplice=move(spliceNumber,0,2);
console.log(outputSplice);


function move(array,index,offset){
    const outputSplice=[...array];
    const element1 =outputSplice.splice(index, 1)[0];
    outputSplice.splice(index+offset, 0, element1);
    return outputSplice;
}


//exersie-5
const occurenceNumber=[1,2,3,4,1,2,1,5,6,7,2,3,4,5,2,3,4,1,3,8,9];
const count=countOccurences(occurenceNumber,1);
console.log(count);
function countOccurences(array,searchElement1){
   // let count =0;
    //for(let element of array)
   // if(element===searchElement1)
   // count++;
   // return count;

   return array.reduce((accumuleter1,current)=>{
       const occurence=(current===searchElement1)? 1:0;
       console.log(accumuleter1,current,searchElement1);
       return accumuleter1+occurence;

   },0);
}
///getMax Number

//exersise-6
//const maxNumber=[1,2,3,4,5,2,8,6,5];
const max=getMax([2,3,4,5,2,8,6,5]);
console.log('Max Number');
console.log(max);


function getMax(array){
   // if(array.length===0) return undefined;
   // let max=array[0];
  //  for(let i=1;i<array.length;i++)
   // if(array[i]>max)
   // max=array[i];
  //  return max;
  return array.reduce((a,b)=>(a>b)? a:b);
}