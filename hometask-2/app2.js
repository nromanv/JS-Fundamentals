// task-1
/*
let a;
let b;
let c;

if (a > b > c){
    console.log("Висловлювальння істинне");
} else {
       console.log("Висловлювання не істинне");
}
*/

// task-2
/*
let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);

let res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);

let res3 = Boolean(x + y);
console.log(res3);
console.log(typeof res3);

let res4 = (x + y) / 0;
console.log(res4);
console.log(typeof res4);
*/

// task-3
/*
let isAdult = prompt("Введіть свій вік");
if(isAdult >= 18){
    console.log("Ви досягли повнолітнього віку");
} else {
    console.log("Ви ще надто молоді");
}
*/

// task-4
/*
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let counts = {};
let maxCount = 0;
let data = null;

for (let i = 0; i < arr.length; i++) {
  let element = arr[i];

  if (counts[element] === undefined) {
    counts[element] = 1;
  } else {
    counts[element]++;

    if (counts[element] > maxCount) {
      maxCount = counts[element];
      data = element;
    }
  }
}

console.log(data);

let newArr = arr.filter(element => element !== data);

console.log(newArr);
*/

//task-5
/*
let a = prompt("Введіть довжину сторони трикутника 1:");
let b = prompt("Введіть довжину сторони трикутника 2:");
let c = prompt("Введіть довжину сторони трикутника 3:");

let isNum = !isNaN(a) && !isNaN(b) && !isNaN(c);

if (isNum) {
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

    let resSP = (a + b + c) / 2;
    console.log(resSP);

    let resS = (Math.sqrt( resSP * (resSP - a) * (resSP - b) * (resSP - c))).toFixed(3);
    console.log(resS);

    if(a == b || b == c || c == a){
        console.log("Трикутник прямокутний");
    } else {
        console.log("Трикутник не прямокутний")
    }
} else {
    console.log("Incorrect data");
}
*/

//task-6
/*
function calc(a, b, op) {
    if(op == 1) {
        console.log(a - b);
    } else if (op == 2) {
        console.log(a * b);
    } else if (op == 3) {
        console.log(a / b);
    } else {
        console.log(a + b);
    }
}

calc(3, 6, 6);
*/

//task-7
/*
function findUnique(arr) {
    let counts = {};
  
    for (let i = 0; i < arr.length; i++) {  //цикл для проходення по масиву;
      let element = arr[i];
  
      if (counts[element] === undefined) {  //підрахунок повторень елементів у масиві;
        counts[element] = 1;
      } else {
        counts[element]++;
      }
    }
  
    for (let key in counts) {   //цикл проходить по кількості елементів у масиві;
      if (counts[key] > 1) {
        return false; //якщо знаходитмо повторення > 1;
      }
    }
  
    return true;
  }
  
  console.log(findUnique([1, 2, 3, 5, 6, 6, 6, 11]));\
  */

 