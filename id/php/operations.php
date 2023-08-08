<?php
include 'classes/database.class.php';
include 'classes/idamura.class.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$data = json_decode(file_get_contents('php://input'), true);
$database = new Database();
$idamura = new IdAmura();

$idamura->mail = $data['email'];
$idamura->password = $data['password'];
$operation = $data['operation'];

if ($operation === 'newUser') {
    $idamura->firstname = $data['firstname'];
    $idamura->surname = $data['surname'];
    $idamura->repeatpassword = $data['repeatpassword'];
    $database->saveNewUser($idamura);
}

if ($operation === 'loginUser') {
    $validUser = $database->checkId($idamura);
    echo $validUser;
}
?>