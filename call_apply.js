//call()方法
//总结:通过call可以从一个对象的函数中调用另一个对象的属性值,作为其的参数,而且还以传入新的参数.(注意,参数名字需要一致才可以调用.)
//call传入的第一个参数,函数只会寻找这个参数中的参数,如果这个参数本来就是一个值,那么会忽略掉.call()方法可以接收的是一个参数列表.
//apply()方法
//apply()接收的是一个参数和一个数组.其他地方和call()方法无异.
let person={
	func:function(){
		return this.name	
	}
}

let person1={
	name : 'bill'
}

console.log(person.func.call(person1))


Math.max.apply(null,[1,3,4])
Math.max.apply(1,[1,3,4])
Math.max.apply('',[1,3,4])
Math.max.apply(Math,[1,3,4])

