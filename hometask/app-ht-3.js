//task-1
/*
function compact(arr) {
    const arr2 = [];

    for (let i = 0; i < arr.length; i++){
        let element = arr[i];

        if (!arr2.includes(element)) {
            arr2.push(element);
        }
    }
    return arr2;
}

const arr = [5, 3, 4, 5,6,7,3];
const arr2 = compact(arr);
console.log(arr2); 
*/

//task-2
/*
function createArray(start, end) {
    const arr = [];

    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

const start = 2;
const end = 7;
const res = createArray(start, end);
console.log(res);
*/

//task-3
/*
function num(a, b) {
    let count = 1;
    
    for (let i = a; i <= b; i++) {
      for (let j = 0; j < count; j++) {
        console.log(i);
      }
      count++;
    }
  }
  
  const a = 1;
  const b = 5;
  num(a, b);
*/

//task-4
/*
function randArray(k) {
    const num = [];

    for (let i = 0; i < k; i++) {
        let randomNum = Math.floor(Math.random() * 500) + 1;
        num.push(randomNum);
    }

    return num;
}

let res = randArray(5)
console.log(res);
*/

//task-5
/*
function sepArr(arr) {
    let res = [];
  
    let num = arr.filter(function(element) {
      return typeof element === 'number';
    });
    res.push(num);
  
    let str = arr.filter(function(element) {
      return typeof element === 'string' && !Array.isArray(element);
    });
    res.push(str);

    let arrays = arr.filter(function(element) {
      return Array.isArray(element);
    });
    res.push(arrays);
  
    return res;
  }
  
  let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
  let arrNew = sepArr(arr);
  
  console.log(arrNew);
  */