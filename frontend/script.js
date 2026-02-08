function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let error = document.getElementById("error");

  if (user === "" || pass === "") {
    error.innerText = "Username dan password wajib diisi";
  } else {
    window.location.href = "dashboard.html";
  }
}
