document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    let isValid = true; 
    const fullName = document.getElementById("fullName").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const nameRegex = /^[A-Za-z\s]{3,}$/; 
    const usernameRegex = /^[A-Za-z0-9]{6,}$/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
    if (!nameRegex.test(fullName)) {
      showError("fullName", "fullNameError");
      isValid = false;
    } else {
      hideError("fullName", "fullNameError");
    }
    if (!usernameRegex.test(username)) {
      showError("username", "usernameError");
      isValid = false;
    } else {
      hideError("username", "usernameError");
    }
    if (!emailRegex.test(email)) {
      showError("email", "emailError");
      isValid = false;
    } else {
      hideError("email", "emailError");
    }
    if (!passwordRegex.test(password)) {
      showError("password", "passwordError");
      isValid = false;
    } else {
      hideError("password", "passwordError");
    }
    if (isValid) {
      alert("Signup Successful!");
      document.getElementById("signupForm").reset(); 
    }
  });

function showError(inputId, errorId) {
  document.getElementById(inputId).classList.add("input-error");
  document.getElementById(errorId).style.display = "block";
}

function hideError(inputId, errorId) {
  document.getElementById(inputId).classList.remove("input-error");
  document.getElementById(errorId).style.display = "none";
}
