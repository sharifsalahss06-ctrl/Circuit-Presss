// validate form
function validateForm() {
const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();
if (!name || !email || !message) {
alert("Please fill in all required fields.");
return false;
}
if (!email.includes("@")) {
alert("Please enter a valid email address.");
return false;
}
return true;
}
