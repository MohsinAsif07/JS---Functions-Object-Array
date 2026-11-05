// Q1: Create a function that takes an array of numbers and returns a new array where each number is squared. Use map method.
const numbers = [2, 3, 4, 5];
function squareNumbers(arr) {
  return arr.map(n => n * n);
}
console.log("Q1 - Squared:", squareNumbers(numbers));

// Q2: Write a function that takes an array of objects with name and age properties. Filter out only the users whose age is greater than 18.
const users = [
  { name: "Ali", age: 16 },
  { name: "Sara", age: 22 },
  { name: "Ahmed", age: 19 },
  { name: "Ayesha", age: 15 }
];
function filterAdults(arr) {
  return arr.filter(user => user.age > 18);
}
console.log("Q2 - Adults:", filterAdults(users));

// Q3: Given an array of products with price, use reduce to calculate the total price of all products.
const products = [
  { name: "Shirt", price: 1500 },
  { name: "Pant", price: 2500 },
  { name: "Shoes", price: 4000 }
];
const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log("Q3 - Total Price:", totalPrice);

// Q4: Create an array of students with marks. Sort the array in descending order based on marks.
const students = [
  { name: "Ali", marks: 75 },
  { name: "Sara", marks: 92 },
  { name: "Ahmed", marks: 68 },
  { name: "Ayesha", marks: 88 }
];
// slice() isliye lagaya taake original array change na ho
const sortedStudents = students.slice().sort((a, b) => b.marks - a.marks);
console.log("Q4 - Sorted Descending:", sortedStudents);

// Q5: Write a function that takes an array of strings and finds the first string with length greater than 5 using find method.
const words = ["hi", "hello", "bye", "javascript", "code"];
function findLongWord(arr) {
  return arr.find(str => str.length > 5);
}
console.log("Q5 - First word > 5:", findLongWord(words));

// Q6: Create an object named person with properties firstName, lastName and a method fullName that returns the full name using this keyword. Explain how this works in this context.
const person = {
  firstName: "Muhammad",
  lastName: "Ali",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log("Q6 - Full Name:", person.fullName());
// Explanation: Yahan 'this' ka matlab hai 'person' object khud.
// Jab hum person.fullName() call karte hain, to 'this' person ko point karta hai,
// isliye this.firstName = person.firstName ban jata hai.

// Q7: What will be the output of this code and why? Create an example to show the difference between regular function and arrow function when using this inside an object.
const obj = {
  name: "BillBaba",
  regularFunc: function() {
    console.log("Q7 - Regular Function this.name:", this.name);
  },
  arrowFunc: () => {
    console.log("Q7 - Arrow Function this.name:", this.name);
  }
};
obj.regularFunc(); // Output: "BillBaba" - Kyunki regular function me 'this' us object ko point karta hai jisne usko call kiya.
obj.arrowFunc();   // Output: undefined - Kyunki arrow function ka apna 'this' nahi hota, wo bahar wale scope (window/global) ka 'this' leta hai, jahan name nahi hai.

// Q8: Write a function that takes an array of numbers, filters even numbers, then doubles them using map, and finally returns the sum of those doubled numbers using reduce. Do it in a chain.
const numsForChain = [1, 2, 3, 4, 5, 6];
function evenDoubleSum(arr) {
  return arr
    .filter(n => n % 2 === 0) // [2, 4, 6]
    .map(n => n * 2)          // [4, 8, 12]
    .reduce((sum, n) => sum + n, 0); // 24
}
console.log("Q8 - Even Double Sum:", evenDoubleSum(numsForChain));

// Q9: Create an array of employees with name, department and salary. Write code to: a) Find an employee who works in HR department b) Sort employees by salary in ascending order
const employees = [
  { name: "Ali", department: "IT", salary: 80000 },
  { name: "Sara", department: "HR", salary: 60000 },
  { name: "Ahmed", department: "Finance", salary: 70000 },
  { name: "Ayesha", department: "HR", salary: 55000 }
];
// a) Find employee in HR
const hrEmployee = employees.find(emp => emp.department === "HR");
console.log("Q9a - HR Employee:", hrEmployee);

// b) Sort by salary ascending
const sortedBySalary = employees.slice().sort((a, b) => a.salary - b.salary);
console.log("Q9b - Sorted by Salary:", sortedBySalary);

// Q10: Create a function that takes an object and returns an array of its keys and values separately, then create a new object from an array of key-value pairs. Use Object.keys, Object.values, and Object.fromEntries.
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022
};
console.log("Q10 - Keys:", Object.keys(car));
console.log("Q10 - Values:", Object.values(car));

const entries = [["name", "Ali"], ["age", 20], ["city", "Karachi"]];
const newObj = Object.fromEntries(entries);
console.log("Q10 - New Object from Entries:", newObj);
