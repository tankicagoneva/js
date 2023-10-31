// day3

// 1.

      // console.log(2 * 3 + 1); // expected 7
      // console.log(2 ** 4); // expected 16
      // console.log(5 * 1); // expected 5
      // console.log(8 ** 2 - 5 ** 2); // expected 39

// 2. 

      // console.log(4 * 5 == 20);
      // console.log(6 * 5 == "30");
      // console.log(-17 < 0);
      // console.log(25 > 1);
      // console.log(2 + 2 > 2 - 4);

// 3.

      // let width = prompt("Volume of the box, enter width", 0);
      // let height = prompt("Volume of the box, enter height", 0);
      // let length = prompt("Volume of the box, enter length", 0);
      // let volume = width * height * length;
      // alert(`Calculated box volume is ${volume}`);



--------------------------------------------------------------------------

// day 4


// 1.
      
      // let grade = prompt("Enter your grade", 0);

      // if (grade >= 5.5) {
      //   console.log("Excellent!");
      // }

      
// 2.
      // let grade = prompt("Enter your grade", 0);
      // if (grade >= 5.5) {
      //   console.log("Excellent!");
      // } else {
      //   console.log("Not excellent");
      // }

// 3.
      
      // let number = prompt("Enter a number to check if its even or odd", 0);
      // if (number % 2 == 0) {
      //   console.log("The number is EVEN!");
      // } else {
      //   console.log("The number is ODD!");
      // }

// 4.

      // let number = prompt("Enter a number between 0 and 9", 0);
      // if (number == 0) {
      //   console.log("zero");
      // } else if (number == 1) {
      //   console.log("one");
      // } else if (number == 2) {
      //   console.log("two");
      // } else if (number == 3) {
      //   console.log("three");
      // } else if (number == 4) {
      //   console.log("four");
      // } else if (number == 5) {
      //   console.log("five");
      // } else if (number == 6) {
      //   console.log("six");
      // } else if (number == 7) {
      //   console.log("seven");
      // } else if (number == 8) {
      //   console.log("eight");
      // } else if (number == 9) {
      //   console.log("nine");
      // } else {
      //   console.log("Number too big");
      // }
      
// 5.
      // let number = prompt("Enter a number", 0);
      // if (!((number >= 100 && number <= 200) || number == 0)) {
      //   console.log("invalid");
      // }

// 6.
      // let gender = prompt("Enter gender (m or f)");
      // let userAge = prompt("Enter age");

      // if (userAge < 16) {
      //   if (gender === "m") {
      //     console.log("Master");
      //   } else if (gender === "f") {
      //     console.log("Miss");
      //   }
      // } else {
      //   if (gender === "m") {
      //     console.log("Mr.");
      //   } else if (gender === "f") {
      //     console.log("Ms.");
      //   }
      // }

// 7.

      // let number = prompt("Enter a number", 0);
      // if (number > 90 && number < 110) {
      //   console.log("Bingo!");
      // } else {
      //   console.log("Miss");
      // }

// 8.
      // let number = prompt("Enter a number", 0);
      // let result = number > 90 && number < 110 ? "Bingo!" : "Miss";
      // console.log(result);


// 9.
      // let firstNumber = Number(prompt("Enter first number"));
      // let secondNumber = Number(prompt("Enter second number"));
      // let operand = prompt("Enter operand (+, -, * or /)");
      // let result;

      // if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
      //   switch (operand) {
      //     case "+":
      //       result = firstNumber + secondNumber;
      //       break;
      //     case "-":
      //       result = firstNumber - secondNumber;
      //       break;
      //     case "*":
      //       result = firstNumber * secondNumber;
      //       break;
      //     case "/":
      //       result = firstNumber / secondNumber;
      //       break;
      //     default:
      //       result = "Error: unknown operand";
      //   }
      // } else {
      //   result = "Error: at least one of the entered values is not a number";
      // }
      // alert(result);

//10. 
      //    let foodName = prompt(
      //   "Enter you favourite fruit or vegetable: banana, apple, kiwi, cherry, lemon,
      //    grapes, tomato, cucumber, pepper or carrot",
      // );
      
      // if (
      //   foodName === "banana" ||
      //   foodName === "apple" ||
      //   foodName === "kiwi" ||
      //   foodName === "cherry" ||
      //   foodName === "lemon" ||
      //   foodName === "grapes"
      // ) {
      //   console.log("The food you entered is fruit.");
      // } else if (
      //   foodName === "tomato" ||
      //   foodName === "cucumber" ||
      //   foodName === "pepper" ||
      //   foodName === "carrot"
      // ) {
      //   console.log("The food you entered is vegetable.");
      // } else {
      //   console.log("Unknown food");
      // }

// 11. 
      // let animal = prompt("Enter an animal");
      // switch (animal) {
      //   case "dog":
      //     console.log("mammal");
      //     break;
      //   case "crocodiles":
      //   case "tortoises":
      //   case "snakes":
      //     console.log("reptiles");
      //     break;
      //   default:
      //     console.log("unknown");
      // }


