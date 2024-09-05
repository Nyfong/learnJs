let users = [
  {
    id: 1,
    name: "Jonh Doe",
    email: "Jonhdoe@gmail.com",
    status: "Student",
  },
  {
    id: 2,
    name: "Dee Doe",
    email: "Deedoe@gmail.com",
    status: "Student",
  },
  {
    id: 3,
    name: "Meow Doe",
    email: "Meowdoe@gmail.com",
    status: "teacher",
  },
];
//using map or filter

// user.map(()=>{
//we called it callback function
//});
users.map((user, info) => {
  return console.log(user);
});
let studentUser = users.filter((user) => user.status === "Student");
console.log(` Student user:  ${studentUser}`);
