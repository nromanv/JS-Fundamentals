// nw1.2
console.log("Nakonechnyi");

// hw1.3
let carName;
let carModel;

carName = "Skoda";
carModel = "Karog";

console.log(carName, carModel);

carName = carModel;
console.log(carName, carModel);

// hw1.4
let student = {
    name: "roman",
    age: 38,
    married: true,
    info: null,
    newInfo: undefined
}; 

// hw1.5
let isAdult;
isAdult = confirm("Are you adult?");
console.log(isAdult);

// hw1.6
let name = "roman";
let surname = "nakonechnyi";
let group = 1;
let bornYear = 1985;
let marriedStatus = true;
typeof (name);
typeof (surname);
typeof (group);
typeof (bornYear);
typeof (marriedStatus);

console.log(group, bornYear, marriedStatus, name, surname);

let info = null;
let otherInfo = undefined;
console.log(info);
console.log(otherInfo);

// hw1.7
let userLogin = prompt("What is your login?");
let userEmail = prompt("What is your email?");
let userPassword = prompt("What is your password?");

alert(`Dear User, your login is ${userLogin}, your email is ${userEmail}, your password is ${userPassword}`);

//hw1.8

