<?php
include 'classes/database.class.php';
include 'classes/idamura.class.php';

$database = new Database();
$idamura = new IdAmura();
$method = $_SERVER['REQUEST_METHOD'];
$host = ($_SERVER['HTTP_HOST']);

if ($method === 'GET') {
    $idamura->mail = $_GET['email'];
    $idamura->activationkey = $_GET['activation_code'];

    if ($idamura->activationkey !== null) {
        $user = $database->findUnverifiedUser($idamura);

        // if user exists and activate the user successfully
        if ($user && $database->activateUser($user['id'])) {
            header("Location: https://$host/login/login.html", true, 301);
        }
    }
}
?>