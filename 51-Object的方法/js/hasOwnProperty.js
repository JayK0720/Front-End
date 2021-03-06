// hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。
const obj = {
	a:undefined
}
console.log('a:',obj.a);    // undefined
console.log('b:',obj.b);    // undefined

const player = {
	name:'James'
}
player.__proto__.age = 35;
console.log(player.hasOwnProperty('name')); // true
console.log(player.hasOwnProperty('age'));  // false
Object.defineProperty(player,'firstName',{
	value:'lebron',
	enumerable:false
})
console.log( ('name' in player) );  // true
console.log( ('age' in player) );   // true

console.log(Object.getOwnPropertyNames(player));    // 可以遍历对象上所有的属性

for(let key in player){ // 遍历对象上所有可枚举属性
	console.log(key);   // name
}
console.log(player.hasOwnProperty('firstName'));    // true