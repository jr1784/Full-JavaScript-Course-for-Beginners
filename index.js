// document.getElementById("count-el").innerText = 5

// let count = 5
//count = count + 1
//console.log(count)

// initialize the count as 0
// listen for the clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the html to reflect the new count


// function increment(){
//     console.log("The button was clicked.")
// }

// function countDown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countDown()

// function theNumber(){
//     console.log(42)
// }
// let lap1 = 34
// let lap2 = 69
// let lap3 = 36
//
// function lapTimeTotal(){
//     let totalTime= lap1+lap2+lap3
//     console.log(totalTime)
// }
// lapTimeTotal()

// let lapsCompleted = 0
// function laps() {
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted)
// }
// laps()
// laps()
// laps()

// <h1>People entered:</h1>
// <h2 id="count-el">0</h2>
// <button id="increment-btn" onClick="increment()">INCREMENT BUTTON</button>
// <script src="index.js"></script>
// document.getElementById("count-el").innerText = 5

// <h2 id="save-log">0</h2>
// <button id="save-btn" onClick="save()">SAVE BUTTON</button>
// <script src="index.js"></script>

let countEl = document.getElementById("count-el")
let count = 0
function increment(){
    count = count + 1
  countEl.innerText = count
}

function save(){
    console.log(count)
}
//
// let username = "Per"
//
// let message = "you have three new notifications"
//
// let messageToUser = username + ", " + message + "!"
//
// console.log(messageToUser)
// let welcomeEl = document.getElementById("welcome-el")
//
// let name = "Jory!"
// let greeting = "Welcome back, "
//
//
//
// welcomeEl.innerText = greeting + name
//
// welcomeEl.innerText += " wav"