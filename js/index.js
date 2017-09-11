//闭包
function fn(){
	var num=10;
	return fn1;      //返回fn1这个函数本身，而不是num值  
	function fn1(){
		num++;
		return num;
	}
} 
var result=fn();         //  将fn1这个函数赋给result   闭包
console.log(result())   //   调用的是fn1这个函数   num还是局部变量 
// Arrow Function  箭头函数   ES6新增
// var fn=function(a){
// 	return a;
// }
// var fn=(a)=>a;
// alert(1);

//var 有变量的提升 变量的作用域提升到声明之前
//循环完之后会释放一个全局变量 
// alert(num);
// var num=1;
// //let 
// alert(num);
// let num=10; 
// let num=20;
// //有局部变量，全局变量
// //用let声明的变量，在声明之前不能调用和访问到变量(报错)
// //不存在变量提升，声明之前的区域叫做暂时性的死区
// //用let声明的变量，同一个作用域里，不能用let再声明同一个变量
// //let 块级作用域
// {
// 	let num=10;
// 	console.log(num);
// }
// console.log(num);
// //通过大括号来划分函数作用域
// let num='a';
// function fn(){
// 	alert(num);
// 	if(true){
// 		let num=10;
// 		console,log(num);
// 	}
// }
// fn();
// alert(num);
// //var 
// var arr=[];
// for(var i=0;i<10;i++){
// 	arr[i]=function(){
// 		alert(i);
// 	}
// }
// arr[2]();    //10    函数调用的时候，循环开始走，输出的时候循环已经结束
// arr[5]();    //10 	 不管 arr[]为几，循环都已经结束，所以都是10
// //let 
// var arr=[];
// for(let i=0;i<10;i++){
// 	arr[i]=function(){
// 		alert(i);
// 	}
// }
// arr[2]();    //2    每次都是新的作用域，会保存每次循环的值
// arr[5]();    //5

// const i=1;    
// // alert(i);

// let str='张三';
// console.log(escape(str));

// Number(false);     //0
// Number(null);      //0
// Number(undefined);   //NaN
// Number('123');     //123
// Number(0123);      //83    0开头默认八进制
// Number(123.00);    //123
// Number('123.00');  //123
// Number('123.01.2');   //NaN     不是一个标准的小数
// Number('123px');   //NaN
// console.log(Number('abcd'));    //NaN
// console.log(parseFloat('100px'));    //NaN
// console.log(isNaN('abcd'));      //



//json
// let zhangsan={}
//构造函数
function Person(){    //

}
let zhangsan=new Person();   //构造出一个对象 
let lisi=new Person();
//添加属性、方法
//谁    什么 属性值
zhangsan.age=18;
zhangsan.name='haha';
zhangsan.sex='男'
zhangsan.say=function(){
	alert(zhangsan.name);
}
lisi.age=20;
lisi.name='bb';
lisi.sex='女';
//访问
//谁  什么
alert(zhangsan.age)
alert(zhangsan.name)
alert(zhangsan.sex)
// alert(lisi.age)
// alert(lisi.name)
// alert(lisi.sex)	