<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

class Database {

    private $prefix = "";

    function OpenCon() {
        $host = ($_SERVER['HTTP_HOST']);

        if ($host == "localhost") {
            $dbhost = "localhost";
            $dbuser = "root";
            $dbpass = "";
            $db = "pluto";
            $this->prefix = "";
        } else {
            /*
              $dbhost = "mysqlsvr77.world4you.com";
              $dbuser = "sql7913571";
              $dbpass = "BBChain2023!";
              $db = "4920074db1";
             */

            $dbhost = 'mysqlsvr83.world4you.com';
            $db = '5654376db1';
            $dbuser = 'sql1715921';
            $dbpass = 'z@@nhjcq';
        }

        $charset = 'utf8mb4';
        $dsn = "mysql:host=$dbhost;dbname=$db;charset=$charset";

        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ];

        $conn = new PDO($dsn, $dbuser, $dbpass, $options);

        return $conn;
    }
    
    function OpenSaveCon() {
        $host = ($_SERVER['HTTP_HOST']);

        if ($host == "localhost") {
            $dbhost = "localhost";
            $dbuser = "root";
            $dbpass = "";
            $db = "pluto";
            $this->prefix = "";
        } else {
            /*
              $dbhost = "mysqlsvr77.world4you.com";
              $dbuser = "sql7913571";
              $dbpass = "BBChain2023!";
              $db = "4920074db1";
             */

            $dbhost = 'mysqlsvr83.world4you.com';
            $db = '5654376db1';
            $dbuser = 'sql1715921';
            $dbpass = 'z@@nhjcq';
        }
       
        $conn = mysqli_connect($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
        
        return $conn;
    }

    function saveResult($inQuery) {
        $result = mysqli_query($this->OpenSaveCon(), $inQuery);
    }

    function CloseCon($conn) {
        $conn->close();
    }

    function checkId($idAmura) {
        $stmt = $this->OpenCon()->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->execute([$idAmura->mail]);

        echo count($stmt->fetchAll()) > 0;
    }

    public function saveNewUser($idAmura) {
        if ($this->checkId($idAmura) > 0) {
            echo "User already existing";
            return null;
        }

        $this->createMail($idAmura);
        echo "Activation Key sent";
    }

    function createMail($idAmura) {
        $idAmura->activationkey = bin2hex(random_bytes(64));
        $email = $idAmura->mail;
        $SENDER_EMAIL_ADDRESS = "activation@amura.io";
        $host = ($_SERVER['HTTP_HOST']);

        // Expiration within 3 days 
        // Calculation of the amount of seconds
        $expirationRange = 3 * 24 * 60 * 60;

        // create the activation link
        $activation_link = "http://$host/php/activation.php?email=$email&activation_code=$idAmura->activationkey";

        // set email subject & body
        $subject = 'Please activate your account';
        $message = <<<MESSAGE
            Hello $idAmura->firstname $idAmura->surname,
            Please click the following link to activate your account:
            $activation_link
            MESSAGE;
        // email header
        $header = "From:" . $SENDER_EMAIL_ADDRESS;

        // send the email
        mail($email, $subject, nl2br($message), $header);

        $statement = "INSERT INTO users "
                . "(first_name, last_name, email, password_hash, phone, created_at, active, activationcode, activation_expiry) VALUE ('"
                . $idAmura->firstname . "', '"
                . $idAmura->surname . "', '"
                . $idAmura->mail . "', '"
                . $idAmura->password . "','+490',CURRENT_TIMESTAMP(), 0, '"
                . $idAmura->activationkey . "','"
                . date('Y-m-d H:i:s', time() + $expirationRange) . "')";
        
        $this->saveResult($statement);
    }

    public function findUnverifiedUser($idAmura) {
        $sql = 'SELECT user_id as id, activationcode, activation_expiry < now() as expired
                FROM users
                WHERE active = 0 
                AND email = ? 
                AND activationcode = ?';

        $stmt = $this->OpenCon()->prepare($sql);
        $stmt->execute([$idAmura->mail, $idAmura->activationkey]);
        $user = $stmt->fetch();

        if ($user) {
            if ((int) $user['expired'] === 1) {
                $this->deleteUserById($user['id']);
                return null;
            }
            
            return $user;
        }

        return null;
    }

    public function activateUser(int $userId): bool {
        $sql = 'UPDATE users
                SET active = 1,
                    activated_at = CURRENT_TIMESTAMP
                WHERE user_id=?';

        $stmt = $this->OpenCon()->prepare($sql);

        return $stmt->execute([$userId]);
    }

    function deleteUserById(int $id, int $active = 0) {
        $sql = 'DELETE FROM users
                WHERE id =? and active=?';

        $stmt = $this->OpenCon()->prepare($sql);
        return $stmt->execute([$id, $active]);
    }
}
