function validate(event) {
  var email = document.getElementById("user-email").value;
  if (!email.includes("@") || email.split("@").length != 2) {
    alert("Wpisano niepoprawny adres E-mail!")
    event.preventDefault();
    return;
  }

  sendEmail();
}

function sendEmail() {
  var topic = document.getElementById("topic-select").value;
  var message = document.getElemenyById("message-content").value;

  window.open(`mailto:t.blachut06@gmail.com?subject=${topic}&body=${message}`);
}
