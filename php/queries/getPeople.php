<?php
    require_once $_SERVER['DOCUMENT_ROOT'] . '/peopleComparer/php/config/connection.php';
    
/* $mysql is ready */
// $id = $_GET['id'];
// $query = "SELECT * FROM names";
$query = "SELECT names.id, names.firstname, names.lastname, 
          stats.height, stats.weigh, stats.age
          FROM names INNER JOIN stats
          ON names.id = stats.personId";

$result = mysqli_query($mysqli, $query);

$rows = array();

while($row = mysqli_fetch_assoc($result)) {
    $rows[] = array(
    'id' => $row['id'], 
    'firstname' => $row['firstname'],
    'lastname' => $row['lastname'],
    // 'personId' => $row['personId'], 
    'height' => $row['height'],
    'weight' => $row['weigh'],
    'age' => $row['age']);
}    

echo json_encode($rows);
