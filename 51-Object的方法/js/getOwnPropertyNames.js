// Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名
// （包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组

var arr = ['a','b','c'];
console.log(Object.keys(arr));  // ['0','1','2']
console.log(Object.getOwnPropertyNames(arr));   // ['0','1','2','length']
console.log(arr);
// 类数组
let obj = {
	0:"a",
	1:"b",
	2:"c"
}
console.log(Object.getOwnPropertyNames(obj));   // ['0','1','2']

Object.getOwnPropertyNames(obj).forEach((value,index,array)=>{
	console.log(value + ' ---> ' + obj[value]); // 0 --- a  1 --- b   2 ---- c
})

let player = {
	firstName:'kyrie',
	lastName:'irving'
}
Object.defineProperty(player,'age',{
	value:'26',
	enumerable:false,
	writable:false,
	configurable:false
})
console.log(player);
Object.getOwnPropertyNames(player).forEach((value,index) => {
	console.log(index + ': ' + value + ' ---> ' + player[value]);
});
// 0: firstName ---> kyrie
// 1: lastName ---> irving
// 2: age ---> 26

// 无法获取age属性,因为该属性是不可枚举的
Object.keys(player).forEach((value,index) => {
	console.log(index + ': ' + value + ' ---> ' + player[value]);
})