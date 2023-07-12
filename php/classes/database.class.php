<?php
class Database {
    private $prefix = "";
    
    
    function OpenCon() {
        $host = ($_SERVER['HTTP_HOST']);
        
        if($host == "localhost") {
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
            $db     = '5654376db1';
            $dbuser = 'sql1715921';
            $dbpass = 'z@@nhjcq';
       }
       
        $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);

        return $conn;
    }
    
    function saveResult($inQuery) {
        $result = mysqli_query($this->OpenCon(), $inQuery);
    }

    function CloseCon($conn) {
        $conn -> close();
    }
    
    function checkId($idAmura) {
        $inQuery = "SELECT * FROM users WHERE mail = '" . $idAmura->mail . "'";
        $result = mysqli_query($this->OpenCon(), $inQuery);
        $count = 0;
        
        while($row = $result->fetch_assoc()) {
            $count++;
            break;
        }
        
        if($count > 0) {
            echo "User exists already!";
        }
    }
    
    public function saveNewUser($idAmura) {
        $statement = "INSERT INTO users "
                . "(firstname, lastname, mail, password) VALUE ("
                . "'" . $idAmura->firstname . "', '" 
                . $idAmura->surname . "', '" 
                . $idAmura->mail . "', '" 
                . $idAmura->password . "')";

        $this->saveResult($statement);
    }
    
}
