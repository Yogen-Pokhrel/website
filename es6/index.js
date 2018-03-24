let i=2;

for(i=0;i<10;i++)
{
	console.log(i);
}

console.log("i :"+i);



//const



const a=10;
console.log("A is :"+a);
if(true)
{
	let a=20;
	console.log("Inside a is "+a);
}

console.log("outside a is "+a);


let myFunc=(x,...y) => {

	console.log(x);
	console.log(y);
	return x*y;
}

let arr=[4,2,3];
console.log(myFunc(...arr));


let bigpara= `I am yogen
this is bull shit 
fuck this`;

let smallpara =` THis is next
paragraph`
console.log(bigpara);


let combination=`${bigpara}..........Inbetween.........${smallpara}`
console.log(combination)


let message=[
{
	name:"Yogen",
	cast:"pokhrel"
},
{
	name:"Dikshya",
	cast:"prasai"
}]

for(key of message)
{
	console.log(key.name)
}
