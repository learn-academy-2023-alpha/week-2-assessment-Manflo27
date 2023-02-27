// ASSESSMENT 2: Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.


// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// // b) Create the function that makes the test pass.

// // --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// // a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"


describe("divide3", () => {
    it("returns if a number divisible by three", () => {
      expect(divide3(object1.number)).toEqual("15 is divisible by three")
      expect(divide3(object2.number)).toEqual("0 is divisible by three")
      expect(divide3(object3.number)).toEqual("-7 is not divisible by three")
    })
  })
//   ReferenceError: divide3 is not defined 

// //  Pseudocode: Create a function called divide3
// // input takes number as an argument.
// conditional to check if number is divisible by three using modulo symbol
// Return is the number in string interpolation 
// // output the number inside it is evenly divisible by three or not.
  

const divide3 = (number) => {
if (number % 3===0)
    return `${number} is divisible by three`
    else if (number % 3===0)
    return  `${number} is divisible by three`  
    else if (number % 0!==3)
    return  `${number} is not divisible by three`
    }
    


    
    

// // b) Create the function that makes the test pass.

// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// // a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
describe("myNouns", () => {
it("returns an array with the first word capitalized.", () => {
expect(myNouns(randomNouns1)).toEqual("Streetlamp,Potato,Teeth,Conclusion,Nephew")
 expect(myNouns(randomNouns2)).toEqual("Temperature,Database,Chopsticks,Mango")
})})

    //   ReferenceError: upperCase is not defined

// Pseudocode: 1.create a function called myNouns
// 2. input - iterate through the array using .map
// 3. Uses chartAt to select which index is going to be capitalized,touppercase to uoopercase
// first letter. .substring extracts the characters from start to end, 1 is where it stops.
// 4 .join to convert the array to a string, seperates the commas.
 
    const myNouns = (array) => {
        return array.map(value => {
        return value.charAt(0).toUpperCase(0) + value.substring(1)
        }).join()
        }
            
    // Expected: 1
    // 


        
        

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.
describe("myIndex", () => {
    it("returns the index of the first vowel.", () => {
    expect(myIndex(vowelTester1)).toEqual(1)
    expect(myIndex(vowelTester2)).toEqual(0)
     expect(myIndex(vowelTester3)).toEqual(2)
        })
      })
    //   ReferenceError: myIndex is not defined
    //  Pseudocode: 1. Create a Function called myIndex
    //  For loop to iterate through array of myVowel
    //  return string if it includes a,e,i,o,u. Im stuck at this point, .indexOf is supposed to return 
    // the first index found in the array.

    const myIndex = (string) => {
    let myVowel = ["a,e,i,o,u"];
  for (let i = 0; i < myVowel.length; i++) {
    if (string.includes[i]){
        return string.indexOf()
    }
  }}

//   Expected: 1
//   Received: undefined

    // Tests:       1 failed, 2 passed, 3 total