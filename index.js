/*
Welldone brother, this is really cool implementation. I'd add min just below

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
*/

/*

What do we intend to achieve ?

- Increase score of home / guest accordingly when triggered with buttons meant for this purpose (see HTML)

How do we do this ?

- How about we write a add() function that takes in which button got clicked (home / guest) as first parameter and by what count to increase the score.

What do we have ?

- The DOM event API gives us access to an event object which we get the clicked button from

- we can use javascript closures to gain access to get event and update count

*/

// sum and counts
let homeScore = 0;
let guestScore = 0;


const homeSum = document.getElementById("number");
const guestSum = document.getElementById("number2");

// get all the buttons with the add functionality
const nums = document.querySelectorAll(".num-btn");

// attach an event listener for each button.. (I probably won't to do this ideally, I'd use event bubbling for performance but that's advanced stuff)
nums.forEach((num) => {
  // just attaching event listener for each one
  num.addEventListener("click", (e) => {
    //   checking if the clicked button is an home button
    if (e.target.classList.contains("home-btn")) {
      // assign new value to home count based on the btn that got clicked, switch statement is better here but here we go with if else...
      if (e.target.id === "home-plus-one") {
        homeScore++;
        homeSum.textContent = homeScore;
      } else if (e.target.id === "home-plus-two") {
        homeScore = homeScore + 2;
        homeSum.textContent = homeScore;
      } else {
        homeScore = homeScore + 3;
        homeSum.textContent = homeScore;
      }
    }

    //   checking if the clicked button is a guest button
    if (e.target.classList.contains("guest-btn")) {
      // assign new value to guest count based on the btn that got clicked, switch statement is better here but here we go with if else...
      if (e.target.id === "guest-plus-one") {
        guestScore++;
        guestSum.textContent = guestScore;
      } else if (e.target.id === "guest-plus-two") {
        guestScore = guestScore + 2;
        guestSum.textContent = guestScore;
      } else {
        guestScore = guestScore + 3;
        guestSum.textContent = guestScore;
      }
    }
  });
});
// I added new button to the html file and a function that reset the scores to zero
const reset = document.getElementById("reset-btn")

reset.addEventListener("click", (e) => {
  let resetSum = 0
  homeSum.textContent = resetSum;
  guestSum.textContent = resetSum;
})