// Classes are like blue prints
class Person {
    constructor(name = 'Anonymous') {
        this.name = name;
    }
}

const me = new Person('Andrew Thomsen');
console.log(me); 

const other = new Person();
console.log(other);