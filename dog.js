function Dog(name){
	this.stomach = [];
	this.name = name;
}

Dog.prototype.eat = function(cat){
	this.stomach.push(cat);
}

Dog.prototype.sayHi = function(){
	console.log('Hi! Iam a dog. My name is ' + this.name);
}

module.exports = Dog;