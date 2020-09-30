// for (let i = 2; i < 10; i++) {
//     if (i % 2 ) {
//         alert( i );
//     }
// }
// let i = 0;
// while (i < 3) {
//     alert( `number ${i}!` );    
//         i++;
//     }
    
// function checkAge(age) {
//     return (age > 18) ?  true :  confirm('Родители разрешили?')
//     };

// function pow(a, b) {
//     return (age > 18) ?  true :  confirm('Родители разрешили?')
//     };

//         pow();

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
// function showOk() {
//     alert("vu soglasnu");
// }
// function showCancel() {
//     alert("otmena");
// }
              //-//
// ask("Vu soglasnu?", showOk, showCancel);
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
// ask(
//     "Vu soglasnu?",
//     function() {alert("vu soglasnu");},
//     function(){alert("otmena");},
// );

// let age = prompt('сколько тебе лет?', 18);
// if (age < 18) {
//     welcome();
//     function welcome() {
//         alert('hello')
//     }
// } else {
//     welcome();
//     function welcome() {
//         alert("zdraste");
//     }   
// }
// welcome();

// let age = prompt("Сколько Вам лет?", 18);

// let welcome;

// if (age < 18) {

//   welcome = function() {
//     alert("Привет!");
//   };

// } else {

//   welcome = function() {
//     alert("Здравствуйте!");
//   };

// }

// welcome();

// let age = prompt("Сколько Вам лет?", 18);
// let welcome = (age < 18) ?
// function ()  {alert("Привет!"); } :
// function () {alert("Здравствуйте!");};
//     welcome();

// let sum = (a, b) => a + b;
// console.log(sum(2, 5));

//--//

// let sum = function (a, b) {
//     return a + b;
// };
// alert (sum(5,3));

// let age = prompt("Сколько Вам лет?", 18);
// let welcome = (age < 18) ?
// () => alert("Привет!") :
// () =>alert("Здравствуйте!");
// welcome();
// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// };
//     alert(sum(1,2));

// let ask = (question, yes, no)  {
//     if(confirm(question)) yes()
//     else no();
// }
// ask = ("Вы согласны?",) => {
//     () => alert("Вы согласились."); 
//     () => alert("Вы отменили выполнение.");
// }
// let userName = prompt("Введите имя", "Алиса");
// let isTeaWanted = confirm("Вы хотите чаю?");

// alert( "Посетитель: " + userName ); // Алиса
// alert( "Чай: " + isTeaWanted ); // true


// function pow(a, b) {
//     let result = 1;

//     for (let i = 0; i < b; i++) {
//         result  = result * a;
        
//     }
//     return result;
// }

// pow(2, 5);
// alert(pow(2,5));

// function pow(x, n) {
//     if (n < 0) return NaN;
//     if (Math.round(n) != n) return NaN;

//     let result = 1;

//     for (let i = 0; i < n; i = i + 1) {
//         result *= x;
//     }

//     return result; // :) сжульничаем!
// }

// let user = {};

// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;
// console.log(user);

// function isEmpty(obj) {
//     for(let key in obj) {
//         return false;
//     } 
//     return true;
// }
// isEmpty();

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//     }

//     let sum = 0;
//         for(let key in salaries) {
//             sum = sum + salaries[key];
//         }
//     alert(sum);

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//     };
    
//     function multiplyNumeric(obj) {
//         for (let key in obj) {
//         if (typeof obj[key] == 'number'){
//             obj[key] *= 2;
//             }
//         }
//     }



// let cat = {
//     length: 60,
//     weight: 4,
//     'eyes color': 'green eyes',
//     'color hair': 'grey',
// };



// function copyCat(obj) {
//     let clone = {};
//     for( let key in obj) {
//         clone[key] = obj[key];
//     }
//     return clone;
// };


// console.log(clone, copyCat(cat));

// function pow(x,n) {
//     let result = 1;

//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }
// console.log( pow(2,3) );

// function pow(x, n) {
//     if(n == 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// alert( pow(2,3) );

// let copyImg = (obj) => {
//     let copy = {};
//     for (let key in obj) {
//         copy[key] = obj[key];
//     }
//     return copy;
// };


// console.log(copyImg());
// alert('Я JavaScript!');
// let name = "Джон";
// let admin = name;
// alert(admin);


// let a = 1, b = 1;

// let c = ++a; 
// let d = b++;

// console.log(a, b, c, d);

// let pfp = prompt('name?');
// alert(pfp);

// if ("0") {
//     alert( 'Привет' );
//   }

