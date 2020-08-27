let year = document.getElementById("year").value
let month = document.getElementById("month").value
let day = document.getElementById("monthday").value
let genders = document.getElementsByName("radios");


form.addEventListener("submit", (e) => {



  let maleAkanNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"]


  let femaleAkanNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
  ];

  let daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  function getCentury(year) {
    var n = year.toString()
    // var n = year.slice(0, 2)
    return parseInt(n.slice(0, 2))
  }
  var Century = getCentury(year)

  function getYear(year) {
    var y = year.toString()
    return parseInt(y.slice(-2,))
  }
  var Year = getYear(year)

  alert(Year)
  alert(Century)
  alert(day)
  alert(month)

  // function getDay() {
  //   let dayName = (((Century / 4) - 2 * Century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7
  // }

  e.preventDefault()

})
