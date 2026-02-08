<?php
$conn = mysqli_connect("localhost", "root", "", "intern_db");

if (!$conn) {
    die("Koneksi database gagal");
}
