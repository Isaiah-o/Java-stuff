console.log("hello world")

const greeting = 'hello-world!'

console.log ('-------')
console.log(greeting)

let favNum = 3 // Number

let isItRaining = false // Boolean

console.log(favNum)
console.log('is It Raining?', isItRaining)

let empty

// conosole.log(empty)

isItRaining = true // reassigns let "variable" to a new value
// const would cause an error here 

//cannpt "RE-declare" variables with another let/const
//(cant make two variables of the same name)
//let isItRaining = False

console.log('is It Raining', isItRaining)

/*
Strong Concatenation
*/

const java = 'Java'
const js = 'Javascript'
const cplus = 'C++'
const ruby = 'Ruby'
const iLiketoCode = 'I like to code in'

const combinedstring = iLiketoCode + ' ' + cplus + '!'
const combinedstring2 = `${iLiketoCode}`


console.log(combinedstring) // New string that uses other strings in it
console.log(cplus) // Still stays C++ unchanged.

