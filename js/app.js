// Dichiaro le variabili
const button = document.querySelector('input[name="submit"')
const kmText = document.querySelector('input[name="km"]')
const ageDiscount = document.querySelector('#discount')
console.log(kmText, button, ageDiscount)
let price
let discount
let finalPrice
// Aggiungo un eventListener al click di submit
button.addEventListener('click',function () {
    price = parseInt(kmText.value) * 0.21
    console.log(kmText.value, ageDiscount.value)
    console.log(price)

    switch (ageDiscount) {
        case 'young':
            discount = price * 0.2
            finalPrice = (price - discount).toFixed(2)
        case 'old':
            discount = price * 0.4
            finalPrice = (price - discount).toFixed(2)
        case 'noDiscount':
            finalPrice = price
    }
    console.log(finalPrice)
    
})