// === - equality op
// !== - not equal op
// </> - smaller/greater than op
// <=/=> =  smaller or equal/greater or equal op

let temp = 32
let isFreezing = temp <= 32

if (isFreezing) {
    console.log('It is freezing outside!')
}

// challange area
// if age less or equal to 7 print false
// if age greater than or equal print true

let age = 1
let isSenior = age <= 7
isSenior = age >= 65

console.log(isSenior)


//Challange Area
// if 7 or under print message about child pricing
// if 65 or older print senior discount

let ageDiscount = 200

if (ageDiscount <= 7) {
    console.log('You are eligibile for a child discount!')

} else if (ageDiscount >= 65) {
    console.log('You are eligible for a senior discount!')

}