// day 5 
      
// 6.
      // function add(a, b) {
      //   if (!Number.isInteger(a) || !Number.isInteger(b)) {
      //     return NaN;
      //   }
      //   return a + b;
      // }
      
      // function sub(a, b) {
      //   if (!Number.isInteger(a) || !Number.isInteger(b)) {
      //     return NaN;
      //   }
      //   return a - b;
      // }
      
      // function mult(a, b) {
      //   if (!Number.isInteger(a) || !Number.isInteger(b)) {
      //     return NaN;
      //   }
      //   return a * b;
      // }

// 7.
      // let add = (a, b) =>
      //   !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
      // let sub = (a, b) =>
      //   !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
      // let mult = (a, b) =>
      //   !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;

// BONUS 1.
      // function fruitShop() {
      //   const day = prompt("Enter a day").toLowerCase();
      //   const fruit = prompt("Enter a fruit").toLowerCase();
      //   const quantity = parseFloat(prompt("Enter quantity", 0));
      //   let price = 1.0;
      
      //   if (
      //     day === "monday" ||
      //     day === "tuesday" ||
      //     day === "wednesday" ||
      //     day === "thursday" ||
      //     day === "friday"
      //   ) {
      //     if (fruit === "banana") {
      //       price = price * 4.4;
      //     } else if (fruit === "apple") {
      //       price = 2.2;
      //     } else if (fruit === "orange") {
      //       price = 1.85;
      //     } else if (fruit === "grapefruit") {
      //       price = 0.45;
      //     } else if (fruit === "kiwi") {
      //       price = price * 2.7;
      //     } else if (fruit === "pineapple") {
      //       price = 7.5;
      //     } else if (fruit === "grapes") {
      //       price = 3.85;
      //     } else {
      //       console.log(
      //         "Please add a valid fruit (banana, apple, orange, grapefruit, kiwi, pineapple, grapes)",
      //       );
      //     }
      //   } else if (day === "saturday" || day === "sunday") {
      //     if (fruit === "banana") {
      //       price = 5.7;
      //     } else if (fruit === "apple") {
      //       price = 4.25;
      //     } else if (fruit === "orange") {
      //       price = 1.9;
      //     } else if (fruit === "grapefruit") {
      //       price = 1.8;
      //     } else if (fruit === "kiwi") {
      //       price = 4.0;
      //     } else if (fruit === "pineapple") {
      //       price = 8.6;
      //     } else if (fruit === "grapes") {
      //       price = 4.2;
      //     } else {
      //       console.log(
      //         "Please add a valid fruit (banana, apple, orange, grapefruit, kiwi, pineapple, grapes)",
      //       );
      //     }
      //   } else {
      //     console.log(
      //       "Please enter a valid day (monday, tuesday, wednesday, thursday, friday, saturday, sunday)",
      //     );
      //   }
      
      //   if (price >= 0) {
      //     console.log((price * quantity).toFixed(2));
      //   } else {
      //     console.log("Error: Price could not be determined.");
      //   }
      // }
      
      // fruit();

// BONUS 2.

      // function convertToDenar(euro) {
      //   if (Number.isNaN(euro)) {
      //     return NaN;
      //   }
      //   return euro * 61.5;
      // }
      
      // console.log(convertToDenar(100));   


// day 6

// 3.
      
      // for (i = 100; i >= 0; i -= 10) {
      //   console.log(i);
      // }

// 4
      
      // let upperLimit = Number(prompt("Enter upper limit"));
      // let lowerLimit = Number(prompt("Enter lower limit"));
      
      // if (
      //   !Number.isNaN(upperLimit) &&
      //   !Number.isNaN(lowerLimit) &&
      //   upperLimit > lowerLimit
      // ) {
      //   for (i = upperLimit; i >= lowerLimit; i -= 10) {
      //     console.log(i);
      //   }
      // }

// 5.
      
      // let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
      // for (number of numbers) {
      //   console.log(number);
      // }
      
      // for (number of numbers) {
      //   if (number % 2 === 0) {
      //     console.log(number);
      //   }
      // }
      
      // for (number of numbers) {
      //   if (number > 10 && number < 60) {
      //     console.log(number);
      //   }
      // }

// BONUS
      
      // function drawHouse(n) {
      //   let houseR = Math.floor((n + 1) / 2);
      //   let house = Math.floor(n / 2);
      
      //   for (let i = 1; i <= houseR; i++) {
      //     if (n % 2 === 0) {
      //       const first =
      //         "-".repeat(houseR - i) + "*".repeat(2 * i) + "-".repeat(houseR - i);
      //       console.log(first);
      //     } else {
      //       const first =
      //         "-".repeat(houseR - i) + "*".repeat(2 * i - 1) + "-".repeat(houseR - i);
      //       console.log(first);
      //     }
      //   }
      
      //   for (let i = 0; i < house; i++) {
      //     console.log("|" + "*".repeat(n - 2) + "|");
      //   }
      // }
      
      // drawHouse(4);

