// concat
let arr1 = [1,2,3];
let newArr = arr1.concat(2,3,4);
console.log(arr1,newArr);	//  [1, 2, 3] (6) [1, 2, 3, 2, 3, 4]

let array = [{a:1}];
let newArray = array.concat();
newArray[0]['a'] = 2;
console.log(array,newArray);	// [{a:2}] [{a:2}]

var arr2 = ['we','are','Chinese'];
console.log(arr2.join('&'));	// we&are&Chinese

let arr3 = ['one','two','three','four','five'];
console.log(arr3.slice(1,4));	// ["two", "three", "four"]


let colors = [{color:'yellow'},1,2];
let newColor = colors.slice(0,1);
newColor[0].color = 'blue';
console.log(colors,newColor);	// [{color:'blue'},1,2]	[{color:'blue'}]


let month = ['Jan','Feb','Mar','Apr','May'];
console.log( month.toString() );	// Jan,Feb,Mar,Apr,May

console.log(month + 'Jun');	// Jan,Feb,Mar,Apr,MayJun


let players = ['kyrie','lebron','wade','kyrie',NaN,'james','durant'];
console.log( players.indexOf('kyrie') );	// 0
console.log( players.lastIndexOf('kyrie'));	// 3
console.log( players.indexOf('lebron'));	// 1
console.log( players.lastIndexOf('lebron'));// 1
console.log( players.indexOf(NaN) ); // 	-1

console.log(players.includes(NaN));	// true