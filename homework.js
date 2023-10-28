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
