/**
 * Implement isIdentical function in helper.js
 *
 * It should take two objects and return a boolean value that tells if the fields of the objects are the same.
 *
 * Objects will only have plain fields (strings, numbers or booleans)
 * */
import { isIdentical } from './helper.js';
const cat = {
    name: 'Rex',
    isHappy: true,
    age: '2',
}
const dog = {
    name: 'Taks',
    age: '2',
    isHappy: true,
}
console.log(isIdentical(cat, dog));