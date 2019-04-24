<?php
    require_once $_SERVER['DOCUMENT_ROOT'] . '/peopleComparer/php/config/connection.php';
    
/* $mysql is ready */
// $id = $_GET['id'];
$query = "SELECT * FROM stats";
$result = mysqli_query($mysqli, $query);

$rows = array();

while($row = mysqli_fetch_assoc($result)) {
    $rows[] = array(
    'personId' => $row['personId'], 
    'height' => $row['height'],
    'weight' => $row['weight'],
    'age' => $row['age']);

}    

echo json_encode($rows);

