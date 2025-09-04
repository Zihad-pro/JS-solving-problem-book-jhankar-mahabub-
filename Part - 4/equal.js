// 1
const me = 50;
const friend = "50";
const check1 = me == friend;
const check2 = me === friend;
console.log(check1, check2);
// true , false

// 2
const check3 = "javaScript";
const check4 = "javaScript";
const result1 = check3 == check4;
const result2 = check3 === check4;
console.log(result1, result2);
// true , true

// 3
const number1 = 25;
const number2 = "25";
const result3 = number1 == number2;
const result4 = number1 === number2;
console.log(result3, result4);
// true , false

// 4
const friuts1 = "apple";
const friuts2 = "apple";
const cheakFriutes1 = friuts1 == friuts2;
const cheakFriutes2 = friuts1 === friuts2;
console.log(cheakFriutes1, cheakFriutes2);
// true , true

// 5
const word1 = "test";
const word2 = "TEST";
const checkWord1 = word1 == word2;
const checkWord2 = word1 === word2;
console.log(checkWord1, checkWord2);
// false , false

// 6
const variableX = 15;
const variableY = "20";
const equalNot1 = variableX != variableY;
const equalNot2 = variableX !== variableY;
console.log(equalNot1, equalNot2);
// true , true

// 7
const variableA = hello;
const variableB = "Hello";
const variableCheck1 = variableA == variableB;
const variableCheck2 = variableA === variableB;
console.log(variableCheck1, variableCheck2);
// ReferenceError: hello is not defined