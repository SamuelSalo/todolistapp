<?php

$name = $_POST['name'];
$complete = $_POST['complete'];
$pw = $_POST['pw'];

$con=mysqli_connect("localhost","root","root","todolistapp");
$sql = "INSERT INTO task (taskname, complete, password) VALUES ('$name', $complete, $pw)";

mysqli_query($con, $sql);

mysqli_close($con);
?>