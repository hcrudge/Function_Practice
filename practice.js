
// Introduction: Age in Dog Years Section - 

// const calculateAgeInDogYears = (ageOfPerson) =>{
//     const ageInDogYears = ageOfPerson / 7

//     return ageInDogYears
// }

// const dogAge = calculateAgeInDogYears(56)
// console.log(dogAge)


// Practice: Best in Show Section - 

// const favoriteDogBreed = (dogBreed) => {
//     if (dogBreed === "meow"){
//     return "I like cats!"    
//     }
//     return "my favorite dog breed is " + dogBreed
// }
// const doggy = favoriteDogBreed("meow")
// console.log(`When it comes to pets,${doggy}`)

// Practice: Addition Section - 

// const add = (first, second, third) => {
//     const sum = first + second + third
//     return sum 
// }
// const addValue = add(17,4,11)
// console.log(addValue)

// Practice: Self-Driving Cars

// const go = (direction, speed) => {
//     let message = `The car is moving ${direction} at ${speed} mph. `
    
//     if (speed > 75){
//         let message = message.concat("SLOW DOWN")
//         console.log(speedMessage)
//             return
//     }     
//     console.log(message) 
// }
// go("forward", 65)


// Practice: Evens or Odds - 

// const evenOrOdd = (number) => {
//     if(number % 2 === 0) {
//        return "Even" 
//     }
//     return "Odd"
// }
// const number = evenOrOdd(9)
// console.log(number)

// Evens of Odds Exploration Tasks - 

// const arr = [ 7 , 23 , 10 , 200, 0 ]

// const evenOrOdd = (arr) => {
//     for(const ar of arr) {
    
//     if(ar % 2 === 0) {
//        console.log("Even")  
//     }
//     else (console.log("Odd"))
//     }
// }
// evenOrOdd(arr)


// Practice: Double Functions

// const words = [
//     "The", "killing", "complex", "houses",
//     "married", "kittens", "and", "single",
//     "soldiers", "and", "their", "kleptomaniacal",
//     "families"
// ]

/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)
 */
// let kWords =[]
// let noKWords=[]
// const removeKWords = () => {
    
//     for(const word of words) {
        
//         if (word.startsWith("k")) {
        
//             kWords.push(word)
//         }
//         else { 
//             noKWords.push(word) 
//         };
//     };
//     return noKWords
// };

/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */

// const singleString =() => {
//     const newestWords= removeKWords().join(' ')
//     return newestWords
// }

/*
Invoke the filtering function and store its return value
*/

// console.log(singleString())

/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/

// Practice: You Can Tune a Piano, But You Can't... -

// const chanceOfTuna = () => {
//     if ((Math.random() * 3) > 2) {
//         console.log("Sven hooked a tuna! :)")
//     }
//     else {console.log("Sven came up empty-handed. :(")}
// }
// chanceOfTuna()

// Practice: Fast Food (Multiple Parameters)

// Practice: Same Chores, Different Days -

// const twice = number => number * 2

// twiceTwo = twice(2)
// console.log(twiceTwo)  // 4

// twiceSix = twice(6)
// console.log(twiceSix)  // 12

// twiceThirteen = twice(13)
// console.log(twiceThirteen)  // 26

// const timesFive = number => number * 5
// console.log(timesFive(2))  // 10
// console.log(timesFive(5))  // 25

// const square = number => number * number
// console.log(square(4))  // 16
// console.log(square(13))  // 169

/*
    I can make any number bigger, but you need to tell
    me how much bigger by giving me the function you
    want me to invoke on the number
*/
// const bigify = (number, operationFunction) => {
//     const result = operationFunction(number)
//     return result
// }
// console.log(bigify(7,square))

// const number = 7
// const by2 = bigify(number, twice)  // 14
// const by5 = bigify(number, timesFive)  // 35
// const byItself = bigify(number, square)  // 49

// Defining the Chores 

// const sally = {
//     firstName: "Sally",
//     lastName: "McPherson"
// };

// const grocery = (person) => `${person.firstName} ${person.lastName} went to the grocery store.`
// const errands = (person) => `${person.firstName} ${person.lastName} ran errands.`
// const library = (person) => `${person.firstName} ${person.lastName} borrowed 16 books and 5 movies from the library.`
// const read = (person) => `${person.firstName} ${person.lastName} read 3 of the borrowed library books.`
// const watched = (person) => `${person.firstName} ${person.lastName} watched a new TV show.`
// const garden = (person) => `${person.firstName} ${person.lastName} weeded the garden.`

// console.log(garden(sally))

// Lazy Day - 
// const sally = {
//         firstName: "Sally",
//         lastName: "McPherson"
//     };
// const gardening = (chore) => `weeded the ${garden}`

// const dayPlanner = (chore, person, day) => `${person.firstName} ${person.lastName} ${chore} on ${day}.`

// const output = dayPlanner(gardening("garden"), sally, "Tuesday")

// console.log(output)

// Busy Day - 

const sally = {
        firstName: "Sally",
        lastName: "McPherson"
    };
const reading = (firstChore) => `${firstChore} 3 borrowed library books`
const watching = (secondChore) => `${secondChore} a new TV show`
const gardening = (thirdChore) => `weeded the ${thirdChore}`  

const dayPlanner = (firstChore, secondChore, thirdChore, person, day) => `On ${day}, ${person.firstName} ${person.lastName} ${firstChore}, ${person.firstName} ${person.lastName} ${secondChore}, and ${person.firstName} ${person.lastName} ${thirdChore}.`
    
const output = dayPlanner(reading("read"), watching("watched"), gardening("garden"),sally,"Tuesday")

console.log(output)