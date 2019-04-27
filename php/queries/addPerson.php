<?php
    require_once $_SERVER['DOCUMENT_ROOT'] . '/peopleComparer/php/config/connection.php';
    
    $first = $_POST['fn'];
    $last = $_POST['ln'];
    $height = $_POST['height'];
    $weight = $_POST['weight'];
    $age = $_POST['age'];

$query = "INSERT INTO names (firstname, lastname) VALUES ('$first', '$last');";

mysqli_query($mysqli, $query);

$query2 = "INSERT INTO stats (height, weight, age) VALUES ('$height', '$weight', '$age');";

mysqli_query($mysqli, $query2);


// echo $first, $last;

var_dump($_POST['fn']);
var_dump(($_POST));