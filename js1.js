
//Single Parameter Function ES6

const display=num=>num+10;
const show=display(10);
console.log(show);

//Multiple Parameter Function ES6
const multipleFunction=(num1,num2)=>num1+num2;
const display1=multipleFunction(10,50);
console.log(display1);

//Empty Parameter Function ES6

const EmptyFunction=()=>100;
const display2=EmptyFunction();
console.log(display2);

//Extra

const doMath=(x,y)=>{
    const sum=x+y;
    const sub=x-y;
    const result=`Sum is ${sum} and sub is ${sub}`;
    return result;
}
const display5=doMath(20,10);
console.log(display5);

