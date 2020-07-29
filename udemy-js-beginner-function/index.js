//function declaration 
console.log('Function Declaration');
function walk(){
    console.log('walk');
}
walk();
//function expression
console.log('Function expression');
let run=function(){
    console.log('run');
};
let move=run;

run();
move();

//arguments sum function 

function sum(){
    let total=0;
    for(let value of arguments)
    total+=value;
    return total;
}
console.log('arguments sum');
console.log(sum(2,5,4,6,7,8,9,5,));

//sum function are modern javaScript version
function sum1(...args){
  return args.reduce((a,b)=>a+b);
}
console.log('modern javaScript rule:rest opertor');
console.log(sum1(1,2,3,4,5,10));

//exersie
function interest(principal,rate=4.5,year=5){
    return principal*rate/100*year;

}
 console.log(interest(10000));

 ///getter and setter method
const person={
    firstName : 'Tipu',
    lastName:'Sultan',

};
console.log(person.firstName+ ' '+person.lastName);


//getter and setter second role
const person1={
    fisrstName1:'Tipu',
    lastName1:'Sultan',
   get fullName(){
        return `${person1.firstName1} ${person1.lastName1}`;
    },
    set fullName(value){

        if(typeof value !=='string') return;
      const parts = value.split(' ');
      this.fisrstName1=parts[0];
      this.lastName1=parts[1];
    }
};
person1.fullName=null;
console.log(person1);

///local and gobal 
console.log('Local and Gobal Variable');
const color='red';
function start(){
    const message='Hi';
    const color='Bule';
    console.log(color);


}
start();

//var=>function -scope
//ES6(ES2015): let ,const=>block -scope
function start1(){
    for(var i=0;i<=5;i++)
    console.log(i);
    console.log(i);
}
start1();

//window object
var color1='red';
let age=23;

//this keyword
//method => obj
//function=>gobal(window,gobal)
const video = {
    title: 'a',
    play(){
        console.log(this);
    }
};
//video.stop=function(){
//console.log(this);
//}
function Video(title){
    this.title=title;
    console.log(this);
}

const v=new Video('A');


//this oparator
const video1={
    title1:'a',
    tags:['a','b','c','d','e'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title1,tag);
        },this);
    }

};
video1.showTags();


//another rule
function playVideo(){
    console.log(this);
}
playVideo.call({name:'Tipu'},1,2);
playVideo.apply({name:'Tipu'},[1,2]);
playVideo.bind({name:'Tipu'})();

playVideo();

//bind method
const video2={
    title2:'Name =',
    tags1:['tipu','Josna','Dipu','Apu'],
    showDetails(){
        this.tags1.forEach(tag =>{

            console.log(this.title2,tag);
        });
    }
};
video2.showDetails();

//exersie-1

console.log(sum2([1,2,3,4]));
function sum2(...items){
    if(items.length===1 && Array.isArray(items[0]))
    items=[...items[0]];
    return items.reduce((a,b)=> a+b);
}


//radius
const radius1={
    radius1:1,
    get area(){
      return  Math.PI*this.radius1*this.radius1;
    }

};

console.log(radius1.area);