// let paap = +prompt('Какое numer', '');

// if ( paap > 0 ) {
//     alert(1);
// } else if ( paap < 0) {
//     alert(-1);
// }
// else {
// alert(0);
// }

// let message = (login == 'Сотрудник') ? 
//     message = 'Привет': 
// (login == 'Директор') ?  
//     message = 'Здравствуйте' :
// (login == '') ? 
//     message = 'Нет логина':
// message = '';

// alert( alert(1) || 2 || alert(3) );

// alert( alert(1));
    // let login = prompt('who are you?');

    // if (login === 'Админ') {
    //     let password = +prompt('password', '');

    //         if(password === 'Я главный') {
    //             alert('hello');
    //         }
    //     else if (password === null || password === '') {
    //         alert('Отменено');
    //     } 
    //     else {
    //         alert('false password');
    //     } 
    // } else if (login === null || login === '') {
    //     alert('Отменено');
    // } else {
    //     alert('i dont know you');
    // }

// for (let i = 2; i < 10; i++) {
//     let result = i * 2;
//     console.log(result);
// }
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//       alert( i );
//     }
//   }
// let i = 0
// while (i < 3) {
//     alert( `number ${i}!` );
//     i++;
//   }

// let number;
//     do {
//     number = prompt('vvedite chislo'); 
// } while(number <= 100 && number);

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert( i ); // простое число
// }
// let browser;
// if (browser === 'Edge') {
//       alert( "You've got the Edge!" );
// } else if (browser ==='Chrome' || browser ==='Firefox' || browser ==='Safari' || browser === 'Opera') {
//       alert( 'Okay we support these browsers too' );
// } else {
//       alert( 'We hope that this page looks ok!' );
//   }

// const number = +prompt('Введите число между 0 и 3', '');
//   switch (number) {
//       case 0:
//         alert('Вы ввели число 0');
//           break;
//           case 1:
//             alert('Вы ввели число 1');
//               break;
//               case 2:
//                   case 3:
//                 alert('Вы ввели число 2, а может и 3');
//           break;
//   }

//     let x = prompt('please x');
//     let n = prompt('please n');

// function pow(x, n) {
//     let result = x;

//     for (let i = 1; i < n; i++) {
//         result = result * x;
//     }
//     return result;
// }

// if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//     alert( pow(x, n) );
// }

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// function yes() {
//     alert( "Вы согласны." );
// }
// function no() {
//     alert( "Вы отменили выполнение." );
//   }

//   ask("Вы согласны?", yes, no);

// function ask(question, yes, no)  {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () =>  { alert("Вы согласились."); },
//     () => { alert("Вы отменили выполнение."); }
// );


// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0;

// for (const key in salaries) {
//     sum += salaries[key];
//   }

// console.log(sum);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   for (const key in obj) {
//       if (typeof(obj[key]) == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }

//   console.log(menu);
// multiplyNumeric();

// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// console.log(menu);

// let calculator = {

//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },

//     read() {
//     this.a = +prompt('number');
//     this.b = +prompt('number');
//   },
// }

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down(){
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     alert(this.step);
//     return this;
//   }
// };

// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep();

// ladder.up().up().down().showStep();

// function Naaa() {
//   alert(new.target);
// }
// Naaa();

// new Naaa();
// function Calculator() {
//   this.read = function () {
//     this.a = +prompt('a');
//     this.b = +prompt('b');
//   }
//   this.sum = function () {
//     return this.a + this.b;
//   }
//   this.mul = function () {
//     return this.a * this.b;
//   }
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );
  

// function Accumulator(startingValue) {
//   this.value = startingValue;

//   this.read = function() {
//     this.value +=  + +prompt('Сколько нужно добавить?', 0);
//   };

// }

// let accumulator = new Accumulator(5);
// accumulator.read();
// console.log( accumulator.value );
// accumulator.read();
// console.log( accumulator.value);
// accumulator.read();
// console.log( accumulator.value );
// alert(accumulator.value);


// let number1 = +prompt('number');
// let number2 = +prompt('number');


// let result = (number1 + number2) / 2;
// result = Math.round(result);
// console.log(result);


// let num = prompt('Please enter three numbers separated by commas:');
// const numbers = num.split(',');

// let nums = (Number(numbers[0]) + Number(numbers[1]) + Number(numbers[2])) / numbers.length;
// console.log(Math.round(nums));

// let dateB = prompt('date birthday?');

