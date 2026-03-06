<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "reality_show";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$sql = "INSERT INTO reports (name, email, message)
VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {

echo "<script>
alert('Report submitted successfully');
window.location.href='index.html';
</script>";

} else {

echo "Error: " . $conn->error;

}

$conn->close();

?>
