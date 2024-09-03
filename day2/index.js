let a = 5; // a is a block scope
a += 3;
console.log(a);
console.log("hello:");

//comparation
let b = 5;
let c = "5";
// the == is comparation of the value
console.log(b == c); //true
//tjhe === is comparation og the datatype
console.log(b === c); // false the type is int and char

//ternay oparator  if else short hand
let isMe = true;
const checkMe = isMe ? "Yes it's me" : "No it's not me";
console.log(checkMe);

//Nullish coalescing assignments (??=)
let num;
num ??= 10; // use to check variable null or undefinde  use to check when fetch api

console.log(num);

let number = null ?? 5;
console.log(number);

// OR oparator || use to handle error check falsy value
let userName = "";
userName = userName || (userName = "isEmpty"); // use to check the string is empty or not
console.log("UserName =", userName);

//example

const student = [
  {
    name: "Me",
    address: {
      city: "PP",
    },
  },
  {
    name: "you",
    address: null,
  },
];
student.forEach((e, i) => {
  console.log(student[i]?.address);
});
