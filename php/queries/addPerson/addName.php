<?php
    require_once $_SERVER['DOCUMENT_ROOT'] . '/peopleComparer/php/config/connection.php';
    
    $first = $_POST['fn'];
    $last = $_POST['ln'];

$query = "INSERT INTO names (firstname, lastname) VALUES ('$first', '$last');";

mysqli_query($mysqli, $query);

var_dump($_POST['fn']);
var_dump(($_POST));