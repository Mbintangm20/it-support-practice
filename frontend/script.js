// ===== LOGIN =====
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

// ===== DASHBOARD =====
let no = 1;

function tambahData() {
  let nama = document.getElementById("nama").value;
  let masalah = document.getElementById("masalah").value;
  let tabel = document.getElementById("tabelData");

  if (nama === "" || masalah === "") {
    alert("Semua field wajib diisi!");
    return;
  }

  let row = tabel.insertRow();
  row.insertCell(0).innerText = no++;
  row.insertCell(1).innerText = nama;
  row.insertCell(2).innerText = masalah;

  let aksi = row.insertCell(3);
  aksi.innerHTML = `<button onclick="hapusData(this)">Hapus</button>`;

  document.getElementById("nama").value = "";
  document.getElementById("masalah").value = "";
}

function hapusData(btn) {
  let row = btn.parentNode.parentNode;
  row.remove();
}

function logout() {
  window.location.href = "login.html";
}
