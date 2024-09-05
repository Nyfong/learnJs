const myArray = [1, 2, 3];
const newArray = new Array(1, 2, 3, 4); // constructor
console.log(newArray[2]);
//Arrays in JavaScript are sparse, meaning
//that we can also assign variables to random locations even though previous cells were undefined. For example:
var yourArray = [];
yourArray[3] = "hello";
//console.log(yourArray);

//decleare an array
const anArr = new Array();

//Array mathods
// push pop unshift concat

//copy Arrays   spare oparetor ...
let arr1 = [1, 2, 3, 4];
let arr2 = [4, 5];
let copyArr = [...arr1, ...arr2, 6, 7];
console.log(copyArr);

//one more method using copy
//copyArr.slice(start index, end index);
let sliceCopy = copyArr.slice(1, 3);
console.log(`using slice copy ${sliceCopy}`);

//Because JavaScript Arrays are just special kinds of objects,
// you can have elements of different types stored together in the same array.
//The example below is an array with a string, a number, and an empty object.

const arraySpacial = ["myName", 22, true, { hi: "hello nigga", luyJay: null }];
console.log(arraySpacial[3]?.luyJay ?? "ABA: 500 148 723 NYFONG");

//map and filter
