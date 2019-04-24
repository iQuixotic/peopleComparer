<?php
    require_once $_SERVER['DOCUMENT_ROOT'] . '/peopleComparer/php/config/connection.php';
    
/* $mysql is ready */
// $id = $_GET['id'];
$query = "SELECT * FROM names";
$result = mysqli_query($mysqli, $query);

$rows = array();

while($row = mysqli_fetch_assoc($result)) {
    $rows[] = array(
    'id' => $row['id'], 
    'firstname' => $row['firstname'],
    'lastname' => $row['lastname']);
}    

echo json_encode($rows);
