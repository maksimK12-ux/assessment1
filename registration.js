document.getElementById("regForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let dob = document.getElementById("dob").value;
  let password = document.getElementById("password").value;

  let errors = [];


  if (!name || !email || !dob || !password) {
    errors.push("Please fill in every field");
  }


  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email && !emailPattern.test(email)) {
    errors.push("Invalid email format");
  }


  let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (password && !passwordPattern.test(password)) {
    errors.push("Password must be at least 8 characters (only letters and numbers)");
  }

  let errorDiv = document.getElementById("errorMessages");
  errorDiv.innerHTML = "";

  if (errors.length > 0) {
    errorDiv.innerHTML = errors.join("<br>");
  } else {

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("dob", dob);
    localStorage.setItem("password", password);

    window.location.href = "result.html";
  }
});