window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed")
}
)


let day = function () {
  let CC = document.querySelector("#century").value
  let MM = document.querySelector("#month").value
  let YY = document.querySelector("#year").value
  let DD = document.querySelector("#date").value
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
