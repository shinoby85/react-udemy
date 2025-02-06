// Primitive: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;

let userName: string;
userName = 'John';

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

let person: {
  name: string;
  age: number;
}

person = {
  name: 'Max',
  age: 25,
}

// person = {
//   isEmployee: true
// }

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = 'Typescript course';
// course = 6546;

// Union types

let course1: string | number = 'Typescript course';
course1 = 6546;

// Type aliases (псевдонимы типов)

type Person = {
  name: string;
  age: number;
}

let person1: Person;
let people1: Person[];

// Functions & types

function add(a: number, b: number): number {
  return a + b;
}

function print(value: any): void {
  console.log(value);
}

//Generic

/*
function insertAtBeginning(array: any, value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3, 4, 5];
const updatedArray = insertAtBeginning(demoArray, -1);
console.log(updatedArray[0].split(''));
*/

/*function insertAtBeginning<T>(array: T[], value: T): T[] {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3, 4, 5];
const updatedArray = insertAtBeginning(demoArray, -1);
console.log(updatedArray[0].split(''));*/

