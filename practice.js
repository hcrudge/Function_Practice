
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

const chanceOfTuna = () => {
    if ((Math.random() * 3) > 2) {
        console.log("Sven hooked a tuna! :)")
    }
    else {console.log("Sven came up empty-handed. :(")}
}
chanceOfTuna()

