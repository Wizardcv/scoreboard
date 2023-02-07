let homeScore = 0; 
let guestScore = 0;

let sum = document.getElementById("number")
let sum2 = document.getElementById("number2")

 
function add () {
    homeScore += 1
    sum.innerText =  homeScore;
}

function add2 () {
    homeScore+= 2
    sum.textContent =  homeScore;
}

function add3 () {
    homeScore += 3
    sum.textContent =  homeScore;
}

function addguest1 () {
    guestScore += 1
    sum2.innerText = guestScore;
}

function addguest2() {
    guestScore += 2
    sum2.textContent = guestScore;
}

function addguest3 () {
    guestScore += 3
    sum2.textContent = guestScore;
}