//   if (dateB.length !== 4) {
//     console.log('try again more');
//   } 
//   else if(+dateB > 2019 || +dateB < 1850) {
//   console.log('try again');
// }  
// else  {
//   let age = 2020 - +dateB;
//   console.log(age);
// }


// let number = +prompt( 'vvedite number');
// let numberRandom = Math.floor(Math.random() * (10 - 1)) + 1;

// if (number === numberRandom) {
//   console.log('you are right');
// } else if (number > numberRandom || number < numberRandom) {
//   console.log('try again');
// }



// Math.floor(Math.random() * (max - min)) + min;

// let age = +prompt('how old are you?');

// if (isNaN(age)) {
//   console.log('enter number');
// }
// else if (age >= 18) {
//   console.log('welcome');
// } else if (age < 12 ) {
//   console.log('goodbue');
// } else {
//   console.log('you must grow');
// }


// let age = +prompt('how old are you?');
// let experionceYears = +prompt('experionce in Years');

// switch (age) {
//   case (age > 30 && age < 55):
//     console.log('ok');
//     break;
//     case (age < 20):
//       console.log('grow up');
//       break;
// }

// switch (experionceYears) {
//   case (age > 1 ):
//     console.log('normal');
//     break;
//     case (age < 1):
//       console.log('buy');
//       break;
// }

// (age > 30 && experionceYears > 1) ? console.log('welcome for work') : console.log('wrong');



// do {
//   userIsHappy = confirm("Are you happy that the number is " + ++number + "?");
// } while (userIsHappy);

// for (let number = 1; userIsHappy = true; number++) {
//   userIsHappy = confirm("Are you happy that the number is " + +number + "?");
// }

// let number;
// let randomNumber;  


//   do {
//     number = +prompt('guess number'); 
//     randomNumber = Math.floor( Math.random() * (10 - 1)) * 1;

//     if (!number) break;
//     if (number > 10) {
//       alert("Введите число меньше 10!!!"); 
//     } else if (+number === randomNumber) {
//       console.log(randomNumber);
//       alert("Вы угадали!!!") ;
//       break;
//     } else {
//       alert("Вы не угадали!!!"); 
//   } 
//   } while (!(number === randomNumber));


  // let number;
  // let randomNumber; 

  // for (let i = 0; i <= 10; i++) {
  //   number = +prompt('guess number'); 
  //   randomNumber = Math.floor( Math.random() * (10 - 1)) * 1;
  //   if (!number) break;
  //   if (number > 10) {
  //     alert("Введите число меньше 10!!!"); 
  //   } else if (number === randomNumber) {
  //       console.log(number);
  //       alert("Вы угадали!!!") ;
  //       break;
  //   } else {
  //     alert("Вы не угадали!!!"); 
  //   }
  // }

  // let userNum = +prompt ('use number < 100');
  
  // // for (let i = userNum; i < 100; i = i + userNum) {
  // //   console.log(i);
  // // }

  // for (let i = 1; i < 10; i = i + 1) {
  //   // console.log( i * userNum );
  // }

  // let counter =  +prompt (' how much use number < 100');
  // let i = 1;
  // do {
  //   if (userNum > 10) {
  //     console.log("Введите число меньше 10!!!!!!!!") 
  //     break;
  //   } else if( userNum < 10) {
  //     console.log(userNum * i);
  //     i = i + 1;
  //   }
  // } while (i <= counter);


// let number;
// let random;

// for (let i = 0; i < 10; i++) {
//   number = +prompt ('use number ');
//   random = Math.floor(Math.random() * ( 10 - 1)) + 1;
//   if (number === "" || number === null || !number) {
//     console.log('loose');
//     break;
//   } else if (number === random) {
//     console.log( `${number}` + 'you are win');
//   }
// }

// let number = +prompt ('use number ');

// for (let i = 1; i < 10; i = i + 1) {
//   // console.log(number * i);
// }

// let counter =  +prompt (' how much use number');

// for (let i = 1; i <= counter; i++) {
//   if (counter > 10) {
//     console.log('menshe');
//   } else {
//     console.log(number * i);
//   }
// }


// let number = +prompt('use number < 100');

// for (let i = number; i <= 100; i = i + i) {
//   // console.log(i);
// }

// let counter = +prompt('use number < 10');

// for (let i = 1; i <= counter; i++) {
//   if (counter > 10 ) {
//     console.log('no');
//   } else {
//     console.log(number * i);
//   }
// }

