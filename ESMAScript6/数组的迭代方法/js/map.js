const arr1 = [1,4,9,16]
console.log( arr1.map(x => Math.sqrt(x)) );
console.log(arr1);

const todos = [
	{text:"vue",completed:false},
	{text:"react",completed:true},
	{text:"redux",completed:false}
]

let newTodo = todos.map((todo,index) => {
	if(todo.completed === false){
		todo.completed = true;
	}
	return todo;
})
console.log(newTodo);


// 重新创建一个格式化后的数组
const kvArray = [
	{key:1,value:10},
	{key:2,value:20},
	{key:3,value:30}
]
var reformattedArray = kvArray.map(function(obj){
	var newObj = {};
	newObj[obj.key] = obj.value;
	console.log(newObj)
	return newObj;
})
console.log(reformattedArray);

// 在String上使用map方法获取字符串中每个字符所对应的ASCII码
const str = "Hello World";
console.log( [...str].map(function(word){
	return word.charCodeAt(0);
}) );

let code = Array.prototype.map.call(str,function(ele){
	return ele.charCodeAt(0);
})
console.log(code);

console.log( ["1","2","3"].map(parseInt) );	// [1,NaN,NaN]
console.log(parseInt.length)	// 2   parseInt 需要传入两个参数

// 改写上面的方法:
console.log( ["1","2","3"].map(function(element){
	return parseInt(element,10);
}) );	// [1,2,3]

console.log( ["1","2","3"].map(Number) ); ;	// [1,2,3]