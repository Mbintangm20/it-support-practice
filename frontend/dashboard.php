<?php
session_start();

// CEK LOGIN
if (!isset($_SESSION['login'])) {
    header("Location: login.html");
    exit;
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Dashboard</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<h2>Dashboard IT Support</h2>

<p>Selamat datang, <b><?= $_SESSION['username']; ?></b></p>

<a href="../backend/php/logout.php">Logout</a>

<hr>

<form>
  <input type="text" id="nama" placeholder="Nama User">
  <input type="text" id="masalah" placeholder="Masalah">
  <button type="button" onclick="tambahData()">Tambah</button>
</form>

<table border="1">
  <thead>
    <tr>
      <th>No</th>
      <th>Nama</th>
      <th>Masalah</th>
      <th>Aksi</th>
    </tr>
  </thead>
  <tbody id="tabelData"></tbody>
</table>

<script src="script.js"></script>
</body>
</html>