// function pow(a, b) {
//   const num = a;
//   if (b === 0) return 1;
//   for (let i = 1; i <= b; i++) {
//     a = a * num;
//   }
//   return a;
// }
// console.log(pow(2, 3));

// function pow(a, b) {
//   const number = a;
//   if (b === 0 )  return 1;
//   for (let i = 1; i <= b; i++) {
//     a = a * number;
//   }
//   return a;
// }


// const run = function(number, randomNumber) {
//     for (let i = 0; i < 3; i++) {
//     number = +prompt('number?');
//     randomNumber = Math.floor(Math.random() * (10 - 1) * 1);
    
//     if (!number || number === "" || number === null) {
//       break;
//     } 
//     else if (number === randomNumber) {
//       console.log('you are win');
//     }
//   }
// }

// const request = function() {
//   let number;
//   let randomNumber;
//   run(number, randomNumber)
// }

// request();

// let cat = {
//   nose: 'rose',
//   color: 'black',
//   name: 'Grey',
// };

// // function copy(obj) {
// //   let clone = {};
// //   for (const key in obj) {
// //     clone[key] = obj[key];
// //     }
// //     return clone;
// //   };

// // console.log(cat);
// // console.log( copy(cat));

// const length = function (obj) {
//   let counter = 0;
//   for (const key in obj) {
//     if (typeof obj[key] === 'string') {
//       counter++;
//     };
//   }
//   return counter;
// }
// console.log(length(cat));

// const magicBook = {
//   recipes: {
//       golem: {
//           bone: 10,
//           stone: 100,
//           nail: 100,
//           poo: 53
//       },
//       littleDevil: {
//           lava: 10,
//           evil: 999
//       },
//   },
// };

// const kitchen = {
//   bone: 999,
//   stone: 999,
//   nail: 999,
//   poo: 999,
//   lava: 999,
//   evil: 999,
//   kettle: { 
//       material: 'metal',
//       ingridients: {},
//   },
//   addIngridientToKettle(nameOfIngridient, amount) {
//     this.kettle.ingridients[nameOfIngridient] = amount;
//     if (this[nameOfIngridient] >= amount) {
//       this[nameOfIngridient] = this[nameOfIngridient] - amount;
//     }
//     return this.nameOfIngridient;
//   },
//   cook(recipe, name) {
//     let result = true;
//     for (const key in recipe) {
//         if (this.kettle.ingridients[key] !== recipe[key]) {
//           console.log('Lack of ingredients');
//           return result = false;
//         }
//       }
//       if (recipe) {
//         return console.log('We can cook' + ':' + name);
//       }
//     }
//   };

// kitchen.addIngridientToKettle('lava', 10);
// kitchen.addIngridientToKettle('evil', 999);

// kitchen.cook(magicBook.recipes.littleDevil, 'littleDevil');

// console.log(kitchen);

// const grades = {
//   Junior: 'junior',
//   Middle: 'middle',
//   Senior: 'senior',
// };

// const bonuses = {
//   'C++': 100,
//   Rust: 150,
//   default: 50,
// };
// const violation = {
//   sluggish: 'sluggish',
//   frequentMistakes: 'frequentMistakes',
//   absenteeism: 'absenteeism',
//   default: 'default',
// };
// const violationTax = {
//   [violation.sluggish]: 0.2,
//   [violation.frequentMistakes]: 0.35,
//   [violation.absenteeism]: 0.5,
//   [violation.default]: 0,
// };

// const gradeTax = {
//   [grades.Junior]: 0.25,
//   [grades.Middle]: 0.5,
//   [grades.Senior]: 0.75,
// };

// function User(name, language, grade = grades.Junior, violation = violationTax.sluggish) {
//   this.name = name;
//   this.grade = grade;
//   this.salary = 1000;
//   this.language = language;
//   this.tasks = 0;
//   this.endTask = 0;
//   this.violation = violation;

//   this.addTask = () => {
//     this.tasks++;
//   };

  

//   this.finishTask = () => {
//     if (this.tasks > 0) {
//       this.tasks--;
//       this.endTask++;
//       this.salary +=
//         (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
//     }
//   };

//   this.upgrade = () =>  {
//     if (this.endTask >= 4) {
//       if (this.grade = grades.Junior) {
//         this.grade = grades.Middle;
//       } else if (this.grade = grades.Middle) {
//         this.grade = grades.Senior;
//       } 
//       } else {
//         console.log('you are loser');
//       }
//   };

//   this.fine = () =>  {
//     this.salary = this.salary - (this.salary * violationTax[violation]);
//     };
// }

