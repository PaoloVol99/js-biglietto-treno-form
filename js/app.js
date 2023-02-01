// Dichiaro le variabili
const button = document.querySelector('input[name="submit"')
const kmText = document.querySelector('input[name="km"]')
const ageDiscount = document.querySelector('#discount')
const completeName = document.querySelector('input[name="firstLastName"]')
console.log(kmText, button, ageDiscount)
let price
let discount
let finalPrice = 0
let discountPercentage
const finalPrint = document.querySelector('#price')
let random = (Math.floor(Math.random() * 100000) + 10000)
// Aggiungo un eventListener al click di submit
button.addEventListener('click',function () {
    price = parseInt(kmText.value) * 0.21
    console.log(kmText.value, ageDiscount.value)
    console.log(price)

    switch (ageDiscount.value) {
        case 'young':
            discount = price * 0.2
            finalPrice = (price - discount).toFixed(2)
            discountPercentage = '20%'
            document.querySelector('#applied-discount').style.color = 'green'
            document.querySelector('#starting-price').style.color = 'red'
            document.querySelector('#starting-price').style.textDecoration = 'line-through'
            console.log(finalPrice)
            break
        case 'old':
            discount = price * 0.4
            finalPrice = (price - discount).toFixed(2)
            discountPercentage = '40%'
            document.querySelector('#applied-discount').style.color = 'green'
            document.querySelector('#starting-price').style.color = 'red'
            document.querySelector('#starting-price').style.textDecoration = 'line-through'
            console.log(finalPrice)
            break
        case 'noDiscount':
            finalPrice = price.toFixed(2)
            discountPercentage = 'Nessuno sconto applicato'
            document.querySelector('#applied-discount').style.color = 'red'
            document.querySelector('#starting-price').style.color = 'green'
            break
        case 'baseValue':
            finalPrice = price.toFixed(2)
            discountPercentage = 'Nessuno sconto selezionato'
    }    
    console.log(finalPrice)
    finalPrint.innerHTML = '€ ' + finalPrice
    console.log(completeName.value)
    
    document.querySelector('#name').innerHTML = completeName.value
    document.querySelector('#distance').innerHTML = kmText.value
    document.querySelector('#applied-discount').innerHTML = discountPercentage
    document.querySelector('#ticket-code').innerHTML = random
    document.querySelector('#starting-price').innerHTML = '€ ' + price.toFixed(2)
    
})

let mode = document.querySelector('#mode')
let header = document.querySelector('.main-header')
let body = document.querySelector('.grid')
let cardHeader = document.querySelector('.card-header')
let card = document.querySelector('.card')
let cardFooter = document.querySelector('.card-footer')
let generate = document.querySelector('.button')
let moon = document.querySelector('#moon')
let sun = document.querySelector('#sun')

mode.addEventListener('click', function() {
    console.log('click')
    header.classList.toggle("dark")
    body.classList.toggle("dark-body")
    cardHeader.classList.toggle("dark")
    card.classList.toggle("dark-card")
    card.classList.toggle("card-shadow")
    cardFooter.classList.toggle("dark-footer")
    generate.classList.toggle("dark")
    moon.classList.toggle("display")
    sun.classList.toggle("display")
})



