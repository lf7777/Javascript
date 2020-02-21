//总结:
//get,set都是函数,简化了在对象中设置方法的步骤,将属性名直接作为函数.而不需要再写一个function
//
//set用法
//let person={
//	language:'',
//	set lang(lang){
//		this.language=lang;
//	}
//}

//person.lang='哈哈哈df';
//console.log(person.language);

//get用法
let person={
	language:'哈哈',
	get lang(){
		return this.language;
	}
}

console.log(person.lang);

