// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let a = [1, 2, 3];
let b = ((arr) => [...arr])(a);
let c = ((arr) => arr)(a);
a.push('a');
b.push('b');
c.push('c');

console.log(a, '\n', b, '\n', c);

//==============================================================

// The ...(spread operator) works by returning each value from index 0 to index length-1.

let Array1 = [1, 2, 3]; //1,2,3

let Array2 = [4, 5, 6]; //4,5,6

//Create new array from existing array

let copyArray = [...Array1]; //1,2,3

//Create array by merging two arrays

let mergedArray = [...Array1, ...Array2]; //1,2,3,4,5,6

//Create new array from existing array + more elements

let newArray = [...Array1, 7, 8]; //1,2,3,7,8

console.log(
  Array1,
  '\n',
  Array2,
  '\n',
  copyArray,
  '\n',
  mergedArray,
  '\n',
  newArray
);
