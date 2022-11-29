<?php
$pw = $_POST['pw'];

$con=mysqli_connect("localhost","root","root","todolistapp");

$sql = "SELECT * FROM task WHERE password='$pw'";
$result = mysqli_query($con, $sql);
if(mysqli_num_rows($result) > 0)
{
	while($row = mysqli_fetch_assoc($result))
	{
		if($row['complete'] == 1) echo '<div class="todo taskcomplete">';
		else echo '<div class="todo">';
		echo '<li>';
		echo $row['taskname'];
		echo '</li>';
		echo '<button class="taskbutton"><span class="material-icons-outlined">check_circle</span></button>'; 
		echo '<button class="deletebutton"><span class="material-icons-outlined">delete_outline</span></button>';
		echo '</div>';
	}
}
mysqli_close($con);
?>