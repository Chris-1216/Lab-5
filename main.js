function registerUser() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let dob = document.getElementById("dob").value;
  let output = document.getElementById("output");

  if (firstName == "" || lastName == "" || email == "" || password == "" || dob == "") {
    output.innerHTML = "Registration Failed: All fields must be filled in.";
    return;
  }

  if (password.indexOf("!") == -1 && password.indexOf("?") == -1) {
    output.innerHTML = "Password has to have at least one special character";
    return;
  }

  let stars = "";

  for (let i = 0; i < password.length; i++) {
    stars = stars + "*";
  }

  let user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: stars,
    dob: dob
  };

  output.innerHTML =
    "Registration Successful!<br><br>" +
    "First Name: " + user.firstName + "<br>" +
    "Last Name: " + user.lastName + "<br>" +
    "Email Address: " + user.email + "<br>" +
    "Password: " + user.password + "<br>" +
    "Date of Birth: " + user.dob;
}