// day 7

// 1.
      // for (var i = 0; i <= 1000; i++) {
      //   if (i % 10 == 7) {
      //     console.log(i);
      //   }
      // }

// 2.
      
      // function radians_to_degrees(radians) {
      //   const pi = Math.PI;
      //   return Math.round(radians * (180 / pi));
      // }

      // console.log(radians_to_degrees(3.1416)); //180
      // console.log(radians_to_degrees(6.2832)); //360
      // console.log(radians_to_degrees(0.7854)); //45
      // console.log(radians_to_degrees(0.5236)); //30

// 3.

      // function biggerNumber(num1, num2) {
      //   if (num1 > num2) {
      //     console.log(num1);
      //   } else {
      //     console.log(num2);
      //   }
      // }
      
      // biggerNumber(5, 3); //5
      // biggerNumber(3, 5); //5
      // biggerNumber(10, 10); //10
      // biggerNumber(-5, 5); //5

// 4.

      // function compareStrings(word1, word2) {
      //   word1 = word1.toLowerCase();
      //   word2 = word2.toLowerCase();
      
      //   if (word1 == word2) {
      //     console.log("Yes");
      //   } else {
      //     console.log("No");
      //   }
      // }
      // compareStrings("Hello", "Hello"); //Yes
      // compareStrings("SMX", "smx"); //Yes
      // compareStrings("beer", "vodka"); //No
      // compareStrings("HeLlO", "hELLo"); //Yes

// 5.

      // function sumChar(word1) {
      //   var sum = 0;
      
      //   for (var i = 0; i < word1.length; i++) {
      //     if (word1[i] == "a") {
      //       sum += 1;
      //     } else if (word1[i] == "e") {
      //       sum += 2;
      //     } else if (word1[i] == "i") {
      //       sum += 3;
      //     } else if (word1[i] == "o") {
      //       sum += 4;
      //     } else if (word1[i] == "u") {
      //       sum += 5;
      //     }
      //   }
      //   console.log(sum);
      // }
      
      // sumChar("hello"); //6
      // sumChar("hi"); //3
      // sumChar("bamboo");  //9
      // sumChar("beer"); //4

// 8.
      
      // var library = [
      //   {
      //     title: "Bill Gates",
      //     author: "The Road Ahead",
      //     readingStatus: true,
      //   },
      //   {
      //     title: "Steve Jobs",
      //     author: "Walter Isaacson",
      //     readingStatus: true,
      //   },
      //   {
      //     title: "Mockingjay: The Final Book of The Hunger Games",
      //     author: "Suzanne Collins",
      //     readingStatus: false,
      //   },
      // ];
      
      // for (var i = 0; i < library.length; i++) {
      //   let book = "'" + library[i].title + "'" + " by " + library[i].author + ".";
      //   if (library[i].readingStatus) {
      //     console.log("Already read " + book);
      //   } else {
      //     console.log("You still need to read " + book);
      //   }
      // }

// BONUS 1.

      // function fiveAndGreaterOnly(arr) {
      //   let result = arr.filter(function (num) {
      //     return num >= 5;
      //   });
      
      //   return result;
      // }
      
      // console.log("fiveAndGreaterOnly", fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
      
      // BONUS 2.
      
      // const employees = [
      //   { name: "Alice", salary: 50000 },
      //   { name: "Bob", salary: 60000 },
      //   { name: "Charlie", salary: 70000 },
      // ];
      
      // let updatedSalaries = employees.map(function (employee) {
      //   return {
      //     name: employee.name,
      //     salary: Math.trunc(employee.salary * 1.1),
      //   };
      // });
      
      // console.log("updatedSalaries", updatedSalaries); // [{ name: 'Alice', salary: 55000 }, { name: 'Bob', salary: 66000 }, { name: 'Charlie', salary: 77000}]

      
// BONUS 3.

      // const people = [
      //   { name: "John", age: 25 },
      //   { name: "Sara", age: 17 },
      //   { name: "Mike", age: 30 },
      // ];
      
      // let adultNames = people
      //   .filter(function (person) {
      //     return person.age >= 18;
      //   })
      //   .map(function (person) {
      //     return person.name;
      //   });
      
      // console.log("adultNames", adultNames); // Output: ['John', 'Mike']

      
// BONUS 4.
      
      // const users = [
      //   { name: "John", email: "john@example.com" },
      //   { name: "Sara", email: "sara@gmail.com" },
      //   { name: "Mike", email: "mike@hotmail.com" },
      // ];
      
      // let domains = users.map(function (email) {
      //   return email.email.split("@")["1"];
      // });
      
      // console.log("domains", domains);

