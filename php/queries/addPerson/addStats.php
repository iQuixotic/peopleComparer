<?php
    require_once $_SERVER['DOCUMENT_ROOT'] . '/peopleComparer/php/config/connection.php';
    
    $height = $_POST['height'];
    $weight = $_POST['weight'];
    $age = $_POST['age'];

$query = "INSERT INTO stats (height, weigh, age) VALUES ($height, $weight, $age);";

mysqli_query($mysqli, $query);

var_dump($_POST['heght']);
var_dump(($_POST));