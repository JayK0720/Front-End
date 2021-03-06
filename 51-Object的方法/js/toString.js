let s1= "hello!";
s1.color = "red";
console.log(s1.red); // undefined

let s2 = new String("hello");
s2.color = "red";
console.log(s2.color);  // red
console.log(s1.__proto__);

console.log("foo".toString());  // foo
console.log(1..toString()); // 1
console.log(false.toString());  // false
console.log([1,2,3].toString());    // 1,2,3
/*    console.log(undefined.toString());  // 报错
    console.log(null.toString());   // 报错*/
console.log(String.toString()); // function String(){}
console.log(Number.toString()); // function Number(){}
console.log(Boolean.toString());    // function Boolean(){}
console.log(Array.toString());  // function Array(){}
console.log(Object.toString()); // function Object(){}
console.log(typeof Array.toString());   // string
console.log( Object.toString.call(Array) );
console.log( Object.prototype.toString.call(Array));
let f1 = function(){}
console.log(({}).toString());
console.log(f1.toString());
// Array Function Date虽然都是基于Object进行创建的,但是它们继承的是Object.toString()方法

function Dog(name){
	this.name = name;
}
Dog.prototype.toString = function dogToString(){
	return '' + this.name
}
var dog1 = new Dog('Gabby');
console.log(dog1.toString());	// Gabby

console.log(dog1.hasOwnProperty('name'));
console.log(dog1.hasOwnProperty('toString'))	// false

let o = {
	firstName:'lebron',
	lastName:'irving'
}
console.log(o.toString())

let str = 'lebron james';
console.log(str.toString())
console.log(o.__proto__.hasOwnProperty('toString'))	; // true
console.log(str.hasOwnProperty('toString'))	// false
console.log(str.__proto__);