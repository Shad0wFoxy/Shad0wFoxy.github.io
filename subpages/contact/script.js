function validate(event) {
  var email = document.getElementById("user-email").value;
  if (!email.includes("@") || email.split("@").length != 2) {
    alert("Wpisano niepoprawny adres E-mail!")
    event.preventDefault();
  }
}
