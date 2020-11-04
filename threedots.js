let value1=[1,2,3,4,5,6];
let value2=[7,8,9,10,11];
let value3=[12,13,14,15];
let totalValue=[...value1,...value2,...value3,16];
console.log(totalValue);

////

let number1=550;
let number2=650;
let number3=750;
let number4=200;
let totalNumber=Math.max(number1,number2,number3,number4);
console.log(totalNumber);

//Es6 for upper term

const allNumber=[715,100,200,250,300,200,650,100];
const maximum=Math.max(...allNumber);
console.log(maximum);
