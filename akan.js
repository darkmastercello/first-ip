let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Afua", "Afua", "Ama"];


function getName() {
  let CC = parseInt(document.getElementById("century").value);
  let YY = parseInt(document.getElementById("year").value);
  let MM = parseInt(document.getElementById("month").value);
  let DD = parseInt(document.getElementById("date").value);
}
if (mm < 0 || mm > 32) {
  alert("Please enter a valid month!")
}
else if (MM === 2 && DD === 29 && YY % 4 === 0) {
  alert("You must have been born on a leap year!!")
}





