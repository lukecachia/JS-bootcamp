//Challange Area
//IF both vegan - show vegan menu
//IF at least one vegan - show both menus
//ELSE neither vegan - show anything 

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Vegan options only')

} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Show vegan and non vegan options')

} else {
    console.log('Show non vegan options')
}