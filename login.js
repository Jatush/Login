function toggleForm() {
    var loginContainer = document.getElementById("login-container");
    var signupContainer = document.getElementById("signup-container");
    if (loginContainer.style.display === "none") {
      loginContainer.style.display = "block";
      signupContainer.style.display = "none";
    } else {
      loginContainer.style.display = "none";
      signupContainer.style.display = "block";
    }
  }