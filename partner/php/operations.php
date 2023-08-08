<?php
include 'php/classes/database.class.php';
include 'php/classes/idamura.class.php';

$isValid = false;
$id = '';
$operation = 'none';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $isValid = true;
    $firstname = $_SERVER['firstname'];
    $surname = $_SERVER['surname'];
    $email = $_SERVER['email'];
    $password = password_hash($_SERVER['password'], PASSWORD_DEFAULT);
    $repeatpassword = password_hash($_SERVER['repeatpassword'], PASSWORD_DEFAULT);
    $operation = $_SERVER['operation'];
}

// Check if Passwords are correct and in the right length
if($isValid) {
    if($repeatpassword != $password) {
        $isValid = false;
    }
}

// check the delivered token 
if($isValid) {
    $database = new Database ();
    $idamura = new IdAmura();
    $idamura->firstname = $firstname;
    $idamura->surname = $surname;
    $idamura->mail = $email;
    $idamura->password = $password;
    $idamura->repeatpassword = $repeatpassword;
    
    if($operation == 'newUser') {
        $database->saveNewUser($idamura);
    }
}
?>