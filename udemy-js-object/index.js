const cirle = {
    //object 
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isdisible: true,
    draw: function () {
        console.log('Draw');
    }
};
cirle.draw();
//factory function

function createFunction(radius){
    return {
        radius,
        draw(){
            console.log('Draw');
        }
    };
}
console.log('Factory Function');
const cirle1=createFunction(1);
console.log(cirle1);

const cirle2=createFunction(2);
console.log(cirle2);

const cirle3=createFunction(3);
console.log(cirle3);


//constructor Function

function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('Draw');
    }

}
const cirle4=new Circle(1);
console.log("Construction Function");
console.log(cirle4);


///lession 46
console.log('Lession 46....');
const called = {

    phone :01234,
    person:{
    mail:2,
    feacbook:1,
    },
    invisible:true,
    right()
{
    console.log('My Profile');
}
};
called.right();



///lesssiion 49
console.log('Lession 49 object');
const fullint={
    redius:1
};

fullint.color="Yellow";
fullint.draw=function(){}
delete fullint.draw;
delete fullint.color;
console.log(fullint);

//lession 51

console.log('Lession 51');
function Circle4(radius){
    this.radius=radius;
    this.draw=function()
{
    console.log('Draw');
}
}
Circle4.call({},1);
Circle4.apply({},[1,2]);

const another =new Circle4(2);


//lession 52
console.log('lession 52');
let x={ value:10};
let y=x;
x.value=30;

console.log(x);




let number={value:20};
function increase(number){
    number.value++;
}
increase(number);
console.log(number);


//lession 53
console.log('lession 53');
const root={

    pearaMeter:1,
    like(){
        console.log('Like');
    }
};
for(let key in root){
    console.log('Lession 53 Onbject = '+key,root[key]);
}
for(let key of Object.keys(root)){
    console.log('Lession 53 Onbject = '+key);
}
for(let entry of Object.entries(root)){
    console.log('Lession 53 Onbject = '+entry);
}
if('color' in root)
    console.log('Yes');


    //lession 54
    console.log('Lession 54...');
    const Noise={
        rediuss:1,
        draw(){
            console.log('Draw');
        }
    };

    //first system-1
   // const another1={};
   // for(let key in Noise)
    //    another1[key]=Noise[key];


    //---second system-2
       // const another1=Object.assign({
       //     color:'Yellow'
      //  },Noise);
    
      const another1={... Noise};
        console.log(another1);


        ///---lession 55
        let coolingBoys={};
        console.log(coolingBoys);

//--math 
let x1=[1,2,3,4,5,6,7,8,9,10];

console.log(Math.max(x1));


//type of String and 

const message='This is my \n first message....';

//type of Object
const another2 =new String('Hi');


///templete
const name1='Tipu';
const message3=' Hi '+' name '+'\n';
const another3=
`Hi ${name1},${5+8},
Thank you for my project complete.
Regards,
Tipu`;


///date
const now=new Date();
const date1=new Date('May 11 2020 08:00');
const date2=new Date(2020, 12, 2, 9);
now.setFullYear(2020);



//exerise-1
let address={

    street:'Nilokhi',
    city:'Nabinagor',
    zipeCode:'a'
};
console.log('Exersise...');
function showAddress(address){
    for(let key in address){
        
        console.log(key,address[key]);
    }
}
showAddress(address);

//same exerise-1
//factory function
let address1=new createAddFunction('Salimjonj','B-baria','fdfkj');
console.log(address1);

function createAddFunction(street,city,zipeCode){
    return{
        street,
        city,
        zipeCode
    };
}

//same exerise-1
//constructor function


let address2=new createAddFunction1('sdfkjh','fhsjfhs','hfksfj');
console.log(address2);
function createAddFunction1(street,city,zipeCode){
    this.street=street;
    this.city=city;
    this.zipeCode=zipeCode;

}

///same object /equaL object
let name0=new Name('Tipu','Dipu','Apu');
let name2=new Name('Tipu','Dipu','Apu');

console.log(areEqual(name0,name2));
console.log(areSame(name0,name2));

function Name(name7,name8,name9){
    this.name7=name7;
    this.name8=name8;
    this.name9=name9;

}
function areEqual(name1,name2){
    return name0.name7===name2.name7 &&
    name0.name8===name2.name8 &&
    name0.name9===name2.name9;

}
function areSame(name1,name2){
   return name0===name2;

}
