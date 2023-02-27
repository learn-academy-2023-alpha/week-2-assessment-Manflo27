// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Alpha 2023"
console.log(cohort.split(""))

// a) Your answer: I believe it will log each character in that string individually as it is splitting up the string..split turns a a string into an array of those chracters.
// // b) Verify and explain: 'A', 'l', 'p', 'h','a', ' ', '2', '0','2', '3' was the output. Each character was split and logged out individually.

// --------------------2) What will this log?

const greeter = (name) => {
   `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: This will log out "Hello Learn Student!" as the function of greeter is passing a parameter of name and returning Hello with string interprolation to make it dynamic.
// b) Verify and explain: It came back undefined, I believe by adding a return on line 19 would invoke the correct output of Hello, LEARN Student!

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: multipliedByTwo is equal to an arrray of numbers.By using .map it is using iteration to go through the array. 
// The arrow function allows the array to return the number multiplied by 2. I believe the number should be value as it is always the first that is the output.
// b) Verify and explain: [ 8, 10, 12, 14, 16 ] was the output. The .map iterated through original array to output the sam elength of the array but with each one multiplied by 2. 
// The arrow syntax returned the array with each element multiplied by 2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer:Thge output should be [11,13,15] as the .filter iterates through the array and return the stated condition. the stated condition
// in this case is modulo of 2 !==0 which means return the odd numbers in that array
// b) Verify and explain: [ 11, 13, 15 ] was the output. My original answer was correct as the array was filtered to produce only odd numbers in the original array.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: Listed are objects that contain strings. The expected output should be "JavaScript" as it is nested in the key value pairs of languages. The [0] is the
// index of the position in that array in languages.
// b) Verify and explain: JavaScript was the output. I was right in my initial answer as it is nested in the the key value pairs. By 
// console logging (myCodingSkills.languages[0]) it takes the position in that array and outputs it. 
 