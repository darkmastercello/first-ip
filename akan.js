let year = document.getElementById("year").value
let month = document.getElementById("month").value
let day = document.getElementById("monthday").value
let genders = document.getElementsByName("radios");


form.addEventListener("submit", (e) => {
  e.preventDefault()
  function dayValidator() {
    if (month === 2 && Number(year) % 4 === 0) {
      if (day > 28 || day < 1) {
        return false;
        alert("enter valid date!")
      } else if (month === 2 && day > 29) {
        return false;
      } else if (month === 2 && day < 1) {
        return false;
      } else {
        return true;
      }
    } else if (day < 1 || day > 31) {
      return false;
    } else {
      return true;
    }
  }
})

