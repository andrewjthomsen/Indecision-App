'use strict';

var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar', nameVar);

var nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

var nameConst = 'Frank';
console.log('nameconst', nameConst);

// Block Scoping -- acessible in braces

var fullName = 'Andrew Mead';
var firstName = void 0;

if (fullName) {
    var _firstName = fullName.split(' ')[0];
    console.log(_firstName);
}

console.log(firstName);
