// Object.create() 方法创建一个新对象,使用现有的对象来提供新创建的对象的__proto__.
const person = {
	isHuman:false,
	printIntroduction:function(){
		console.log(`my name is ${this.name}. Am I human? ${this.isHuman}`)
	}
}
const me = Object.create(person);
console.log(me);	// {}
console.log(me.__proto__);	// {isHuman:false,printIntroduction:f}

me.name = 'jack';
me.printIntroduction();	// my name is jack. Am I human? false
me.isHuman = true;
me.printIntroduction();	// my name is jack. Am I human? true


function Player(name){
	this.name = name;
	this.canTalk = true;
}
Player.prototype.greet = function(){
	if(this.canTalk){
		console.log('my name is ' + this.name);
	}
}

function Kyrie(name){
	Player.call(this,name);
}
Kyrie.prototype = Object.create(Player.prototype);
Kyrie.prototype.constructor = Kyrie;

let kyrie = new Kyrie('kyrie');
console.log(kyrie.__proto__);
console.log(kyrie.name);  // kyrie
kyrie.greet();    // my name is kyrie


// 用Object.create实现类式继承.
// shape 父类
function Shape(){
	this.x = 0;
	this.y = 0;
}
Shape.prototype.move = function(x,y){
	this.x += x;
	this.y += y;
	console.info(`shape moved. ${this.x},${this.y}`);
}

// rectangle 子类
function Rectangle(){
	Shape.call(this);
}

// 子类继承父类
Rectangle.prototype = Object.create(Shape.prototype);

var rect = new Rectangle();
console.log(rect instanceof Rectangle);	// true
console.log(rect instanceof Shape);	// false
console.log(rect);	// {x:0,y:0}
console.log(Rectangle.prototype.__proto__ === Shape.prototype);	// true
console.log(rect.__proto__.__proto__ === Shape.prototype);	// true
console.log(rect.__proto__.constructor === Shape);	// true
rect.move(2,3);	// shape moved. 2,3

let o = {}
console.log(o,o.__proto__.constructor)	// {} f Object
console.log(o.__proto__ === Object.prototype);	// true
const b = Object.create(Object.prototype);
console.log(b);	// {}


// 创建一个原型为null的空对象
const j = Object.create(null);
console.log(j);	// {}
console.log(j.__proto__ == null);	 // true


const e = Object.create(Object.prototype,{
	foo:{
		writable:true,
		configurable:true,
		value:'hello'
	}
})
console.log(e);


const c = Object.create(Object.prototype,{
	p:{
		value:42
	}
});
c.p = 24;
console.log(c.p)	// 42

c.q = '我是可枚举的';
for(let key in c){
	console.log(key);	// q
}
delete c.p
console.log(c)	// {q: "我是可枚举的", p: 42}

// 创建一个可以写,可以枚举,可以配置的属性p
const o2 = Object.create(Object.prototype,{
	p:{
		value:42,
		writable:true,
		enumerable:true,
		configurable:true
	}
});
console.log(o2)