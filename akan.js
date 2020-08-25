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
  console.log(dayOfTheWeek)
}




/*function fillForm(birthday) {
  console.log("form is submitted")
}
function dayOfMonth() {
  return (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
};



let myForm = document.querySelector("#detailForm")
myForm.addEventListener("submit",)


/*var result = dayOfMonth();
alert(result)*/
