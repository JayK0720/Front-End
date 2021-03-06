// 返回指定对象的原型

const prototype1 = {};
const object1 = Object.create(prototype1);
console.log(Object.getPrototypeOf(object1) === prototype1); // true
console.log( object1.__proto__ === prototype1 );    // true

console.log(Object.getPrototypeOf(Object) );    // ƒ () { [native code] }
console.log(Object.getPrototypeOf(Function) );

console.log(Object.getPrototypeOf(Object) === Object.getPrototypeOf(Function));     // true

console.log(Object.getPrototypeOf(Object) === Function.prototype )  // true
console.log(Object.__proto__ === Function.prototype);   // true
console.log(Function.__proto__ === Function.prototype); // true
console.log( Function.prototype.__proto__ === Object.prototype );   // true
console.log(Object.prototype.__proto__);    // null

console.log(Function.constructor === Function); // true
console.log(Object.constructor === Function);   // true
console.log(Function.prototype.constructor === Function);   // true