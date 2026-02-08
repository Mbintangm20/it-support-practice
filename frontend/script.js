document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let error = document.getElementById("error");

  if (user === "" || pass === "") {
    error.innerText = "Username dan password wajib diisi";
    return;
  }

  fetch("../backend/php/login.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `username=${encodeURIComponent(user)}&password=${encodeURIComponent(pass)}`
  })
  .then(res => res.text())
  .then(data => {
    if (data.trim() === "success") {
      window.location.href = "dashboard.php";
    } else {
      error.innerText = "Login gagal";
    }
  });
});
