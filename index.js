let name = "Dima"
let lastName = "Matuschenko"
let fullName = name + " " + lastName
const age = 20
// let 7isMarried = false
// let .adress = "Ukraine"
// let let = "Dima"
// let is married = false
// const =7
console.log(fullName, age)
/*
ну вот пишу тут обьясняю
как работает мой код 
*/

let filmActor = "Vinston" // camelCase
let FullTime = 24 //PascalCase
let full_name = "frank-richard" //snake_case

const myButton = document.getElementById("my-button")
const yearInput = document.getElementById("year-input")
const ageForm = document.getElementById("age-form")
const checkAgeButton = document.getElementById("check-age-button")

myButton.addEventListener('click', function() {
  let userName = prompt("Будь ласка, введіть своє ім'я:")
  console.log("Привіт, " + userName + "!")
})

ageForm.addEventListener('submit', function(event) {
  event.preventDefault()
  const userAge = 2025 - yearInput.value
  console.log("Вам " + userAge + " років")
})


checkAgeButton.addEventListener('click', function() {
  let userAge = ageInput.value
  if (userAge >= 18) {
    console.log("Ви є повнолітним.")
  } else {
    console.log("Ви є неповнолітним.")
  }
})


