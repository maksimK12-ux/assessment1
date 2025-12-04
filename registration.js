document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const dob = document.getElementById("dob").value;
    const password = document.getElementById("password").value;

    const error = document.getElementById("error");
    error.textContent = "";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!name || !email || !dob || !password) {
    error.textContent = "Complete all the fields.";
    return;
    }

    if (!emailPattern.test(email)) {
    error.textContent = "Enter a valid email address.";
    return;
    }

    if (!passwordPattern.test(password)) {
    error.textContent = "Your password must be 8 characters or longer (Only use letters and numbers)";
    return;
    }

    document.getElementById("rName").textContent = name;
    document.getElementById("rEmail").textContent = email;
    document.getElementById("rDob").textContent = dob;

    document.getElementById("regForm").style.display = "none";
    document.getElementById("result").style.display = "block";

    window.location.href = "result.html";
});