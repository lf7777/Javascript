function Person(name,age,job,hei){
	this.name=name;
	this.age=age;
	this.job=job;
}

let mother = new Person('mm',22,33,44)
Person.prototype.eye='blue';
console.log(mother.eye)
