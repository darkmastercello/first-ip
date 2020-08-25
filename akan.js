let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Afua", "Afua", "Ama"];


let day = function () {
  let CC = parseInt(document.getElementById("century").value);
  let YY = parseInt(document.getElementById("year").value);
  let MM = parseInt(document.getElementById("month").value);
  let DD = parseInt(document.getElementById("date").value);
}

function calculate() {
  day()
  dayOfTheWeek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
  return (Math.floor(dayOfTheWeek))
  alert(dayOfTheWeek)
}
let result = function () {
  dayOfTheWeek = calculate();
  checkgender();
}
var checkgender = function () {
  calculate();
  var userGender = document.getElementsByName("morf"); //Try get document by name.same name for each gender
  if (userGender[0].checked == true) {
    gender = "male";
  } else if (userGender[1].checked == true) {
    gender = "female";
  }
  else {
  }



  alert("form is submitted")
}




