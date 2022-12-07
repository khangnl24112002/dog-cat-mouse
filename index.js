var Dog = require('./Dog');
var dog = new Dog('Tom');
var Cat = require('./Cat');
var tom = new Cat();
dog.sayHi();
dog.eat(tom);
console.log(dog);