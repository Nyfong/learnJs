const myArray = [1, 2, 3];
const newArray = new Array(1, 2, 3, 4);
console.log(newArray[2]);
//Arrays in JavaScript are sparse, meaning
//that we can also assign variables to random locations even though previous cells were undefined. For example:
var yourArray = [];
yourArray[3] = "hello";
//console.log(yourArray);
//Because JavaScript Arrays are just special kinds of objects,
// you can have elements of different types stored together in the same array.
//The example below is an array with a string, a number, and an empty object.

const arraySpacial = ["myName", 22, { hi: "hello nigga", addres: null }];
console.log(arraySpacial[2]?.addres ?? "not found");