// const user = new User('John', 'C++', grades.Junior, violation.absenteeism);
// const user1 = new User('Vasya', 'Rust', grades.Senior);
// const user2 = new User('Nifertiti', 'Bu', grades.Middle);

// user.addTask();
// user.addTask();
// user.addTask();
// user.addTask();
// user.addTask();

// user.finishTask();
// user.finishTask();
// user.finishTask();
// user.finishTask();


// user.upgrade();
// user.fine();

// console.log(user);

// let arr = ["I", "go", "home"];
// delete arr[1];
// alert (arr[1]);
// console.log(arr.length);


// let arr = [1, 2, 5];

// arr.splice(-1, 0, 3, 4);
// console.log(arr);

// let arr = ["t", "e", "s", "t"];
// arr.slice();
// alert (arr.slice());

// let arr = [1, 2];
// let lll = ['s',' d', 'f']
// alert( arr.concat(lll));
// alert( arr.concat([3, 4], [5, 6]) );
// alert( arr.concat([3, 4], 5, 6) ); 

// let arr = [1, 2];

// let arrayLike = {
//   0: "что-то",
//   length: 1
// };
// alert( arr.concat(arrayLike) ); 

// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//   alert(`${item} имеет позицию ${index} в ${array}`);
// });

// let users = [
//   {id: 1, name: "Вася"},
//   {id: 2, name: "Петя"},
//   {id: 3, name: "Маша"}
// ];

// let user = users.filter (function (item) {
//   return item.id < 3;
// })
//   alert(user.length);

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// alert(lengths);

// let arr = [ 1, 2, 15 ];
// arr.sort();

// alert(arr);

// function compareNumeric(a, b) {
//   if (a > b)  return 1;
//   if ( a == b) return 0;
//   if (a< b) return -1;
// }

// let arr = [1, -2, 15, 2, 0, 8]
// arr.sort(compareNumeric);
// console.log(arr);

// [1, -2, 15, 2, 0, 8].sort(function(a, b){
//   alert(a + ' <>' + b);
// })

// let names = 'Вася, Петя, Маша';
// let arr = names.split(',',2);

// for (let name of arr) {
//   alert( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
// }

// alert(arr);

// let str = "тест";

// alert( str.split('') ); 

// let arr = ['Вася', 'Петя', 'Маша'];
// let str = arr.join(';');

// console.log(typeof str);

// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current, 0);
// alert(result);


// function camelize(str) {
//   return str
//   .split('-')
//   .map((my, index) => index === 0 ? my : my[0].toUpperCase() + my.slice(1))
//   .join('');
// }
// let str = 'my-short-string';
// console.log(camelize(str));

// let arr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
//   return arr.filter(item => (a <= item && item <= b));
// }

// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); 

// alert( arr ); 


// function Counter() {
//     let value = 0;
//     this.inc = function() {
//         return ++value;
//     };
//     this.dec = function() {
//         return --value;
//     };
//     this.value = function () {
//         return value;
//     }
// }

// const iterator = new Counter();

// console.log(iterator.inc()); // увеличивает значение на 1
// console.log(iterator.inc()); // еще на 1
// console.log(iterator.dec()); // уменьшает на 1
// console.log(iterator.value()); 


// function ExampleTask () {
//     console.log(this);
//     this.a = 2;
// }

// function Example () {
//     ExampleTask.call(this);
//     console.log(this);
// }

// Example.prototype = Object.create(ExampleTask.prototype);
// Example.prototype.constructor = Example;
// const ex = new Example();

// //ex {} -> {}  --> ExampleTask.prototape --> Object.prototape

// console.log(ex);

const element = (tagName) => document.createElement(tagName);
const addContent= (element, content)  => {
    element.innerText = content;

    return element;
};

const addAttributes = (element, attributes = {}) => {
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    return element;
}
const div = (content, attributes) => {
    addAttributes(addContent(element('div'), content), attributes)
};

const ul = (attributes) => addAttributes(element('ul'), attributes);


const li = (content, attributes) => 
    addAttributes(addContent(element('li'), content), attributes);


const append = (wrapper, element) => {
    (Array.isArray(element)? element : [element]).forEach((el) =>
        wrapper.append(el)
        );
    
    console.log(wrapper);
    return wrapper;
};

append(
    document.getElementById('app'), 
    append(ul(
        {
        class: 'alalal',
    }
    ), 
    [li('1', {
        class: 'abc',
    }),
    li('2'),
    li('3'),
    li('4')
]
)
);

